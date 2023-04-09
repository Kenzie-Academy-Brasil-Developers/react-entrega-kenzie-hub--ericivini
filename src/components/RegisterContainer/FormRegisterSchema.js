import { z } from "zod";

export const FormRegisterSchema = z
  .object({
    name: z.string().min(1, "Campo obrigatório"),
    email: z
      .string()
      .min(1, "Campo obrigatório")
      .email("Por favor insira um email válido"),
    password: z
      .string()
      .min(8, "A senha é obrigatória e precisa ter no mínimo 8 caracteres")
      .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minuscula")
      .regex(/(?=.*?[0-9])/, "É necessário ter ao menos um número")
      .regex(/\W|_/, "É necessário ter ao menos um símbolo especial"),
    confirm: z.string().min(1, "Campo obrigatório"),
    bio: z.string().min(1, "Campo obrigatório"),
    contact: z.string().min(1, "Campo obrigatório"),
    course_module: z.string().min(1, "Campo obrigatório"),
  })
  .refine(({ password, confirm }) => password === confirm, {
    message: "As senhas precisam ser idênticas",
    path: ["confirm"],
  });
