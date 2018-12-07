const { cats, messages } = require('./data');
const { ApolloServer, gql } = require('apollo-server');

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

const resolvers = {
  Query: {
    cats: () => cats,
    messages: () => messages,
  },
  Message: {
    cat({ cat_id }) {
      return cats.filter(singleCat => singleCat.id === cat_id)[0];
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log('Server at:', url);
});
