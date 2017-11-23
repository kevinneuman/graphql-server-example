import { merge } from 'lodash';
import user from './user';
import post from './post';
import friend from './friend';

const resolvers = merge(user, post, friend);

export default resolvers;
