import { z } from 'zod';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{4,}$/;

const loginSchema = z.object({
  email: z.string().email({
    message: 'Digite um e-mail válido'
  }),
  password: z.string().refine((value) => passwordRegex.test(value), {
    message: 'Senha inválida'
  })
});

export default loginSchema;
