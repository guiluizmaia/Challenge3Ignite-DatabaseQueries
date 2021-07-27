import {MigrationInterface, QueryRunner} from "typeorm";

export class NewTables1627345054389 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'CREATE TABLE "genres" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "genres" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))',
        );
        await queryRunner.query(
            'CREATE TABLE "orders" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" uuid NOT NULL DEFAULT uuid_generate_v4(), "gameId" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))',
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'ALTER TABLE "genres" DROP CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433"',
          );
          await queryRunner.query(
            'ALTER TABLE "orders" DROP CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7454"',
          );
          await queryRunner.query('DROP TABLE "genres"');
          await queryRunner.query('DROP TABLE "orders"');
    }

}
