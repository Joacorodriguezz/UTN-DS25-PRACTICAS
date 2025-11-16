import { ZodError, ZodTypeAny } from 'zod';
import { Request, Response, NextFunction } from 'express';

export const validate = (schema: ZodTypeAny) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const packet = { body: req.body, params: req.params, query: req.query };
    let result = schema.safeParse(packet);

    if (!result.success) {
      result = schema.safeParse(req.body);
    }

    if (!result.success) {
      const errors = result.error.issues.map(i => ({
        field: i.path.join('.') || 'body',
        message: i.message,
      }));
      return res.status(400).json({
        success: false,
        message: 'Datos inválidos',
        errors,
      });
    }

    const data: any = result.data;

    if (data && (data.body !== undefined || data.params !== undefined || data.query !== undefined)) {
      if (data.body   !== undefined) req.body   = data.body;
      if (data.params !== undefined) req.params = data.params;
      if (data.query  !== undefined) req.query  = data.query;
    } else {
      req.body = data;
    }

    next();
  };
};

export const validateParams = (schema: ZodTypeAny) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsedParams = await schema.parseAsync(req.params);
      Object.assign(req.params, parsedParams);
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        return res.status(400).json({
          success: false,
          message: 'Parámetros inválidos',
          errors: err.issues.map(i => ({ field: i.path.join('.'), message: i.message })),
        });
      }
      next(err);
    }
  };
};
