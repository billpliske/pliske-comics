import { gql } from 'apollo-boost';

const getComicsQuery = gql`
    {
        comics {
            id
            title
            number
            year
            condition
            notes
        }
    }
`;

const addComicMutation = gql`
    mutation AddComic(
        $title: String!
        $number: String!
        $year: String!
        $condition: String!
        $notes: String!
        $image: String!
    ) {
        addComic(
            title: $title
            number: $number
            year: $year
            condition: $condition
            notes: $notes
            image: $image
        ) {
            id
            title
            number
            year
            condition
            notes
        }
    }
`;

const getComicQuery = gql`
    query GetComic($id: ID) {
        comic(id: $id) {
            id
            title
            number
            year
            condition
            notes
        }
    }
`;

export { getComicsQuery, addComicMutation, getComicQuery };
