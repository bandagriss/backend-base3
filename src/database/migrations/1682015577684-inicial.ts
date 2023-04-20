import { MigrationInterface, QueryRunner } from "typeorm";

export class Inicial1682015577684 implements MigrationInterface {
    name = 'Inicial1682015577684'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usuarios" ("_fecha_creacion" TIMESTAMP NOT NULL DEFAULT now(), "_usuario_creacion" character varying NOT NULL, "_fecha_actualizacion" TIMESTAMP DEFAULT now(), "_usuario_actualizacion" character varying, "_fecha_eliminacion" TIMESTAMP, "_usuario_eliminacion" character varying, "estado" character varying(50) NOT NULL DEFAULT 'ACTIVO', "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "usuario" character varying(50) NOT NULL, "contrasena" character varying(65) NOT NULL, "id_persona" uuid, CONSTRAINT "REL_5b29c4b5cc11b9c67c8b70c9cb" UNIQUE ("id_persona"), CONSTRAINT "PK_d7281c63c176e152e4c531594a8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "personas" ("_fecha_creacion" TIMESTAMP NOT NULL DEFAULT now(), "_usuario_creacion" character varying NOT NULL, "_fecha_actualizacion" TIMESTAMP DEFAULT now(), "_usuario_actualizacion" character varying, "_fecha_eliminacion" TIMESTAMP, "_usuario_eliminacion" character varying, "estado" character varying(50) NOT NULL DEFAULT 'ACTIVO', "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nombres" character varying(100) NOT NULL, "primer_apellido" character varying(100) NOT NULL, "segundo_apellido" character varying(100), "genero" character varying(15) NOT NULL, "fecha_nacimiento" date NOT NULL, "celular" integer, "tipo_documento" character varying(50) NOT NULL DEFAULT 'CI', "numero_documento" character varying(50) NOT NULL, "direccion" character varying(250), "id_usuario" uuid, CONSTRAINT "REL_8119d9635757d434ba622f004b" UNIQUE ("id_usuario"), CONSTRAINT "PK_714aa5d028f8f3e6645e971cecd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "usuarios" ADD CONSTRAINT "FK_5b29c4b5cc11b9c67c8b70c9cb2" FOREIGN KEY ("id_persona") REFERENCES "personas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "personas" ADD CONSTRAINT "FK_8119d9635757d434ba622f004ba" FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "personas" DROP CONSTRAINT "FK_8119d9635757d434ba622f004ba"`);
        await queryRunner.query(`ALTER TABLE "usuarios" DROP CONSTRAINT "FK_5b29c4b5cc11b9c67c8b70c9cb2"`);
        await queryRunner.query(`DROP TABLE "personas"`);
        await queryRunner.query(`DROP TABLE "usuarios"`);
    }

}
