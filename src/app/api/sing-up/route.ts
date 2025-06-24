import dbConnect from "@/lib/dbcon";
import UserModel from "@/model/user";
import bcrypt from "bcryptjs"
import { sendVarificationEmail } from "@/helpers/sendVerificationEmail";


export async function POST(request: Request) {
    await dbConnect()


    try {
        const { username, email, password } = await request.json()

        const existingUserVerifiedByusername = await UserModel.findOne({
            username,
            isVerified: true
        })

        if (existingUserVerifiedByusername) {
            return Response.json(
                {
                    success: false,
                    message: "Username is Already Token"
                },
                { status: 400 })
        }


        const existingUserByemail = await UserModel.findOne({ email })

        const verifyCode = Math.floor(100000 + Math.random() * 900000).toString()


        if (existingUserByemail) {
            if (existingUserByemail.isVerified) {
                return Response.json(
                    {
                        success: false,
                        message: "User already exit with this email"
                    },
                    { status: 400 })
            } else{
                const hasedPassword = await bcrypt.hash(password, 10)
                existingUserByemail.password = hasedPassword
                existingUserByemail.verifycode = verifyCode
                existingUserByemail.verifycodeExpiry = new Date(Date.now() + 3600000)   
                await existingUserByemail.save()
            }
        } else {
            const hasedPassword = await bcrypt.hash(password, 10)
            const expiryDate = new Date()
            expiryDate.setHours(expiryDate.getHours() + 1)

            const newUser = new UserModel({
                username,
                email,
                password: hasedPassword,
                verifyCode,
                vrifycodeExpiry: expiryDate,
                isVerified: false,
                isAcceptingMessage: true,
                message: []
            })

            await newUser.save()

        }

        //send  verification email
        const eamilResponse = await sendVarificationEmail(
            email,
            username,
            verifyCode
        )

        if (!eamilResponse.success) {
            return Response.json({
                success: false,
                message: eamilResponse.message
            }, { status: 500 })
        }

        return Response.json({
            success: true,
            message: "User Registered successfully.Please varify your email "
        }, { status: 201 })



    } catch (error) {
        console.error("Error registering user ", error)
        return Response.json(
            {
                success: false,
                message: "Error registering user"
            },
            { status: 500 })
    }
}