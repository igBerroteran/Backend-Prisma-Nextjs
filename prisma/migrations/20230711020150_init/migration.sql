/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Abogados" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "photo" TEXT NOT NULL,

    CONSTRAINT "Abogados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Clientes" (
    "id" TEXT NOT NULL,
    "ci" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "photo" TEXT NOT NULL,

    CONSTRAINT "Clientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Expedientes" (
    "id" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "categories" TEXT NOT NULL,
    "ci" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "exp" TEXT NOT NULL,
    "file" TEXT NOT NULL,
    "mailClient" TEXT NOT NULL,
    "postedOn" TIMESTAMP(3) NOT NULL,
    "resumen" TEXT NOT NULL,

    CONSTRAINT "Expedientes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Expedientes" ADD CONSTRAINT "cliente_fkey" FOREIGN KEY ("id") REFERENCES "Clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expedientes" ADD CONSTRAINT "abogado_fkey" FOREIGN KEY ("id") REFERENCES "Abogados"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
