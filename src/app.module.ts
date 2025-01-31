import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getTypeOrmConfig } from './config/database.config';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ProyectosModule } from './proyectos/proyectos.module';
import { UsuariosProyectosModule } from './usuarios-proyectos/usuarios-proyectos.module';
import { AuthModule } from './auth/auth.module';
import { AuthMiddleware } from './auth/auth.middleware';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Hace que el módulo de configuración esté disponible en toda la aplicación
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getTypeOrmConfig,
    }),
    UsuariosModule,
    ProyectosModule,
    UsuariosProyectosModule,
    AuthModule
  ]
})
// eslint-disable-next-line prettier/prettier
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        { path: 'usuarios', method: RequestMethod.ALL },
        { path: 'proyectos', method: RequestMethod.ALL },
        { path: 'usuarios-proyectos', method: RequestMethod.ALL },
      );
  }
}
