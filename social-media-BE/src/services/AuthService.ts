import { log } from "console";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User";

export class AuthService {
  userRepository = AppDataSource.getRepository(User);

  async register(
    fullname: string,
    username: string,
    password: string,
    email: string,
    profile: string,
    sampul: string
  ): Promise<User> {
    const user = new User();
    user.fullname = fullname;
    user.username = username;
    user.password = password;
    user.email = email;
    user.profile = profile;
    user.sampul = sampul;

    return await this.userRepository.save(user);
  }

  async check(user: any): Promise<any> {
    try {
      console.log("ini", user);
      const response = await AppDataSource.getRepository(User).findOne({
        where: {
          email: user.email,
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  }
}
