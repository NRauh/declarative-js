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
    messages: () => {
      const messagesWithCats = messages.map((message) => {
        const messageCat = cats.find(cat => {
          console.log('looking for cat:', cat.id);
          return cat.id === message.cat_id
        });

        return {
          ...message,
          cat: messageCat
        };
      });

      return messagesWithCats;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log('Server at:', url);
});
