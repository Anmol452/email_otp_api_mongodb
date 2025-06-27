import dbConnect from "@/lib/dbcon";
import UserModel from "@/model/user";
import { NextURL } from "next/dist/server/web/next-url";

export async function POST(request: Request) {
    await dbConnect()

    try {
        // const { username, code } = await request.json()
        const { code } = await request.json()

        // const decodedUsername = decodeURIComponent('username')
        // const user = await UserModel.findOne({ username: decodedUsername })
        // console.log("Searching for user:", decodedUsername);


         const searchParams = request.nextUrl.searchParams;
         const name = searchParams.get('username');
         const user = await UserModel.findOne({ username: name })
         console.log("Searching for user:", name);
         console.log("backent otp", typeof user.verifyCode)
         console.log("otp", typeof code)
       
        if (!user) {
            return Response.json(
                {
                    success: false,
                    message: "User not found"
                }, { status: 500 }
            )
        }

        const isCodeVarified = user.verifyCode == code
        // const isCodeNotExpiry = new Date(user.verifyCodeExpiry) > new Date()
        const isCodeNotExpiry = 13 > 12


        if (isCodeVarified && isCodeNotExpiry) {
            user.isVerified = true
            await user.save()

            return Response.json(
                {
                    success: true,
                    message: "Account Verified Successfully"
                }, { status: 200 }
            )
        } else if(!isCodeNotExpiry){
             return Response.json(
                {
                    success: false,
                    message: "Verification Code Has Expired, Please Singup Again To Get a New Code"
                }, { status: 400 }
            )
        }else{
             return Response.json(
                {
                    success: false,
                    message: "Incorrect Vrification Code"
                }, { status: 400 }
            )
        }


    } catch (error) {
        console.log("Error veriflying user", error)
        return Response.json(
            {
                success: false,
                message: "Error veriflying user"
            }, { status: 500 }
        )
    }
}