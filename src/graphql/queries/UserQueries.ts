import { GraphQLList } from 'graphql';
import UserResolver from '../../module/User/Resolve/UserResolver';
import { UserType } from '../schema/UserType';

class UserQueries {
  public getAll() {
    return {
      type: new GraphQLList(UserType),
      async resolve() {
        return UserResolver.getAllResolver();
      },
    };
  }
}

export default new UserQueries();
