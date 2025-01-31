import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosProyectosService } from './usuarios-proyectos.service';

describe('UsuariosProyectosService', () => {
  let service: UsuariosProyectosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuariosProyectosService],
    }).compile();

    service = module.get<UsuariosProyectosService>(UsuariosProyectosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
