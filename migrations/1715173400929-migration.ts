import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1715173400929 implements MigrationInterface {
    name = 'Migration1715173400929'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`laptop\` DROP FOREIGN KEY \`FK_d0eb28483575f68719280cd4b35\``);
        await queryRunner.query(`ALTER TABLE \`laptop\` CHANGE \`is_being_repaired\` \`is_being_repaired\` tinyint(1) NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`laptop\` ADD CONSTRAINT \`FK_d0eb28483575f68719280cd4b35\` FOREIGN KEY (\`laptop_user_user_id\`) REFERENCES \`laptopUser\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`laptop\` DROP FOREIGN KEY \`FK_d0eb28483575f68719280cd4b35\``);
        await queryRunner.query(`ALTER TABLE \`laptop\` CHANGE \`is_being_repaired\` \`is_being_repaired\` tinyint(1) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`laptop\` ADD CONSTRAINT \`FK_d0eb28483575f68719280cd4b35\` FOREIGN KEY (\`laptop_user_user_id\`) REFERENCES \`laptopuser\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
