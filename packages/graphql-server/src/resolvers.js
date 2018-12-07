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
    cat: async ({ cat_id }, args, { loaders }) => {
      // use this to help visualize why dataloader is usesful
      // const cat = await findCat(cat_id);
      // return cat[0];
      return await loaders.cat.load(cat_id);
    },
  },
};

module.exports = {
  resolvers,
};
