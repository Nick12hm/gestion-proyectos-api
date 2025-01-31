import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuarios } from './../entities/usuarios.entity';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Usuarios)
        private usuariosRepository: Repository<Usuarios>,
    ) { }

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.usuariosRepository.findOne({ where: { email } });
        if (user && await bcrypt.compare(password, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        throw new UnauthorizedException('Invalid credentials');
    }

    async login(user: any) {
        const payload = { email: user.email, sub: user.id, rolUser: user.rol_id };
        return {
            access_token: jwt.sign(payload, 'secretKey', { expiresIn: '1h' }),
        };
    }
}
