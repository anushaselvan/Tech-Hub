import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

/*export const ADD_QUESTION = gql`
  mutation addQuestion($questionText: String!
    $createdAt: String!
    $active: String!
    $tag: String!
    $username: String!) {
    addQuestion(
        questionText: String!
        createdAt: String!
        active: String!
        tag: String!
        username: String!)
    }
  }
`;

export const ADD_ANSWER = gql`
  mutation addAnswer( 
    $answerBody: String
    $username: String
    $createdAt: String) {
    addAnswer( 
        answerBody: String
        username: String
        createdAt: String) {
      savedAnswers{
        answerBody
        username
        createdAt
      }
    }
  }
`;*/
