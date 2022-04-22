import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

export const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    password: { type: GraphQLString },
    roles: { type: GraphQLString },
    status: { type: GraphQLString },
    email: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    recentLoginTime: { type: GraphQLString },
  }),
});
