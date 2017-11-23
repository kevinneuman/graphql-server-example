import { find, filter } from 'lodash';
import { users, posts, friends } from '../data';

const resolvers = {
  Query: {
    users: () => users,
    user: (_, { id }) => find(users, { id }),
  },
  User: {
    posts: user => filter(posts, { userId: user.id }),
    friends: user => find(friends, { userId: user.id }),
  },
};

export default resolvers;
