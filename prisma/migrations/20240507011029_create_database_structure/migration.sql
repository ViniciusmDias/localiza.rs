/*
  Warnings:

  - You are about to drop the `_DuoToGame` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DuoToStage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `accounts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `duos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `games` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `groups` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `schedulings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sessions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `stages` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_DuoToGame` DROP FOREIGN KEY `_DuoToGame_A_fkey`;

-- DropForeignKey
ALTER TABLE `_DuoToGame` DROP FOREIGN KEY `_DuoToGame_B_fkey`;

-- DropForeignKey
ALTER TABLE `_DuoToStage` DROP FOREIGN KEY `_DuoToStage_A_fkey`;

-- DropForeignKey
ALTER TABLE `_DuoToStage` DROP FOREIGN KEY `_DuoToStage_B_fkey`;

-- DropForeignKey
ALTER TABLE `accounts` DROP FOREIGN KEY `accounts_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `duos` DROP FOREIGN KEY `duos_group_id_fkey`;

-- DropForeignKey
ALTER TABLE `games` DROP FOREIGN KEY `games_groupId_fkey`;

-- DropForeignKey
ALTER TABLE `games` DROP FOREIGN KEY `games_stageId_fkey`;

-- DropForeignKey
ALTER TABLE `groups` DROP FOREIGN KEY `groups_stageId_fkey`;

-- DropForeignKey
ALTER TABLE `schedulings` DROP FOREIGN KEY `schedulings_duoId_fkey`;

-- DropForeignKey
ALTER TABLE `sessions` DROP FOREIGN KEY `sessions_user_id_fkey`;

-- DropTable
DROP TABLE `_DuoToGame`;

-- DropTable
DROP TABLE `_DuoToStage`;

-- DropTable
DROP TABLE `accounts`;

-- DropTable
DROP TABLE `duos`;

-- DropTable
DROP TABLE `games`;

-- DropTable
DROP TABLE `groups`;

-- DropTable
DROP TABLE `schedulings`;

-- DropTable
DROP TABLE `sessions`;

-- DropTable
DROP TABLE `stages`;

-- DropTable
DROP TABLE `users`;

-- CreateTable
CREATE TABLE `person` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `temporary_house` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
