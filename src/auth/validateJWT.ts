import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "../interfaces/IJwtPayload";
import JWT from "../middlewares/jwt";
import User from "../models/UserModel";
import UserService from "../service/UserService";

export default async (req: Request, res: Response, next: NextFunction) =>  {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Token não encontrado!' });
  }

  try {
    const jwt = new JWT();
    const decoded = await jwt.decodeToken(token) as JwtPayload;

    const userModel = new User();
    const userService = new UserService(userModel);
    const user = await userService.readOne(decoded.data.user._id);

    if (!user) {
      return res.status(401).json({ message: 'User Not Found!' });
    }

    if (user.role !== 'admin') {
      return res.status(401).json({ message: 'Access Denied - Unauthorized!'})
    }

    return next();
  } catch (error) {
    return res.status(401).json({ message: error });
  }
}
