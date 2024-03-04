import { z } from 'zod';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{4,}$/;

const registerSchema = z
  .object({
    name: z.string().min(3, { message: 'Nome muito curto' }),
    email: z.string().email({
      message: 'E-mail inválido'
    }),

    password: z.string().refine((value) => passwordRegex.test(value), {
      message:
        'A senha precisa ter 4+ caracteres, com maiúsculas, minúsculas e um número'
    }),

    confirm_password: z.string().refine((value) => passwordRegex.test(value), {
      message:
        'A senha precisa ter 4+ caracteres, com maiúsculas, minúsculas e um número'
    })
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'As senhas não coincidem',
    path: ['confirm_password']
  })
  .refine(
    (value) => {
      return value.name.trim() !== '';
    },
    {
      message: 'Não pode ser uma sequência de espaços em branco',
      path: ['name']
    }
  );

export default registerSchema;
