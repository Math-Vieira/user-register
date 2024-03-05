import { z } from 'zod';

const editPersonSchema = z
  .object({
    name: z.string().min(3, { message: 'Nome muito curto' }),
    email: z.string().email({
      message: 'E-mail inválido'
    }),
    avatar: z.string().url({ message: 'Avatar deve ser uma url' }),
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

export default editPersonSchema;
age: z.number().int().min(0, { message: 'Idade inválida' });
