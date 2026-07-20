import "./index.css"
import React from 'react';
import { useState } from 'react'


const Home = () => {



  const EMPTY_CARDS = Array.from({ length: 8 });

  const FilmStrip = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-px bg-amber-400"
          style={{ left: `${i * 20}%`, height: "100%", opacity: 0.4 }}
        />
      ))}
    </div>
  );

  const GlowOrb = ({ className }) => (
    <div className={`absolute rounded-full blur-3xl pointer-events-none ${className}`} />
  );

  const MovieCard = ({ movie, i }) => (
    <div
      className="group relative rounded-xl overflow-hidden cursor-pointer"
      style={{
        animation: `cardReveal 0.5s ease forwards`,
        animationDelay: `${i * 60}ms`,
        opacity: 0
      }}
    >
      <div
        className="aspect-[2/3] relative overflow-hidden rounded-xl"
        style={{ border: "1px solid rgba(255,255,255,0.07)" }}
      >
        {movie.Poster && movie.Poster !== "N/A" ? (
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-2"
            style={{
              background: "linear-gradient(160deg, #27272a, #18181b)"
            }}
          >
            <span className="text-zinc-500 text-sm">No Poster</span>
          </div>
        )}

        <div className="absolute top-2 left-2">
          <span
            className="px-2 py-0.5 rounded-md text-[10px] font-mono text-amber-300"
            style={{
              background: "rgba(0,0,0,0.7)",
              border: "1px solid rgba(245,158,11,0.3)"
            }}
          >
            {movie.Year}
          </span>
        </div>

        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%)"
          }}
        />

        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <p className="text-white text-xs font-semibold leading-snug">
            {movie.Title}
          </p>
        </div>
      </div>

      <div className="pt-2.5 px-0.5">
        <p className="text-zinc-200 text-sm font-medium leading-snug truncate">
          {movie.Title}
        </p>
        <p className="text-zinc-500 text-xs mt-0.5">
          {movie.Year} · Movie
        </p>
      </div>
    </div>
  );


  const SkeletonCard = ({ i }) => (
    <div
      className="group relative rounded-xl overflow-hidden"
      style={{
        animation: `cardReveal 0.5s ease forwards`,
        animationDelay: `${i * 60}ms`,
        opacity: 0
      }}
    >
      <div
        className="aspect-[2/3] relative overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, rgba(39,39,42,1) 0%, rgba(24,24,27,1) 100%)",
          border: "1px solid rgba(255,255,255,0.05)",
          borderRadius: "0.75rem"
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.06) 50%, transparent 60%)",
            backgroundSize: "200% 100%",
            animation: `shimmerSweep 1.6s ease-in-out infinite`
          }}
        />
      </div>

      <div className="pt-3 px-1 space-y-2">
        <div className="h-3 rounded-full bg-zinc-800 w-3/4" />
        <div className="h-2.5 rounded-full bg-zinc-800/60 w-1/2" />
      </div>
    </div>
  );

  // Search input
  const [query, setQuery] = useState("");

  // Movies data
  const [movies, setMovies] = useState([]);

  // Loading state
  const [loading, setLoading] = useState(false);

  // Error state
  const [error, setError] = useState(null);

  // Focus state
  const [focused, setFocused] = useState(false);

  // OMDB API KEY
  const [apiKey] = useState("9cf6c9b7");

  // Search function
  const handleSearch = async () => {

    if (!query.trim()) return;

    setError(null);
    setMovies([]);
    setLoading(true);

    try {

      const url = `https://www.omdbapi.com/?s=${encodeURIComponent(
        query.trim()
      )}&type=movie&apikey=${apiKey}`;

      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`Network error - ${res.status}`);
      }

      const data = await res.json();

      if (data.Response === "False") {
        setError(data.Error || "No movies found");
      } else {
        setMovies(data.Search);
      }

    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Clear
  const handleClear = () => {
    setQuery("");
    setMovies([]);
    setError(null);
    setLoading(false);
  };

  return (
    <div className="">
      <div
        className="min-h-screen bg-zinc-950 relative flex flex-col items-center px-6 py-16 overflow-hidden"
        style={{
          fontFamily: "'Playfair Display', 'Georgia', serif"
        }}
      >

        <GlowOrb className="w-96 h-96 bg-amber-500/10 -top-32 -left-32 animate-pulse" />
        <GlowOrb className="w-80 h-80 bg-red-600/10 top-1/2 -right-24 animate-pulse" />
        <GlowOrb className="w-64 h-64 bg-amber-400/5 bottom-0 left-1/3" />

        <FilmStrip />

        {/* Heading */}
        <div className="relative z-10 text-center mb-14 animate-fade-in">

          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/25 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping inline-block" />

            <span className="text-amber-400 text-xs tracking-[0.25em] uppercase">
              Cinema World
            </span>
          </div>

          <h1
            className="text-6xl md:text-8xl font-bold text-white leading-none tracking-tight"
            style={{
              textShadow: "0 0 80px rgba(251,191,36,0.15)"
            }}
          >
            Find Your
            <br />

            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #f59e0b 100%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 3s linear infinite"
              }}
            >
              Next Watch
            </span>
          </h1>

          <p className="mt-4 text-zinc-400 text-base md:text-lg tracking-wide max-w-sm mx-auto">
            Millions of movies, one search away
          </p>
        </div>

        {/* Search bar */}
        <div className="relative z-10 w-full max-w-2xl mb-10">

          <div
            className="relative flex items-center rounded-2xl overflow-hidden transition-all duration-500"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: focused
                ? "1px solid rgba(251,191,36,0.6)"
                : "1px solid rgba(255,255,255,0.1)"
            }}
          >

            <div className="pl-5 pr-3 flex-shrink-0">

              {loading ? (
                <div className="w-5 h-5 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
              ) : (
                <svg
                  className="w-5 h-5"
                  style={{ color: focused ? "#f59e0b" : "#52525b" }}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              )}
            </div>

            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Search movies..."
              disabled={loading}
              className="flex-1 bg-transparent py-5 text-white placeholder-zinc-500 text-base outline-none"
            />

            {(query || error) && !loading && (
              <button
                onClick={handleClear}
                className="px-3 text-zinc-500 hover:text-zinc-300"
              >
                ✕
              </button>
            )}

            <button
              onClick={handleSearch}
              disabled={loading || !query.trim()}
              className="m-2 px-6 py-3 rounded-xl font-semibold text-sm text-black transition-all duration-300 disabled:opacity-40"
              style={{
                background:
                  "linear-gradient(135deg, #f59e0b, #ef4444)"
              }}
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </div>

          {/* Suggestion tags */}
          <div className="flex flex-wrap gap-2 mt-4 justify-center">

            {["spider", "salaar", "Avengers", "Batman", "Inception", "Interstellar", "Dune"].map((tag) => (
              <button
                key={tag}
                onClick={() => setQuery(tag)}
                className="px-3 py-1 rounded-full text-xs text-zinc-400 border border-zinc-700/60 hover:border-amber-500/50 hover:text-amber-400 transition-all duration-200"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Error */}
        {error && (
          <div
            className="relative z-10 w-full max-w-2xl mb-8 px-5 py-4 rounded-xl"
            style={{
              background: "rgba(239,68,68,0.08)",
              border: "1px solid rgba(239,68,68,0.3)"
            }}
          >
            <p className="text-red-300 text-sm">
              {error}
            </p>
          </div>
        )}

        {/* Cards */}
        <div className="relative z-10 w-full max-w-6xl">

          <div className="flex items-center gap-4 mb-6">
            <span className="text-zinc-500 text-xs tracking-[0.2em] uppercase">
              {loading
                ? "Fetching results..."
                : movies.length > 0
                  ? `${movies.length} results`
                  : "Popular Searches"}
            </span>

            <div className="flex-1 h-px bg-zinc-800" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

            {loading
              ? EMPTY_CARDS.map((_, i) => (
                <SkeletonCard key={i} i={i} />
              ))
              : movies.length > 0
                ? movies.map((movie, i) => (
                  <MovieCard
                    key={movie.imdbID}
                    movie={movie}
                    i={i}
                  />
                ))
                : EMPTY_CARDS.map((_, i) => (
                  <SkeletonCard key={i} i={i} />
                ))
            }
          </div>
        </div>

        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap');

        @keyframes shimmer {
          0% { background-position: 200% 0 }
          100% { background-position: -200% 0 }
        }

        @keyframes shimmerSweep {
          0% { background-position: -200% 0 }
          100% { background-position: 200% 0 }
        }

        @keyframes cardReveal {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.97)
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1)
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-12px)
          }

          to {
            opacity: 1;
            transform: translateY(0)
          }
        }

        .animate-fade-in {
          animation: fade-in 0.7s ease forwards;
        }
      `}</style>
      </div>
    </div>
  )
}

export default Home