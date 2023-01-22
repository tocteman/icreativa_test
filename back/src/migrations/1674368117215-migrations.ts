import { MigrationInterface, QueryRunner } from "typeorm";

export class TodoDeletedAtColumnMigration implements MigrationInterface {
    name = 'migrations1674368117215'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" ADD "deleted_at" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "deleted_at"`);
    }

}
