"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const params = useSearchParams();
  const initial = params.get("name") || "";

  const [value, setValue] = useState(initial);

  const onSearch = () => {
    if (!value) return;
    
    const name = value.toLowerCase();

    localStorage.setItem("lastPokemon", name);

    router.push(`/?name=${name}`);
  };

  return (
    <div className="w-full relative group">
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
        <svg className="w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input
        className="w-full bg-slate-100 border-none rounded-2xl py-3 pl-12 pr-24 text-slate-700 placeholder-slate-400 focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all outline-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onSearch()}
        placeholder="Search Pokémon..."
      />
      <button
        onClick={onSearch}
        className="absolute right-2 top-1.5 bottom-1.5 px-5 bg-slate-800 text-white text-sm font-bold rounded-xl hover:bg-slate-700 active:scale-95 transition-all shadow-sm"
      >
        Search
      </button>
    </div>
  );
}
