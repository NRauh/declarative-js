const { cats, messages } = require('./data');

const resolvers = {
  Query: {
    cats: () => cats,
    messages: () => {
      console.log('~~request~~');
      return messages;
    },
  },
  Message: {
    // use this to help visualize why dataloader is usesful
    // cat: async ({ catId }) => {
    //   const cat = await findCat(catId);
    //   return cat[0];
    // }
    cat: async ({ catId }, args, { loaders }) => loaders.cat.load(catId),
  },
};

module.exports = {
  resolvers,
};
