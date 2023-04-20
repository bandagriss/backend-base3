// import { MigrationInterface, QueryRunner } from 'typeorm';
// import { Persona } from '../../core/persona/entities/persona.entity';

// export class usuarios1680924362329 implements MigrationInterface {
//   name = 'usuarios1680924362329';

//   public async up(queryRunner: QueryRunner): Promise<void> {
//     const items = [
//       {
//         nombres: 'Roger Ivan',
//         primerApellido: 'Aroa',
//         segundoApellido: 'Miranda',
//         genero: 'MASCULINO',
//         fechaNacimiento: '1989-02-17',
//         tipoDocumento: 'CI',
//         numeroDocumento: '7024739',
//         celular: 79638041,
//       },
//     ];

//     const parametros = items.map((item) => {
//       const p = new Persona();
//       // p.codigo = item.codigo;
//       // p.nombre = item.nombre;
//       // p.grupo = item.grupo;
//       // p.descripcion = item.descripcion;
//       Object.assign(p, item);
//       p.usuario = {
//         usuario: p.numeroDocumento,
//         contrasena: bcrypt
//       }
//       return p;
//     });

//     for await (const parametro of parametros) {
//       await queryRunner.manager.save(parametro);
//     }
//   }

//   // eslint-disable-next-line
//   public async down(queryRunner: QueryRunner): Promise<void> {}
// }
