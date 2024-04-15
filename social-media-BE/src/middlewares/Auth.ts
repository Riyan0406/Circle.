import { Request, Response, NextFunction } from "express";
import { decodeToken } from "../utils/jwt/DecodToken";

declare global {
  namespace Express {
    interface Request {
      auth?: any;
    }
  }
}
const checkAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: "Invalid authorization token." });
    }

    const [bearer, token] = authHeader.split(" ");

    if (!token || bearer !== "Bearer" || token === "null") {
      return res.status(401).json({ message: "Invalid authorization token." });
    }

    const decoded = decodeToken(token);

    if (!decoded) {
      console.log("Error when decoding a token.");
      return res.status(500).json({ message: "Invalid authorization token." });
    }

    req.auth = { ...decoded };

    return next();
  } catch (error) {
    console.log(error);
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Invalid authorization token." });
    }

    return res.status(500).json({ message: "Invalid authorization token." });
  }
};

export default checkAuth;
