import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "../../../database/models/user.model.js";
import { handleAsyncError } from "../../middlewares/errors/asyncError.js";
import { AppError } from "../../utilities/appError.js";

const signUp = handleAsyncError(async (req, res) => {
  console.log("Received signUp request", req.body);
  const user = await User.create(req.user);

  await user.save();

  const token = jwt.sign(
    { role: user.role, userId: user._id, name: user.name },
    process.env.SECRET_KEY
  );

  user.password = undefined; // so it dosent appear in the response

  res.status(201).json({ message: "done", user, token });
});

const logIn = handleAsyncError(async (req, res, next) => {
  const { password, email } = req.body;

  const user = await User.findOne({ email });

  if (!user || !bcrypt.compare(password, user.password)) {
    return next(new AppError("Incorrect email or password", 401));
  }

  const token = jwt.sign(
    { role: user.role, userId: user._id, name: user.name },
    process.env.SECRET_KEY
  );

  res.status(201).json({ message: "done", token });
});

const changeUserPassword = handleAsyncError(async (req, res, next) => {
  const user = await User.find({ email: req.body.email });

  if (user && bcrypt.compare(req.body.oldPassword, user[0].password)) {
    await User.findOneAndUpdate(
      { email: req.body.email },
      {
        password: req.body.newPassword,
        passwordChangedAt: Date.now(),
      }
    );
    let token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.SECRET_KEY
    );
    return res.status(201).json({ message: "done", token });
  }

  next(new AppError("incorrect email or password", 401));
});

const protectedRoutes = handleAsyncError(async (req, res, next) => {
  // 1-check for token existince
  let { token } = req.headers;
  if (!token) return next(new AppError("invalid token", 401));
  // 2-verify token
  let userPayload = null;
  jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
    if (err) return next(new AppError(err, 401));
    userPayload = payload;
  });  
  // 3-check user-id
  let user = await User.findById(userPayload.userId);
  if (!user) return next(new AppError("user not found", 401));
  // 4-check token if expierd
  if (user.passwordChangedAt) {
    let time = parseInt(user.passwordChangedAt.getTime() / 1000);

    if (time > userPayload.iat) return next(new AppError("invalid token", 401));
  }

  req.user = user;
  next();
});

const allowedTo = (...roles) => {
  return handleAsyncError(async (req, res, next) => {
    if (roles.includes(req.user.role)) {
      return next();
    }
    next(new AppError("not authorized", 401));
  });
};

export { signUp, logIn, changeUserPassword, protectedRoutes, allowedTo };
