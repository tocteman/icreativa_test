import { MigrationInterface, QueryRunner } from "typeorm";

export class DefaultUserMigration implements MigrationInterface {
    name = 'migrations1674433203436'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" ALTER COLUMN "active" SET DEFAULT true`);
      await queryRunner.query(`INSERT INTO "user" (username, password) VALUES ('testtodo@icreativa.com.ec', '$2a$11$/ARBPgyAM4SxwQOZeFYaveoPoYza1KsmZ58EknmJK2RGHI2i4oG9y')`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" ALTER COLUMN "active" SET DEFAULT false`);
        await queryRunner.query(`delete from user`);
    }

}
