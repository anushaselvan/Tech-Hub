import { gql } from '@apollo/client';

export const QUERY_QUESTIONS = gql`
  query getQuestions {
    questions {
        _id
        questionText
        createdAt
        username
        answers {
            _id
            answerBody
            username
            
        }
      }
    }
`;
export const QUERY_QUESTION = gql`
  query getQuestion {
    question {
        _id
        questionText
        createdAt
        username
        answers {
            _id
            answerBody
            username
            
        }
      }
    }
`;

export const QUERY_USER = gql`
  {
    user {
        _id
        username
        email
        city
        tech1
        tech2
        tech3
        }
  }
`;
// make a search to news data api
const viewNews = () => {
  //Replacing google books for now to save api req count in newsdata api
 // return fetch(`https://newsdata.io/api/1/news?apikey= &q=web&language=en&category=technology`);
return fetch(`https://www.googleapis.com/books/v1/volumes?q=webdevelopmenttechnology`)
};
export default viewNews;