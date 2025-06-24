import { Message } from "@/model/user";

export interface ApiRespones{
    success: boolean;
    message: string;
    isAccesptingMessage?: boolean
    messages?: Array<Message>
}