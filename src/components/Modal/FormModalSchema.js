import { z } from "zod";

export const FormModalSchema = z.object({
    title: z.string().min(1, "Por favor insira o nome da tecnologia") ,
    status: z.string()
})