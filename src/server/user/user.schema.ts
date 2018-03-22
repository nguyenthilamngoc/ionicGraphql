import {GraphQLObjectType, GraphQLFloat, GraphQLString} from 'graphql';
var userSchema = require('./user/user.schema').userSchema;

const express = require('express');
const graphqlHTTP = require('express-graphql');
var cors = require('cors');

const app = express();
app.use('*', cors());

app.use('/graphql', cors(), graphqlHTTP({
  schema: userSchema,
  graphiql: true
}));

app.listen(4000);

var UserType = new GraphQLObjectType({
  name: 'user',
  fields: function () {
    return {
      id: {
        type: GraphQLFloat
      },
      name: {
        type: GraphQLString
      }
    }
  }
});