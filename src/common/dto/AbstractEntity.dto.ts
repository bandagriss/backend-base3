import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Estado } from '../constants';

export abstract class AbstractEntity {
  // datos de auditoria
  @CreateDateColumn({ name: '_fecha_creacion' })
  fechaCreacion: Date;

  @Column({ name: '_usuario_creacion' })
  usuarioCreacion: string;

  @UpdateDateColumn({ name: '_fecha_actualizacion', nullable: true })
  fechaActualizacion: Date;

  @Column({ name: '_usuario_actualizacion', nullable: true })
  usuarioActualizacion: string;

  @DeleteDateColumn({ name: '_fecha_eliminacion', nullable: true })
  fechaEliminacion: Date;

  @Column({ name: '_usuario_eliminacion', nullable: true })
  usuarioEliminacion: string;

  @Column({ name: 'estado', length: 50, default: Estado.ACTIVO })
  estado: string;
}
