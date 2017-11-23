const typeDefs = `
type Friend {
  userId: Int!
  friendIds: [Int]
  user: User
}

extend type Query {
  friends(
    userId: Int!
  ): Friend
}

extend type Mutation {
  addFriend(
    userId: Int!
    friendId: Int!
  ): Friend
}
`;

export default typeDefs;
