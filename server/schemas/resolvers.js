const { AuthenticationError } = require('apollo-server-express');
const { User, Question } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
      questions: async () => {
        return await Question.find().sort({ createdAt: -1 });
      },

      question: async (parent, { questionId}) => {
        return await Question.findOne({_id: questionId});
      },
   
      user: async (parent, args, context) => {
        if (context.user) {
          const user = await User.findOne(context.user._id)
          //.populate({
           // path: 'questions',
          //  populate: 'category'
        //  });
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
   
    addQuestion: async(parent, args, context) => {
        if (context.user) {
           const newQuestion =  await Question.create(args);
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
           const updatedQuestion =  await Question.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { answers: answers }},
            );
            return updatedQuestion;
        }
  
        throw new AuthenticationError('Not logged in');
        },
      deleteAnswer: async(parent,{ questionId, answerId}, context) => {
        if (context.user) {
        return Question.findOneAndUpdate(
          { _id: questionId },
          { $pull: { answers: { _id: answerId } } },
          { new: true }
        );
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
    /* updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
*/
/*  questions: async (parent, { active, tag }) => {
      const params = {};

      if (active) {
        params.active = active;
      }
      if (tag) {
        params.tag = tag;
      }

      return await Question.find(params).populate('active');
    },*/

