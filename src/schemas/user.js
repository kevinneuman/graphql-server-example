const typeDefs = `
type User {
  id: Int!
  username: String
  posts: [Post]
  friends: Friend
}

type Query {
  users: [User]
  user(id: Int!): User
}
`;

export default typeDefs;
