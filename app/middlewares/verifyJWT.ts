import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import { resolve } from 'path';
import { CustomRequest } from '../interfaces/typeHelpers';

config({ path: resolve(__dirname, '../.env') });

const authJWT = (req: CustomRequest, res: Response, next: NextFunction) => {
    const authHeader: string | undefined = req.headers.authorization;

    if(!authHeader) return res.status(403).json({ message: 'Token not provided' });

    const token: string = authHeader.split(' ')[1];
    const secret: string = process.env.JWT_SECRET || '';
    if(!secret) return res.status(500).json({ message: 'Secret not found'});

    jwt.verify(token, secret, (err, user) => {
        if(err) return res.status(401).json({ message: 'Invalid token' });

        req.body.user = user;
        next();
    });
}

export default authJWT;