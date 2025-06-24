import { resend } from "@/lib/resend";
import varificationEmail from '../../email/VerificationEmail';
import { ApiRespones } from "@/types/ApiRespones";

export async function sendVarificationEmail(
    email : string,
    username: string,
    verifyCode: string
):Promise<ApiRespones>{

    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'sms sender | verification code',
            react: varificationEmail({username, otp: verifyCode}),
        });
        return {success: true, message :"verification email send successfully"}
    } catch (emailError) {
        console.error("Error sending verification code", emailError)
        return {success: false, message :"Failed to send verification email"}
    }
}