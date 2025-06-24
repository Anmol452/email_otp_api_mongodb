import {z} from 'zod'

export const signinSchemas = z.object({
    identifier: z.string() ,// like me username or email or phone identifier this
    password: z.string()
})