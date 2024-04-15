/*
  Warnings:

  - You are about to drop the column `completeAt` on the `Todos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Todos" DROP COLUMN "completeAt",
ADD COLUMN     "completedAt" TIMESTAMP;
