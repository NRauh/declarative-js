const { cats, messages } = require('./data');
const { ApolloServer, gql } = require('apollo-server');
const DataLoader = require('dataloader');

const typeDefs = gql`
  type Cat {
    id: String
    name: String
    age: Int
  }

  type Message {
    id: String
    message: String
    cat: Cat
  }

  type Query {
    cats: [Cat]
    messages: [Message]
  }
`;

const findCat = async (...catIds) => {
  console.log('finding cats:', catIds);
  return cats.filter(cat => catIds.includes(cat.id));
};

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
      return await loaders.cat.load(cat_id);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    if (req) {
      return {
        loaders: {
          // declaring the cat loader out of context allows it to cache too
          cat: new DataLoader(cats => findCat(...cats)),
        },
      };
    }
  },
});

server.listen().then(({ url }) => {
  console.log('Server at:', url);
});
