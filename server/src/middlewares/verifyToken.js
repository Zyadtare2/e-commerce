import jwt from "jsonwebtoken";
import { handleAsyncError } from "./errors/asyncError.js";
import { AppError } from "../utilities/appError.js";

export const verifyToken = handleAsyncError(async (req, res, next) => {
  let token;
  if (req.headers.token) {
    token = req.headers.token;
  }
  if (req.headers.authorization) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return next(new AppError("Not authorized", 401));
    }

    token = authHeader.split(" ")[1];
  }
  console.log(token);
  

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) return next(new AppError("Not authorized", 403));
    req.recevier = decoded;
    console.log(req.recevier);

    next();
  });
});
