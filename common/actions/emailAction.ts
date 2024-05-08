'use server'
require('dotenv').config({path: '.env.local'});
import EmailTemplate from "@/components/i18n/EmailTemplate";
import {Resend} from "resend";

export async function sendEmailAction(prev: any, formData: FormData) {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        await resend.emails.send({
            from: "ICT <onboarding@resend.dev>",
            to: email,
            subject: "Test Email",
            react: EmailTemplate({name})
        })
        return {
            error: null,
            success: true
        }
    } catch (error) {
        console.log(error)
        return {
            error: (error as Error).message,
            success: false
        }
    }
}