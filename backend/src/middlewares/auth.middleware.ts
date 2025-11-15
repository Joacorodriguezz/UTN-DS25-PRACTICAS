import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Middleware to check if the user is authenticated and has the correct role
export function authenticateAndAuthorize(roles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1]; // Bearer <token>

    if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
      // Decode the token to get user info
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: number; email: string; role: string };
      req.user = decoded; // Attach decoded token (user info) to the request object

      // Check if the user's role is authorized
      if (roles && !roles.includes(decoded.role)) {
        return res.status(403).json({ message: 'You do not have permission to access this resource' });
      }

      next(); // Pass to the next middleware or route handler if authorized
    } catch (error) {
      res.status(400).json({ message: 'Invalid token' });
    }
  };
}
