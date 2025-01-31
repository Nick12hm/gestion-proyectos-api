import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Usuarios } from './usuarios.entity';

@Entity()
export class Proyectos {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column({ nullable: true })
    descripcion: string;

    @CreateDateColumn({ type: 'timestamp' })
    fecha_creacion: Date;

    @Column({ name: 'administrador_id' }) // Columna explícita
    administrador_id: number;

    @ManyToOne(() => Usuarios, (usuario) => usuario.id, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'administrador_id' })
    administrador: Usuarios;
}