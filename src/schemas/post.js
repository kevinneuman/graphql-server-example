const typeDefs = `
type Post {
  id: Int!
  userId: Int!
  message: String
  user: User
}

extend type Query {
  posts: [Post]
}

type Mutation {
  addPost(
    userId: Int!
    message: String!
  ): Post
}
`;

export default typeDefs;
