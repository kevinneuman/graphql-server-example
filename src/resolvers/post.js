import { find, last } from 'lodash';
import { users, posts } from '../data';

const resolvers = {
  Query: {
    posts: () => posts,
  },
  Mutation: {
    addPost: (_, { userId, message }) => {
      const id = last(posts).id + 1;
      const post = { id, userId, message };

      posts.push(post);

      return post;
    },
  },
  Post: {
    user: post => find(users, { id: post.userId }),
  },
};

export default resolvers;
