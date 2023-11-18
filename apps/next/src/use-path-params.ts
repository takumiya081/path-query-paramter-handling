import {notFound} from 'next/navigation';
import {z} from 'zod';

interface UsePathParamsOptions<Schema extends z.AnyZodObject> {
  params: unknown;
  schema: Schema;
}

export function usePathParams<Schema extends z.AnyZodObject>({
  schema,
  params,
}: UsePathParamsOptions<Schema>): z.output<Schema> {
  const result = schema.safeParse(params);
  if (!result.success) {
    notFound();
  }
  return result.data;
}
