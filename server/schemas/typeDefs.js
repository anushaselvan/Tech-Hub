const { gql } = require('apollo-server-express');

const typeDefs = gql`
 
type Question{
    _id: ID
    questionText: String
    createdAt: String
    active: Boolean
    tag: String
    username: String
    answers: [Answer]
  }

  type Answer {
    _id: ID
    answerBody: String
    username: String
    createdAt: String
  }

  type User {
    _id: ID
    username: String!
    email: String!
    city: String
    tech1: String,
    tech2: String,
    tech3: String,
    questions: [Question]
    followers: [User]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
    question(_id: ID!): Question
    questions: Question

  }

  type Mutation {
      addUser(
          username: String!, 
          email: String!, 
          password: String!, 
          city: String,
          tech1: String,
          tech2: String,
          tech3: String,
          ): Auth
      updateUser(
          username: String!, 
          email: String!, 
          password: String!, 
          city: String,
          tech1: String,
          tech2: String,
          tech3: String,
          ): User
          
      login(email: String!, password: String!): Auth
      addAnswer(questions: [ID]!): Answer
      addQuestion(
        questionText: String!
        createdAt: String!
        active: Boolean!
        tag: String!
        username: String!
      ): Question
      deleteQuestion(
        questionText: String!
        createdAt: String!
        active: Boolean!
        tag: String!
        username: String!
      ): Question
  }
`;

module.exports = typeDefs;
