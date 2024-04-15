import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.SECRET_KEY;

interface Payload {
  [key: string]: any;
}

const generateToken = (payload: Payload): string => {
  if (!secretKey) {
    throw new Error("JWT secret key is not defined.");
  }
  return jwt.sign(payload, secretKey, { expiresIn: "1d" });
};

const decodeToken = (token: string): any => {
  if (!secretKey) {
    throw new Error("JWT secret key is not defined.");
  }
  return jwt.verify(token, secretKey);
};

export { generateToken, decodeToken };
