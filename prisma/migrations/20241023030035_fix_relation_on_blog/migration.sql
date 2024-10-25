/*
  Warnings:

  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `caption` to the `Blog` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Blog` DROP FOREIGN KEY `Blog_categoryId_fkey`;

-- AlterTable
ALTER TABLE `Blog` ADD COLUMN `caption` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `Category`;

-- AddForeignKey
ALTER TABLE `Blog` ADD CONSTRAINT `Blog_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Program`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
