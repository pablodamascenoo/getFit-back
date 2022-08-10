-- CreateEnum
CREATE TYPE "Objective" AS ENUM ('cut', 'maintain', 'bulk');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "objective" "Objective";
