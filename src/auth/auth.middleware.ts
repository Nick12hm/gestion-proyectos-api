import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            throw new UnauthorizedException('Authorization header missing');
        }

        const token = authHeader.split(' ')[1];
        try {
            const decoded = jwt.verify(token, 'secretKey');
            req.user = decoded as any; // Asegúrate de que el tipo sea compatible
            next();
        } catch (err) {
            throw new UnauthorizedException('Invalid token');
        }
    }
}