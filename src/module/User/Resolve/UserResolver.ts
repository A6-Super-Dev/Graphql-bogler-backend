import UserModel from '../../../common/models/UserModel';
import UserServices from '../Services/UserServices';

class UserResolver extends UserServices {
  async getAllResolver() {
    return UserModel.findAll();
  }
}

export default new UserResolver();
