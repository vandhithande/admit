"use client";

import {
  startTransition,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

export type PickedSchool = {
  name: string;
  location: string;
};

type Suggestion = {
  id: number;
  name: string;
  city: string;
  state: string;
  location: string;
  domain: string;
  acceptanceRate: number | null;
};

function SuggestionFavicon({ domain }: { domain: string }) {
  const [failed, setFailed] = useState(false);
  const src = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=32`;

  if (failed) {
    return (
      <span
        className="mt-0.5 h-8 w-8 shrink-0 rounded-full bg-neutral-200"
        aria-hidden
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element -- external favicon URL; tiny icon for combobox rows
    <img
      src={src}
      alt=""
      width={32}
      height={32}
      className="mt-0.5 h-8 w-8 shrink-0 rounded-sm object-contain"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

type Props = {
  picked: PickedSchool | null;
  onPicked: (school: PickedSchool) => void;
  onClear: () => void;
};

export function CollegeScorecardCombobox({
  picked,
  onPicked,
  onClear,
}: Props) {
  const id = useId();
  const listId = `${id}-listbox`;
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [hint, setHint] = useState<string | null>(null);

  const prevPickedRef = useRef<PickedSchool | null>(null);

  useEffect(() => {
    function onDocMouseDown(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, []);

  useEffect(() => {
    startTransition(() => {
      if (picked) {
        setQuery(picked.name);
        setSuggestions([]);
        setOpen(false);
        setActiveIndex(-1);
        setHint(null);
      } else {
        setQuery("");
        setSuggestions([]);
        setOpen(false);
        setActiveIndex(-1);
      }
    });
  }, [picked]);

  useEffect(() => {
    if (prevPickedRef.current && !picked) {
      queueMicrotask(() => inputRef.current?.focus());
    }
    prevPickedRef.current = picked;
  }, [picked]);

  useEffect(() => {
    if (picked) {
      startTransition(() => {
        setSuggestions([]);
        setLoading(false);
        setHint(null);
      });
      return;
    }

    const q = query.trim();
    if (q.length < 2) {
      startTransition(() => {
        setSuggestions([]);
        setLoading(false);
        setHint(null);
      });
      return;
    }

    const ac = new AbortController();
    const t = window.setTimeout(async () => {
      setLoading(true);
      setHint(null);
      try {
        const res = await fetch(
          `/api/college-scorecard?q=${encodeURIComponent(q)}`,
          { signal: ac.signal },
        );
        const json = (await res.json()) as {
          results?: Suggestion[];
          error?: string;
        };
        if (!res.ok) {
          setSuggestions([]);
          setHint(json.error ?? "Could not load schools.");
          return;
        }
        setSuggestions(json.results ?? []);
        setOpen(true);
        setActiveIndex(-1);
      } catch (e) {
        if ((e as Error).name === "AbortError") return;
        setSuggestions([]);
        setHint("Could not load schools.");
      } finally {
        setLoading(false);
      }
    }, 280);

    return () => {
      window.clearTimeout(t);
      ac.abort();
    };
  }, [query, picked]);

  const choose = useCallback(
    (s: Suggestion) => {
      onPicked({ name: s.name, location: s.location });
      setOpen(false);
      setSuggestions([]);
      setActiveIndex(-1);
    },
    [onPicked],
  );

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "ArrowDown") {
        if (!open || suggestions.length === 0) return;
        e.preventDefault();
        setActiveIndex((i) => (i + 1) % suggestions.length);
        return;
      }
      if (e.key === "ArrowUp") {
        if (!open || suggestions.length === 0) return;
        e.preventDefault();
        setActiveIndex((i) =>
          i <= 0 ? suggestions.length - 1 : i - 1,
        );
        return;
      }
      if (e.key === "Escape") {
        if (open) {
          e.preventDefault();
          setOpen(false);
        }
        return;
      }
      if (e.key === "Enter") {
        if (open && suggestions.length > 0) {
          e.preventDefault();
          const idx =
            activeIndex >= 0 && activeIndex < suggestions.length
              ? activeIndex
              : 0;
          choose(suggestions[idx]);
        }
      }
    },
    [activeIndex, choose, open, suggestions],
  );

  if (picked) {
    return (
      <div className="min-w-0 flex-1 sm:min-w-[220px]">
        <label className="block text-xs font-medium uppercase tracking-wide text-neutral-500">
          Selected school
        </label>
        <div className="mt-1 rounded-lg border border-neutral-200 bg-neutral-50/50 px-3 py-2.5">
          <p className="font-medium text-neutral-900">{picked.name}</p>
          {picked.location ? (
            <p className="mt-0.5 text-sm text-neutral-600">{picked.location}</p>
          ) : null}
          <button
            type="button"
            onClick={() => {
              onClear();
            }}
            className="mt-2 text-xs font-medium text-neutral-600 underline-offset-2 hover:text-neutral-900 hover:underline"
          >
            Search for a different school
          </button>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative min-w-0 flex-1 sm:min-w-[220px]">
      <label
        htmlFor={`${id}-input`}
        className="block text-xs font-medium uppercase tracking-wide text-neutral-500"
      >
        School name
      </label>
      <input
        ref={inputRef}
        id={`${id}-input`}
        type="search"
        role="combobox"
        aria-expanded={open}
        aria-controls={listId}
        aria-autocomplete="list"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => {
          if (suggestions.length > 0) setOpen(true);
        }}
        onKeyDown={onKeyDown}
        placeholder="Start typing a college name…"
        autoComplete="off"
        className="mt-1 w-full rounded-xl border border-stone-200 dark:border-stone-700 px-3.5 py-2.5 text-sm text-stone-900 dark:text-stone-100 outline-none transition placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:border-orange-400 dark:focus:border-orange-500 focus:ring-2 focus:ring-orange-400/20"
        style={{ background: "var(--bg-base)" }}
      />
      {loading ? (
        <p className="mt-1.5 text-xs text-neutral-500">Searching…</p>
      ) : null}
      {hint && !loading ? (
        <p className="mt-1.5 text-xs text-red-700">{hint}</p>
      ) : null}

      {open && suggestions.length > 0 ? (
        <ul
          id={listId}
          role="listbox"
          className="absolute z-50 mt-1 max-h-64 w-full overflow-auto rounded-lg border border-neutral-200 bg-white py-1 shadow-lg"
        >
          {suggestions.map((s, index) => (
            <li key={s.id} role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={index === activeIndex}
                className={`flex w-full items-start gap-3 px-3 py-2 text-left text-sm transition-colors ${
                  index === activeIndex
                    ? "bg-neutral-100 text-neutral-900"
                    : "text-neutral-800 hover:bg-neutral-50"
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => choose(s)}
              >
                <SuggestionFavicon domain={s.domain} />
                <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <span className="font-medium leading-snug">{s.name}</span>
                  {s.location ? (
                    <span className="text-xs text-neutral-500">{s.location}</span>
                  ) : null}
                </span>
                {s.acceptanceRate != null ? (
                  <span className="shrink-0 self-center rounded-md bg-neutral-100 px-1.5 py-0.5 text-xs font-medium text-neutral-600">
                    {s.acceptanceRate}% admit
                  </span>
                ) : null}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
