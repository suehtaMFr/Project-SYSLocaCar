/*
  Warnings:

  - You are about to drop the column `data` on the `Manutencao` table. All the data in the column will be lost.
  - You are about to drop the column `marca` on the `Veiculo` table. All the data in the column will be lost.
  - You are about to drop the column `modelo` on the `Veiculo` table. All the data in the column will be lost.
  - Added the required column `dataManutencao` to the `Manutencao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valorManutencao` to the `Manutencao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modeloId` to the `Veiculo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Manutencao" DROP COLUMN "data",
ADD COLUMN     "dataManutencao" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "valorManutencao" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Veiculo" DROP COLUMN "marca",
DROP COLUMN "modelo",
ADD COLUMN     "modeloId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Categoria" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "valorLocacao" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Marca" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Marca_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Modelo" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "anoModelo" TIMESTAMP(3) NOT NULL,
    "qtModelo" INTEGER NOT NULL,
    "categoriaId" INTEGER NOT NULL,
    "marcaId" INTEGER NOT NULL,

    CONSTRAINT "Modelo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Modelo" ADD CONSTRAINT "Modelo_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Modelo" ADD CONSTRAINT "Modelo_marcaId_fkey" FOREIGN KEY ("marcaId") REFERENCES "Marca"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Veiculo" ADD CONSTRAINT "Veiculo_modeloId_fkey" FOREIGN KEY ("modeloId") REFERENCES "Modelo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
