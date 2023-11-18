import {z} from 'zod';

interface UseQueryStringParamsOptions<
  CatchSchema extends z.ZodObject<Record<string, z.ZodCatch<z.ZodTypeAny>>>,
> {
  schema: CatchSchema;
  params: {[key: string]: string | string[] | undefined};
}

export function useQueryStringParams<
  Schema extends z.ZodObject<Record<string, z.ZodCatch<z.ZodTypeAny>>>,
>({schema, params}: UseQueryStringParamsOptions<Schema>): z.output<Schema> {
  return schema.parse(params);
}
