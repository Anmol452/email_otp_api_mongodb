import { getServerSession, User } from "next-auth";
import dbConnect from "@/lib/dbcon";
import UserModel from "@/model/user";
import { authOption } from "../auth/[...nextauth]/options";

export async function POST(request: Request) {
    await dbConnect()

    const session = await getServerSession(authOption)
    // const user: User = session?.user as User

    if (!session || !session.user) {
        return Response.json(
            {
                success: false,
                message: "User is Not Authenticated "
            },
            { status: 401 })
    }

  const userId = session?.user._id

  const { acceptMessages } = await request.json()

  try {
       const updateUser = await UserModel.findByIdAndUpdate(
        
            userId,
           { isAcceptingMessage : acceptMessages },
           { new : true }
        
       )
  } catch (error) {
     console.log(error, "failed to update user status to accept messages")

     return Response.json(
            {
                success: false,
                message: "failed to update user status to accept messages"
            },
            { status: 500 })
  }
}
