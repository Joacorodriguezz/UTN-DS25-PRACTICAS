import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

// Middleware to validate data using Zod schemas
export function validateRequest(schema: any) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body); // Validate the request body against the schema
      next(); // If valid, pass to the next middleware or route handler
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: 'Invalid data', errors: error.errors });
      } else {
        res.status(500).json({ message: 'Server error' });
      }
    }
  };
}
