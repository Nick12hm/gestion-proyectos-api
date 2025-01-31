import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosProyectosController } from './usuarios-proyectos.controller';

describe('UsuariosProyectosController', () => {
  let controller: UsuariosProyectosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuariosProyectosController],
    }).compile();

    controller = module.get<UsuariosProyectosController>(UsuariosProyectosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
