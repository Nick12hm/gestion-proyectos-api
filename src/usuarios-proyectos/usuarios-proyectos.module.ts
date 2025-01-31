import { Module } from '@nestjs/common';
import { UsuariosProyectosService } from './usuarios-proyectos.service';
import { UsuariosProyectosController } from './usuarios-proyectos.controller';

@Module({
  providers: [UsuariosProyectosService],
  controllers: [UsuariosProyectosController]
})
export class UsuariosProyectosModule {}
