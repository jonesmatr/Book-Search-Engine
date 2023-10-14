import { gql } from '@apollo/client';

// GET_ME query for retrieving the current user's data along with their saved books.
// It doesn’t take any input parameter and returns user's id, username, email, 
// and an array of saved books with their details like bookId, authors, image, description, title, and link.
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
