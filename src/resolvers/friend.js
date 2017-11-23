import { find, includes } from 'lodash';
import { friends, users } from '../data';

const resolvers = {
  Query: {
    friends: (_, { userId }) => find(friends, { userId }),
  },
  Mutation: {
    addFriend: (_, { userId, friendId }) => {
      if (userId === friendId) throw new Error("Can't add yourself");

      const userFriends = find(friends, { userId });
      const alreadyFriends = includes(userFriends.friendIds, friendId);

      if (alreadyFriends) throw new Error(`Already friends with ${friendId}`);

      userFriends.friendIds.push(friendId);

      return userFriends;
    },
  },
  Friend: {
    user: friend => find(users, { id: friend.userId }),
  },
};

export default resolvers;
