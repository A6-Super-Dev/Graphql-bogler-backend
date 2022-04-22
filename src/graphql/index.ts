import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import UserMutations from './mutations/UserMutations';
import UserQueries from './queries/UserQueries';

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    fetchAll: UserQueries.getAll(),
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    fetchAll: UserQueries.getAll(),
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
