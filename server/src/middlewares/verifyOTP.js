import { User } from "../../database/models/user.model.js";
import { AppError } from "../utilities/appError.js";
import { handleAsyncError } from "./errors/asyncError.js";


export const verifyOTP = handleAsyncError(async (req, res, next) => {
  const { email, OTP } = req.body;

  // Check if the user has an OTP in the request body (from the signup step)
  const user = await User.findOne({ email });

  if (!user) {
    return next(new AppError("Invalid email address", 404));
  }

  // Verify if the OTP matches and if it hasn't expired
  if (user.OTP !== OTP || user.OTPExpire < Date.now()) {
    await User.findOneAndDelete({ email });
    return next(new AppError("Invalid or expired OTP", 400));
  }

  // OTP is valid, clear the OTP and OTPExpire fields
  user.OTP = undefined;
  user.OTPExpire = undefined;
  user.confirmed = true

  // Proceed to next step to save the user
  req.user = user;
  next();
});
