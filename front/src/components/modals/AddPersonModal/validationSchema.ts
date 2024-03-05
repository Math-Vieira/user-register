import { z } from 'zod';

const registerPersonSchema = z
  .object({
    name: z.string().min(3, { message: 'Nome muito curto' }),
    email: z.string().email({
      message: 'E-mail inválido'
    }),
    avatar: z.string().min(3, { message: 'Avatar muito curto' }),
    age: z.string().min(1, { message: 'Idade muito curta' })
  })
  .refine(
    (value) => {
      return value.name.trim() !== '';
    },
    {
      message: 'Não pode ser uma sequência de espaços em branco',
      path: ['name']
    }
  )
  .refine(
    (value) => {
      return value.avatar.trim() !== '';
    },
    {
      message: 'Não pode ser uma sequência de espaços em branco',
      path: ['avatar']
    }
  )
  .refine(
    (value) => {
      return +value.age > 0;
    },
    {
      message: 'Digite uma idade maior que 0',
      path: ['age']
    }
  );

export default registerPersonSchema;
age: z.number().int().min(0, { message: 'Idade inválida' });
