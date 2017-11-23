const users = [
  { id: 1, username: 'Qwe' },
  { id: 2, username: 'Asd' },
  { id: 3, username: 'Zxc' },
];

const posts = [
  { id: 1, userId: 2, message: 'Hello World!' },
  { id: 2, userId: 1, message: 'GraphQL is awesome!' },
  { id: 3, userId: 3, message: 'Bye.' },
];

const friends = [
  { userId: 1, friendIds: [2, 3] },
  { userId: 2, friendIds: [1] },
  { userId: 3, friendIds: [1] },
];

export { users, posts, friends };
