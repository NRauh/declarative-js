const { ApolloServer } = require('apollo-server');
const DataLoader = require('dataloader');
const { cats } = require('./data');
const { typeDefs } = require('./types');
const { resolvers } = require('./resolvers');

const findCat = async (...catIds) => {
  console.log('finding cats:', catIds);
  return cats.filter(cat => catIds.includes(cat.id));
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    if (req) {
      return {
        loaders: {
          // declaring the cat loader out of context allows it to cache too
          cat: new DataLoader(catsToFind => findCat(...catsToFind)),
        },
      };
    }
  },
});

server.listen().then(({ url }) => {
  console.log('Server at:', url);
});
