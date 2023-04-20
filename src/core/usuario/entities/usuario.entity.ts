import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AbstractEntity } from '../../../common/dto/AbstractEntity.dto';
import { Persona } from '../../persona/entities/persona.entity';

@Entity({ name: 'usuarios' })
export class Usuario extends AbstractEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'usuario', length: 50, nullable: false })
  usuario: string;

  @Column({ name: 'contrasena', length: 65, nullable: false })
  contrasena: string;

  @OneToOne(() => Persona, (persona) => persona.usuario)
  @JoinColumn({ name: 'id_persona' })
  persona: Persona;
}
