/*
  Warnings:

  - You are about to drop the column `logoIcon` on the `SiteConfig` table. All the data in the column will be lost.
  - Added the required column `icon` to the `SiteConfig` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SiteConfig" DROP COLUMN "logoIcon",
ADD COLUMN     "icon" BYTEA NOT NULL,
ALTER COLUMN "id" SET DEFAULT 1,
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "SiteConfig_id_seq";
