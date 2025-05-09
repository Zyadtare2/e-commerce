
import jwt from "jsonwebtoken";
import { handleAsyncError } from "./errors/asyncError.js";
import { AppError } from "../utilities/appError.js";

export const verifyToken = handleAsyncError(async (req, res, next) => {
  const { token } = req.headers;

  jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
    if (err) return next(new AppError("Not authorized", 403));
    req.recevier = decode;

    next();
  });
});
