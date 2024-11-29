/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "VehiculeBrand" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "VehiculeBrand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VehiculeModel" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "brandId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "VehiculeModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VehiculeCategory" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "VehiculeCategory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "VehiculeModel" ADD CONSTRAINT "VehiculeModel_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "VehiculeBrand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VehiculeModel" ADD CONSTRAINT "VehiculeModel_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "VehiculeCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
