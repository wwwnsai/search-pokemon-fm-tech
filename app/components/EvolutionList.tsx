"use client";

import { useRouter } from "next/navigation";
import { Evolution } from "@/app/types/pokemon";

export default function EvolutionList({ evolutions }: { evolutions?: Evolution[] }) {
    const router = useRouter();

    if (!evolutions?.length) return null;

    return (
        <div className="flex flex-col items-center gap-4">
            <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <span className="w-8 h-px bg-gray-200"></span>
                Evolutions
                <span className="w-8 h-px bg-gray-200"></span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
                {evolutions.map(e => (
                    <button
                        key={e.id}
                        onClick={() => router.push(`/?name=${e.name.toLowerCase()}`)}
                        className="group flex flex-col items-center gap-2 p-3 rounded-2xl hover:bg-gray-100 hover:shadow-md transition-all duration-300 active:scale-95"
                    >
                        <div className="relative w-24 h-24">
                            <div className="absolute inset-0 scale-90 group-hover:scale-100 transition-transform duration-300"></div>
                            <img
                                src={e.image}
                                alt={e.name}
                                className="relative w-full h-full object-contain p-2"
                            />
                        </div>
                        <span className="text-sm font-semibold text-gray-600 group-hover:text-blue-600 transition-colors">
                            {e.name}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}
