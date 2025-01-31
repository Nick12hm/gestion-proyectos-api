import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Usuarios } from './usuarios.entity';
import { Proyectos } from './proyectos.entity';

@Entity()
export class UsuariosProyectos {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Usuarios, (usuario) => usuario.id, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'usuario_id' })
    usuario: Usuarios;

    @ManyToOne(() => Proyectos, (proyecto) => proyecto.id, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'proyecto_id' })
    proyecto: Proyectos;
}