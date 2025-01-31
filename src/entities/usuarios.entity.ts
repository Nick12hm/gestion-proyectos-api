import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Roles } from './roles.entity';

@Entity()
export class Usuarios {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({ nullable: true }) // Nuevo campo: token
    token: string;

    @Column()
    rol_id: number;

    @Column({ nullable: true })
    administrador_id: number;

    @ManyToOne(() => Roles, (rol) => rol.id, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'rol_id' })
    rol: Roles;

    @ManyToOne(() => Usuarios, (usuario) => usuario.id, { onDelete: 'SET NULL' })
    @JoinColumn({ name: 'administrador_id' })
    administrador: Usuarios;
}