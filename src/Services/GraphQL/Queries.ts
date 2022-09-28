import { gql } from "@apollo/client";

export const MOVIES = gql`
  query {
        getMovies {
            name,
            producer,
            rating
        }
    }
`;
