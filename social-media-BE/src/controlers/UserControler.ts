import { Request, Response } from "express";
import UserService from "../services/UserService";

export class UserControler {
  async getAllUser(req: Request, res: Response) {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
    }
  }
}
