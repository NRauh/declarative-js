const { gql } = require('apollo-server');

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

module.exports = {
  typeDefs,
};
