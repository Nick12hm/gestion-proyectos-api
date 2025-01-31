import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProyectosService } from './proyectos.service';
import { ProyectosController } from './proyectos.controller';
import { Proyectos } from './../entities/proyectos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Proyectos])],
  providers: [ProyectosService],
  controllers: [ProyectosController]
})
export class ProyectosModule { }
