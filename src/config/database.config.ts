import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Roles } from './../entities/roles.entity';
import { Usuarios } from './../entities/usuarios.entity';
import { Proyectos } from './../entities/proyectos.entity';
import { UsuariosProyectos } from './../entities/usuarios-proyectos.entity';

export const getTypeOrmConfig = (configService: ConfigService): TypeOrmModuleOptions => ({
    type: 'postgres',
    host: configService.get<string>('DATABASE_HOST'),
    port: parseInt(configService.get<string>('DATABASE_PORT', '5432'), 10),
    username: configService.get<string>('DATABASE_USER'),
    password: configService.get<string>('DATABASE_PASSWORD'),
    database: configService.get<string>('DATABASE_NAME'),
    entities: [Roles, Usuarios, Proyectos, UsuariosProyectos],
    synchronize: false,
});