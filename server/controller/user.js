import sendMail from "../middlewares/sendMail.js";
import TryCatch from "../middlewares/TryCatch.js";
import { User } from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = TryCatch(async (req, res) => {
    // res.send("Register Api");

    const { email, name, password } = req.body;

    let user = await User.findOne({ email });

    if (user)
        return res.status(400).json({
            message: "User is already exists",
        });

    const hashPassword = await bcrypt.hash(password, 10)

    user = {
        name,
        email,
        password: hashPassword
    }

    const otp = Math.floor(Math.random() * 1000000);

    const activationToken = jwt.sign({
        user,
        otp,
    }, process.env.Activation_secret,
        {
            expiresIn: "5m"
        }
    );

    const data = {
        name,
        otp,
    };
    //sending otp to mail
    await sendMail(
        email,
        "E Learning",
        data
    )

    res.status(200).json({
        message: "OTP send to your Mail",
        activationToken,
    })


})
//

export const verifyUser = TryCatch(async (req, res) => {
    const {otp, activationToken} = req.body;

    const verify = jwt.verify(activationToken, process.env.Activation_Secret);

    if(!verify)
        return res.status(400).json({
    message: "OTP Expired",
});
    if(verify.otp !== otp)
        return res.status(400).json({
    message: "Wrong OTP",
});
   
   await User.create({
    name: verify.user.name,
    email: verify.user.email,
    password: verify.user.password,
   }) 

   res.json({
        message: "User Registred"
   })

})