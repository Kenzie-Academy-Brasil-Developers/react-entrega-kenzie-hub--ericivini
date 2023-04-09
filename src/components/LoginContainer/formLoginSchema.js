import { z } from "zod";

export const formLoginSchema = z.object({
  email: z
    .string()
    .min(1, "Por favor informe seu email")
    .email("Por favor insira o email corretamente"),
  password: z
    .string()
    .min(8, "A senha precisa conter pelo menos 8 caracteres ")
    .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minuscula")
    .regex(/(?=.*?[0-9])/, "É necessário ter ao menos um número")
    .regex(/\W|_/, "É necessário ter ao menos um símbolo especial")
});
