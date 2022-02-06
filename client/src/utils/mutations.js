import { gql } from '@apollo/client';

/*export const LOGIN_USER = gql`
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

export const ADD_QUESTION = gql`
  mutation saveBook($authors:[String], $description: String!,$title: String, $bookId: String!, $image: String, $link: String) {
    saveBook(authors: $authors, description: $description,title: $title, bookId: $bookId, image: $image, link: $link) {
      savedBooks{
        bookId
        title
        authors
        description
        image
        link
      }
    }
  }
`;

export const ADD_ANSWER = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      savedBooks{
        bookId
        title
        authors
        description
        image
        link
      }
    }
  }
`;
*/