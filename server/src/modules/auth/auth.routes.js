import { Router } from "express";
import { changeUserPassword, logIn, protectedRoutes, signUp } from "./auth.controller.js";
import { logInValidation, signUpValidation } from "./auth.validation.js";
import { validate } from "../../middlewares/validate.js";
import { sendMail } from "../../email/email.js";
import checkEmail from "../../middlewares/checkEmail.js";
import { verifyOTP } from "../../middlewares/verifyOTP.js";


const authRouter = Router();
// هنا انا مقسم عمليه التسجيل لاتنين عشان اقدر اتاكد من الرقم ال هبعته

// في الجزء الاول هتاكد من البيانات الي هو باعتها واشوف الايميل موجود قبل كده ولا لا
// لو مش موجود وبياناته تمام هبدا ابعتله علي الايميل عشان اتاكد انه تبعه
// دلوقني اول مالرساله توصل هبعتله اني بعت الرقم وهنا المفروض الفرونت ينقله علي الراووت التانيه
authRouter.post(
  "/signUp",
  validate(signUpValidation),
  checkEmail,
  sendMail, // Send OTP after email is checked
  (req, res) => {
    res.status(200).json({ message: "OTP sent, please verify." });
  }
);
// في الجزء التاني بعد مالفرونت يبعته علي الراووت دي المفروض يكتب الرقم الي بعتهوله
// هبدا اتاكد منه لو تمام ايعته علي الساين اب عشان يتحفظ في الداتابيز لو غلط هيمسحه تاني
authRouter.post(
  "/verifyOTP",
  verifyOTP, // Middleware for OTP verification
  signUp // Final signup and saving user after OTP is verified
);

authRouter.post("/logIn", validate(logInValidation), logIn);

authRouter.patch("/change-password",protectedRoutes,changeUserPassword)

export default authRouter;
