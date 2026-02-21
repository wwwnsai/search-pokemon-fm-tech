import { useQuery } from "@apollo/client/react";
import { GET_POKEMON } from "@/app/graphql/quries";
import { Pokemon } from "@/app/types/pokemon";

interface GetPokemonData {
    pokemon: Pokemon | null;
}

interface GetPokemonVariables {
    name: string | undefined;
}

export function usePokemon(name?: string) {
    return useQuery<GetPokemonData, GetPokemonVariables>(GET_POKEMON, {
        variables: { name },
        skip: !name
    });
}
