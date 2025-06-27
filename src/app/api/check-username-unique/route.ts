import dbConnect from "@/lib/dbcon";
import UserModel from "@/model/user";
import { z } from "zod";
import { usernameValidation } from "@/schemas/signUpSchemas";


const UsernameQueryScheme = z.object({
    username: usernameValidation
})

export async function GET(request : Request) {

    await dbConnect()

    try {
       const {searchParams} = new URL(request.url)
       const queryParam ={
         username: searchParams.get('username')
       }

       // validate with zod
       const result = UsernameQueryScheme.safeParse(queryParam)

       if(!result.success){
        const usernameErrors = result.error.format().username?._errors || []
        return Response.json(
            {
                success:false,
                message:usernameErrors?.length > 0 ? usernameErrors.push(','):'Invalid query param'
            },{status:400}
        )}

        const {username} = result.data
        const existingVerifieduser = await UserModel.findOne({username, isVerified:true})

        if(existingVerifieduser){
          return Response.json(
            {
                success:false,
                message:'Username is Already Token'
            },{status:400}
        )}

         return Response.json(
            {
                success:true,
                message:'Username is Available'
            },{status:200}
        )  
        
    } catch (error) {
       console.log("Error chaecking Username" , error)
       return Response.json(
        {
            success: false,
            message: "Error chaecking Username"
        },{status:500}
       )}
    
}