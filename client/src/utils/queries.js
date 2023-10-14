import { gql } from '@apollo/client';

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;

// Example of adding SEARCH_BOOKS query, you need to adjust this according to your actual GraphQL schema.

export const SEARCH_BOOKS = gql`
  query SearchBooks($searchTerm: String!) {
    books(searchTerm: $searchTerm) {
      bookId
      authors
      title
      description
      image
    }
  }
`;

