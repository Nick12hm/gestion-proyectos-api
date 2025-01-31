import { Injectable, NotFoundException } from '@nestjs/common';
import { HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proyectos } from './../entities/proyectos.entity';

@Injectable()
export class ProyectosService {
    constructor(
        @InjectRepository(Proyectos)
        private proyectosRepository: Repository<Proyectos>,
    ) { }

    async findAll(): Promise<any[]> {
        try {
            const proyectos = await this.proyectosRepository.find({
                relations: ['administrador'],
                order: { nombre: 'ASC' },
            });

            // Verifica si se encontraron proyectos
            if (proyectos.length > 0) {
                return proyectos.map((proyecto) => {
                    const { administrador, ...datos } = proyecto;
                    return {
                        ...datos,
                        adminNombre: administrador.nombre,
                    };
                });
            } else {
                return [];
            }
        } catch (error) {
            console.log('Error al consultar: ', error);
            throw new HttpException('Error al obtener los proyectos', error);

        }
    }

    async findLastThree(): Promise<any[]> {
        try {
            const proyectos = await this.proyectosRepository.find({
                relations: ['administrador'],
                order: { fecha_creacion: 'DESC' },
                take: 3,
            });

            // Verifica si se encontraron proyectos
            if (proyectos.length > 0) {
                return proyectos.map((proyecto) => {
                    const { administrador, ...datos } = proyecto;

                    return {
                        ...datos,
                        adminNombre: administrador.nombre,
                    };
                });
            } else {
                return [];
            }
        } catch (error) {
            console.log('Error al consultar: ', error);
            throw new HttpException('Error al obtener los proyectos', error);
        }
    }

    async findOne(id: number): Promise<Proyectos> {
        const proyectos = await this.proyectosRepository.findOne({ where: { id }, relations: ['administrador'] });
        if (!proyectos) {
            throw new NotFoundException('proyecto no encontrado');
        }
        return proyectos;
    }

    create(proyecto: Proyectos): Promise<Proyectos> {
        return this.proyectosRepository.save(proyecto);
    }

    async update(id: number, proyecto: Partial<Proyectos>): Promise<Proyectos> {
        await this.proyectosRepository.update(id, proyecto);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.proyectosRepository.delete(id);
    }
}
