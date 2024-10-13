import { ZodType, ZodDefault } from "zod";

function extractDefaultValues(schema: ZodType<any>): any {
  const shape = schema.shape;
  const defaultValues: any = {};

  for (const key in shape) {
    if (shape[key] instanceof ZodDefault) {
      defaultValues[key] = shape[key]._def.defaultValue();
    } else {
      defaultValues[key] = "";
    }
  }

  return defaultValues;
}
