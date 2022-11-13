/*
  Warnings:

  - Added the required column `subTitle` to the `Work` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Work` ADD COLUMN `subTitle` VARCHAR(191) NOT NULL;
