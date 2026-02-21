import Link from "next/link";
import SearchBar from "@/app/components/SearchBar";
import PokemonResult from "@/app/components/SearchResult";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ name?: string }>;
}) {
  const params = await searchParams;
  const name = params.name;

  return (
    <main className="h-screen w-full bg-[#f8fafc] flex flex-col overflow-hidden p-4 md:p-8">
      <div className="max-w-6xl w-full mx-auto flex flex-col h-full gap-6">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-black">Pokémon Search</h1>
          <div className="w-1/2 mx-4">
            <SearchBar />
          </div>
        </header>

        <div className="flex-1 min-h-0 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col transition-all duration-500">
          <div className="flex-1 overflow-y-auto p-6">
            <PokemonResult name={name} />
          </div>
        </div>
      </div>
    </main>
  );
}