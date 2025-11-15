import { Request, Response, NextFunction } from 'express';

// Generic error handler middleware
export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  console.error(err.stack); // Log the error stack for debugging purposes
  res.status(500).json({ message: 'Internal Server Error', error: err.message });
}
