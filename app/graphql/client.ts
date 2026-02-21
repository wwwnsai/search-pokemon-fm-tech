import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://graphql-pokemon2.vercel.app",
  }),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          pokemon: {
            keyArgs: ["name"],
          },
        },
      },
    },
  }),
});