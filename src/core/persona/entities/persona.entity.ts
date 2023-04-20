import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AbstractEntity } from '../../../common/dto/AbstractEntity.dto';
import { TipoDocumento } from '../../../common/constants/index';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity({ name: 'personas' })
export class Persona extends AbstractEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'nombres', length: 100, nullable: false })
  nombres: string;

  @Column({ name: 'primer_apellido', length: 100, nullable: false })
  primarApellido: string;

  @Column({ name: 'segundo_apellido', length: 100, nullable: true })
  segundoApellido: string;

  @Column({ name: 'genero', length: 15, nullable: false })
  genero: string;

  @Column({
    name: 'fecha_nacimiento',
    type: 'date',
    nullable: false,
  })
  fechaNacimiento: string;

  @Column({ name: 'celular', type: 'int', nullable: true })
  celular: string;

  @Column({
    name: 'tipo_documento',
    length: 50,
    nullable: false,
    default: TipoDocumento.CI,
  })
  tipoDocumento: string;

  @Column({
    name: 'numero_documento',
    length: 50,
    nullable: false,
  })
  numeroDocumento: string;

  @Column({
    name: 'direccion',
    length: 250,
    nullable: true,
  })
  direccion: string;

  @OneToOne(() => Usuario, (usuario) => usuario.persona)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;
}
