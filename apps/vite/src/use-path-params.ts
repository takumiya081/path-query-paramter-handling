import {z} from 'zod';

export class RoutePathParamsError extends z.ZodError {
  constructor(issues: z.ZodIssue[]) {
    super(issues);
    const actualProto = new.target.prototype;
    Object.setPrototypeOf(this, actualProto);
    this.name = 'RoutePathParamsError';
  }
}

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
    throw new RoutePathParamsError(result.error.issues);
  }
  return result.data;
}
