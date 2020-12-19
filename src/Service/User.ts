import Users from '../Models/User';
import { IUserModel } from '../types/models/User';

class UserService {
    async getUserById(id): Promise<IUserModel> {
        return await Users.findById(id);
    }
}

export default new UserService();
