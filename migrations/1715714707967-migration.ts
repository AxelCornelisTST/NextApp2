import {MigrationInterface, QueryRunner} from "typeorm";

export class Migration1715714707967 implements MigrationInterface {
    name = 'Migration1715714707967'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`laptop\` (\`serial_number\` varchar(255) NOT NULL, \`brand\` varchar(255) NOT NULL, \`model\` varchar(255) NOT NULL, \`processor\` varchar(255) NOT NULL, \`is_being_repaired\` tinyint(1) NOT NULL DEFAULT 0, \`laptop_user_user_id\` int NULL, PRIMARY KEY (\`serial_number\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`laptopUser\` (\`user_id\` int NOT NULL, \`email_ouder1\` varchar(255) NOT NULL, \`email_ouder2\` varchar(255) NOT NULL, \`family_name\` varchar(255) NOT NULL, \`first_name\` varchar(255) NOT NULL, \`klas\` varchar(255) NOT NULL, PRIMARY KEY (\`user_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NULL, \`email\` varchar(255) NULL, \`email_verified\` varchar(255) NULL, \`image\` varchar(255) NULL, \`role\` varchar(255) NULL, UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`accounts\` (\`id\` varchar(36) NOT NULL, \`user_id\` varchar(255) NOT NULL, \`type\` varchar(255) NOT NULL, \`provider\` varchar(255) NOT NULL, \`provider_account_id\` varchar(255) NOT NULL, \`refresh_token\` varchar(255) NULL, \`access_token\` varchar(255) NULL, \`expires_at\` bigint NULL, \`token_type\` varchar(255) NULL, \`scope\` varchar(255) NULL, \`id_token\` varchar(255) NULL, \`session_state\` varchar(255) NULL, \`oauth_token_secret\` varchar(255) NULL, \`oauth_token\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sessions\` (\`id\` varchar(36) NOT NULL, \`session_token\` varchar(255) NOT NULL, \`user_id\` varchar(255) NOT NULL, \`expires\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_f10db2949bbea55b44f31108e1\` (\`session_token\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`verification_tokens\` (\`id\` varchar(36) NOT NULL, \`token\` varchar(255) NOT NULL, \`identifier\` varchar(255) NOT NULL, \`expires\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`laptop\` ADD CONSTRAINT \`FK_d0eb28483575f68719280cd4b35\` FOREIGN KEY (\`laptop_user_user_id\`) REFERENCES \`laptopUser\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`accounts\` ADD CONSTRAINT \`FK_3000dad1da61b29953f07476324\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sessions\` ADD CONSTRAINT \`FK_085d540d9f418cfbdc7bd55bb19\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`sessions\` DROP FOREIGN KEY \`FK_085d540d9f418cfbdc7bd55bb19\``);
        await queryRunner.query(`ALTER TABLE \`accounts\` DROP FOREIGN KEY \`FK_3000dad1da61b29953f07476324\``);
        await queryRunner.query(`ALTER TABLE \`laptop\` DROP FOREIGN KEY \`FK_d0eb28483575f68719280cd4b35\``);
        await queryRunner.query(`DROP TABLE \`verification_tokens\``);
        await queryRunner.query(`DROP INDEX \`IDX_f10db2949bbea55b44f31108e1\` ON \`sessions\``);
        await queryRunner.query(`DROP TABLE \`sessions\``);
        await queryRunner.query(`DROP TABLE \`accounts\``);
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`laptopUser\``);
        await queryRunner.query(`DROP TABLE \`laptop\``);
    }

}
