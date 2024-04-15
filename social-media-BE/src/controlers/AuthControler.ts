import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";
import { uploadImage } from "../utils/cloudinary";
import { loginShcema, regisShcema } from "../utils/validations/Auth";
import * as bcrypt from "bcrypt";
import UserService from "../services/UserService";
import * as jwt from "jsonwebtoken";

const authService = new AuthService();

export class AuthController {
  async register(req: Request, res: Response) {
    const { error, value } = regisShcema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const { fullname, username, password, email } = value;
    const passwordHash = await bcrypt.hash(password, 10);
    let uploadedProfileImage, uploadedSampulImage;
    try {
      if (req.files && req.files["profile"]) {
        const profileImageBuffer: Buffer = req.files["profile"][0].buffer;
        uploadedProfileImage = await uploadImage(profileImageBuffer, "uploads");
      }
      if (req.files && req.files["sampul"]) {
        const sampulImageBuffer: Buffer = req.files["sampul"][0].buffer;
        uploadedSampulImage = await uploadImage(sampulImageBuffer, "uploads");
      }
      const newUser = await authService.register(
        fullname,
        username,
        passwordHash,
        email,
        uploadedProfileImage?.secure_url,
        uploadedSampulImage?.secure_url
      );
      res.json(newUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }


  async login(req: Request, res: Response): Promise<Response> {
    const { error, value } = loginShcema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const getUser = await UserService.getUser(value.email);
    console.log("User:", getUser);
    if (!getUser) {
      return res.status(400).json({ message: "User not found" });
    }
    const isCheckPassword = await bcrypt.compare(
      value.password,
      getUser.password
    );
    if (!isCheckPassword) {
      return res.status(400).json({ message: "Wrong password" });
    }
    const user = {
      id: getUser.id,
      fullname: getUser.fullname,
      username: getUser.username,
      email: getUser.email,
      profile: getUser.profile,
      sampul: getUser.sampul,
    };

    const token = jwt.sign({ user }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    return res.status(200).json({ data: user, token });
  }
  catch(error) {
    throw error;
  }
  async check(req: Request, res: Response): Promise<Response> {
    try {
      const user = req.auth.user;
      console.log("User check:", user);
      const userDetails = await authService.check(user);
      return res.status(200).json(userDetails);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
