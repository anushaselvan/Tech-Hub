import { gql } from '@apollo/client';

export const QUERY_QUESTIONS = gql`
  query getQuestions {
    questions {
        _id
        questionText
        createdAt
        active
        tag
        username
        answers {
            _id
            answerBody
            username
            createdAt
        }
      }
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
        _id: ID
        username
        email
        city
        tech1
        tech2
        tech3
        }
      }
    }
  }
`;
