import { Usuarios } from './entities/usuarios.entity'; // Ajusta la ruta según tu estructura

declare global {
    namespace Express {
        interface Request {
            user?: Usuarios;
        }
    }
}