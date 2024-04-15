import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1711834566330 implements MigrationInterface {
    name = 'MyMigration1711834566330'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "comment" ("comment_id" SERIAL NOT NULL, "comment_text" character varying NOT NULL, "comment_date" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, "postId" integer, CONSTRAINT "PK_6a9f9bf1cf9a09107d3224a0e9a" PRIMARY KEY ("comment_id"))`);
        await queryRunner.query(`CREATE TABLE "thread" ("id" SERIAL NOT NULL, "conten" character varying, "image" character varying, "postAt" TIMESTAMP NOT NULL DEFAULT now(), "totalLikes" integer NOT NULL DEFAULT '0', "totalComments" integer NOT NULL DEFAULT '0', "userId" integer, CONSTRAINT "PK_cabc0f3f27d7b1c70cf64623e02" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "fullname" character varying NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, "profile" character varying, "sampul" character varying, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "like" ("like_id" SERIAL NOT NULL, "userId" integer, "threadId" integer, CONSTRAINT "PK_90999e6c2872ea84c11682a1762" PRIMARY KEY ("like_id"))`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_c0354a9a009d3bb45a08655ce3b" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_94a85bb16d24033a2afdd5df060" FOREIGN KEY ("postId") REFERENCES "thread"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "thread" ADD CONSTRAINT "FK_57782d1d6ab602aa9ff43cf30a2" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "like" ADD CONSTRAINT "FK_e8fb739f08d47955a39850fac23" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "like" ADD CONSTRAINT "FK_52e479f76c8fa698540cb792f37" FOREIGN KEY ("threadId") REFERENCES "thread"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "like" DROP CONSTRAINT "FK_52e479f76c8fa698540cb792f37"`);
        await queryRunner.query(`ALTER TABLE "like" DROP CONSTRAINT "FK_e8fb739f08d47955a39850fac23"`);
        await queryRunner.query(`ALTER TABLE "thread" DROP CONSTRAINT "FK_57782d1d6ab602aa9ff43cf30a2"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_94a85bb16d24033a2afdd5df060"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_c0354a9a009d3bb45a08655ce3b"`);
        await queryRunner.query(`DROP TABLE "like"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "thread"`);
        await queryRunner.query(`DROP TABLE "comment"`);
    }

}
