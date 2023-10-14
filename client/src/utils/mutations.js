import { gql } from '@apollo/client';

// LOGIN_USER mutation for authenticating a user.
// It takes the user's email and password as input
// and returns a token and user information if authentication is successful.
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// ADD_USER mutation for registering a new user.
// It takes the username, email, and password as input
// and returns a token and user information if registration is successful.
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// SAVE_BOOK mutation for saving a book to the user's collection.
// It takes book information including authors, description, title, bookId, image, and link as input
// and returns updated user information including the updated list of saved books upon success.
export const SAVE_BOOK = gql`
  mutation saveBook($authors: [String], $description: String!, $title: String!, $bookId: String!, $image: String, $link: String) {
    saveBook(authors: $authors, description: $description, title: $title, bookId: $bookId, image: $image, link: $link) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

// REMOVE_BOOK mutation for removing a book from the user's collection.
// It takes the bookId as input and returns updated user information
// including the updated list of saved books upon success.
export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
