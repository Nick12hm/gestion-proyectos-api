import { Controller, Get, Post, Put, Delete, Body, Param, Req, UnauthorizedException } from '@nestjs/common';
import { ProyectosService } from './proyectos.service';
import { Proyectos } from './../entities/proyectos.entity';
import { Request } from 'express';
import * as jwt from 'jsonwebtoken';

interface AuthenticatedUser {
    email: string;
    id: number;
    rol_id: number;
}

@Controller('proyectos')
export class ProyectosController {
    constructor(private readonly proyectosService: ProyectosService) { }

    @Get()
    findAll(): Promise<any[]> {
        return this.proyectosService.findAll();
    }

    @Get('filter') // Nueva ruta para obtener los últimos tres proyectos
    findLastThree(): Promise<any[]> {
        return this.proyectosService.findLastThree();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Proyectos> {
        return this.proyectosService.findOne(id);
    }

    @Post()
    create(@Body() proyecto: Proyectos, @Req() req: Request): any {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            throw new UnauthorizedException('Token not provided');
        }

        try {
            const decoded = jwt.verify(token, 'secretKey');
            if (typeof decoded === 'object' && decoded !== null) {
                const user = {
                    email: decoded.email as string,
                    rol_id: decoded.rolUser as number
                } as AuthenticatedUser;


                if (user.rol_id !== 1) {
                    throw new UnauthorizedException('Only administrators can create projects');
                }

                return this.proyectosService.create(proyecto);
            } else {
                throw new UnauthorizedException('Invalid token2');
            }
        } catch (error) {
            throw new UnauthorizedException('Invalid token1');
        }
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() proyecto: Partial<Proyectos>): Promise<Proyectos> {
        return this.proyectosService.update(id, proyecto);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<Proyectos> {
        return this.proyectosService.remove(id);
    }
}
