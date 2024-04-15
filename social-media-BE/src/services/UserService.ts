import { AppDataSource } from "../data-source";
import { User } from "../entities/User";

export default new (class UserService {
  async getUser(email: string): Promise<any> {
    try {
      const response = await AppDataSource.getRepository(User).findOne({
        where: {
          email: email,
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getAllUsers(): Promise<any> {
    try {
      const response = await AppDataSource.getRepository(User).find();
      return response;
    } catch (error) {
      throw error;
    }
  }
})();
