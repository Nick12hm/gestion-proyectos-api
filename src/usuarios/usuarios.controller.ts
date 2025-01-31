import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuarios } from './../entities/usuarios.entity';

@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly usuariosService: UsuariosService) { }

    @Get()
    findAll(): Promise<Usuarios[]> {
        return this.usuariosService.findAll();
    }

    @Get('adm')
    admUsers(): Promise<any[]> {
        return this.usuariosService.admUsers();
    }

    @Get('reed')
    reedUsers(): Promise<any[]> {
        return this.usuariosService.reedUsers();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Usuarios> {
        return this.usuariosService.findOne(id);
    }

    @Post()
    create(@Body() usuario: Usuarios): Promise<Usuarios> {
        return this.usuariosService.create(usuario);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() usuario: Partial<Usuarios>): Promise<Usuarios> {
        return this.usuariosService.update(id, usuario);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.usuariosService.remove(id);
    }
}
