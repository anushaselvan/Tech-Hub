const { AuthenticationError } = require('apollo-server-express');
const { User, Question } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    questions: async () => {
       return await Question.find();
      // question.sort((a, b) => b.createdAt - a.createdAt);
    },
    questions: async (parent, { active, tag }) => {
      const params = {};

      if (active) {
        params.active = active;
      }
      if (tag) {
        params.tag = tag;
      }

      return await Question.find(params).populate('active');
    },
    question: async (parent, { _id }) => {
      return await Question.findById(_id).populate('active');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'questions',
        //  populate: 'category'
        });
        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
   
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },

    addQuestion: async(parent, args, context) => {
        if (context.user) {
           const newQuestion =  await Question.create(args);
            //{ _id: context.user._id },
            //{ $addToSet: { questions:  } },
            return newQuestion;
        }
  
        throw new AuthenticationError('Not logged in');
      },

    deleteQuestion: async(parent,args, context) => {
        if (context.user) {
        return Question.findOneAndDelete(args);
    }
    throw new AuthenticationError('Not logged in');
    },

    addAnswer: async (parent, answers, context) => {
        if (context.user) {
           const updatedQuestion =  await Question.findByIdAndUpdate(
            { _id: context.user._id },
            { $addToSet: { answers: answers }},
            );
            return updatedQuestion;
        }
  
        throw new AuthenticationError('Not logged in');
      },
    login: async (parent, { email, password }) => {
      console.log(email,password);
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
