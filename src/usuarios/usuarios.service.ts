import { Injectable, NotFoundException } from '@nestjs/common';
import { HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuarios } from './../entities/usuarios.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
    constructor(
        @InjectRepository(Usuarios)
        private usuariosRepository: Repository<Usuarios>,
    ) { }

    findAll(): Promise<Usuarios[]> {
        console.log('entra a tomar  datos');

        return this.usuariosRepository.find();
    }

    async admUsers(): Promise<any[]> {
        try {
            const usuariosAdm = await this.usuariosRepository.find({
                where: { rol_id: 1 },
                select: ['id', 'nombre'],
                order: { nombre: 'ASC' },
            });

            return usuariosAdm;
        } catch (error) {
            console.log('Error al consultar: ', error);
            throw new HttpException('Error al obtener los usuarios', error);
        }
    }

    async reedUsers(): Promise<any[]> {
        try {
            const usuariosAdm = await this.usuariosRepository.find({
                where: { rol_id: 2 },
                select: ['id', 'nombre'],
                order: { nombre: 'ASC' },
            });
            return usuariosAdm;
        } catch (error) {
            console.log('Error al consultar: ', error);
            throw new HttpException('Error al obtener los usuarios', error);
        }
    }

    async findOne(id: number): Promise<Usuarios> {
        const usuario = await this.usuariosRepository.findOne({ where: { id } });
        if (!usuario) {
            throw new NotFoundException('Usuario no encontrado');
        }
        return usuario;
    }

    async create(usuario: Usuarios): Promise<Usuarios> {
        usuario.password = await bcrypt.hash(usuario.password, 10);
        return this.usuariosRepository.save(usuario);
    }

    async update(id: number, usuario: Partial<Usuarios>): Promise<Usuarios> {
        if (usuario.password) {
            usuario.password = await bcrypt.hash(usuario.password, 10);
        }
        await this.usuariosRepository.update(id, usuario);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.usuariosRepository.delete(id);
    }
}