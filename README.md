# graphql-server-example
[Apollo server](https://github.com/apollographql/apollo-server) is a flexible, community driven, production-ready HTTP Apollo Server plugin for Node.js.
## Install
```
git clone https://github.com/kevinneuman/graphql-server-example.git
or git clone git@github.com:kevinneuman/graphql-server-example.git
cd graphql-server-example
npm install
npm start
```
## Examples
Open the browser and access GraphiQL at: `http://localhost:3000/graphiql`
### Queries
All users
```
{
  users {
    id
    username
  }
}
```
All posts
```
{
  posts {
    id
    userId
    message
  }
}
```
User with `id: 1`
```
{
  user(id: 1) {
    id
    username
  }
}
```
Friends for `userId: 1`
```
{
  friends(userId: 1) {
    userId
    friendIds
  }
}
```
All users + their posts and friends
```
{
  users {
    id
    username
    posts {
      message
    }
    friends {
      friendIds
    }
  }
}
```
### Mutations
New post by `userId: 1`
```
mutation {
  addPost(userId: 1, message: "Hello from GraphiQL!") {
    id
  }
}
```
New friend for `userId: 2`
```
mutation {
  addFriend(userId: 2, friendId: 3) {
    friendIds
  }
}
```
