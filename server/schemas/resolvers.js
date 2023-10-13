const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      // ... implementation
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      // ... implementation
    },

    addUser: async (parent, { username, email, password }) => {
      // ... implementation
    },

    saveBook: async (parent, { authors, description, title, bookId, image, link }, context) => {
      // ... implementation
    },

    removeBook: async (parent, { bookId }, context) => {
      // ... implementation
    },
  },
};

module.exports = resolvers;
