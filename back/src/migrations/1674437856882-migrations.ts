import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatedAtTodoMigration implements MigrationInterface {
    name = 'migrations1674437856882'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" ALTER COLUMN "updated_at" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" ALTER COLUMN "updated_at" DROP DEFAULT`);
    }

}
