import {z} from 'zod';

export const pathParamsSchema = z.object({
  param: z.coerce.number(),
});

export const queryStringParamsSchema = z.object({
  str: z.string().catch('default string'),
  num: z.coerce.number().optional().catch(undefined),
});
