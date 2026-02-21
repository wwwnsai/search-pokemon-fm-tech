"use client";

import { usePokemon } from "@/app/hooks/usePokemon";
import EvolutionList from "./EvolutionList";

export default function SearchResult({ name }: { name?: string }) {
  const { data, loading, error } = usePokemon(name);

  if (!name) return null;
  if (loading) return <p>Loading...</p>;
  if (error || !data?.pokemon) return <p>No Pokémon found</p>;

  const p = data.pokemon;

  return (
    <div className="flex flex-col lg:flex-row gap-12 w-full">
      <div className="flex flex-col items-center gap-6 flex-1">
        <div className="relative">
          <img
            src={p.image}
            alt={p.name}
            width={120}
            className="relative"
          />
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gray-800 mb-2">
            {p.name}
          </h2>
          <div className="flex gap-2 justify-center">
            {p.types.map(t => (
              <span
                key={t}
                className="px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gray-100 text-gray-600 border border-gray-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
            <h3 className="text-sm font-bold text-gray-400 uppercase mb-3">Fast Attacks</h3>
            <div className="space-y-2">
              {p.attacks.fast.map(a => (
                <div key={a.name} className="flex justify-between items-center bg-white p-2 rounded-lg shadow-sm border border-slate-50">
                  <span className="font-medium text-gray-700">{a.name}</span>
                  <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded font-bold">{a.damage} DMG</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
            <h3 className="text-sm font-bold text-gray-400 uppercase mb-3">Special Attacks</h3>
            <div className="space-y-2">
              {p.attacks.special.map(a => (
                <div key={a.name} className="flex justify-between items-center bg-white p-2 rounded-lg shadow-sm border border-gray-50">
                  <span className="font-medium text-gray-700">{a.name}</span>
                  <span className="text-xs bg-purple-50 text-purple-600 px-2 py-0.5 rounded font-bold">{a.damage} DMG</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex-shrink-0">
        <EvolutionList evolutions={p.evolutions} />
      </div>
    </div>
  );
}
