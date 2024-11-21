-- CreateTable
CREATE TABLE "Ocorrencia" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "dataOcorrencia" TIMESTAMP(3) NOT NULL,
    "valorOcorrencia" DOUBLE PRECISION NOT NULL,
    "contratoId" INTEGER NOT NULL,

    CONSTRAINT "Ocorrencia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pagamento" (
    "id" SERIAL NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "valorPago" DOUBLE PRECISION NOT NULL,
    "formaPagamento" TEXT NOT NULL,
    "contratoId" INTEGER NOT NULL,

    CONSTRAINT "Pagamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContratoLocacao" (
    "id" SERIAL NOT NULL,
    "dataLocacao" TIMESTAMP(3) NOT NULL,
    "dataDevolucao" TIMESTAMP(3) NOT NULL,
    "valorCaucao" DOUBLE PRECISION NOT NULL,
    "valorTotal" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "ContratoLocacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ContratoVeiculos" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ContratoVeiculos_AB_unique" ON "_ContratoVeiculos"("A", "B");

-- CreateIndex
CREATE INDEX "_ContratoVeiculos_B_index" ON "_ContratoVeiculos"("B");

-- AddForeignKey
ALTER TABLE "Ocorrencia" ADD CONSTRAINT "Ocorrencia_contratoId_fkey" FOREIGN KEY ("contratoId") REFERENCES "ContratoLocacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pagamento" ADD CONSTRAINT "Pagamento_contratoId_fkey" FOREIGN KEY ("contratoId") REFERENCES "ContratoLocacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContratoVeiculos" ADD CONSTRAINT "_ContratoVeiculos_A_fkey" FOREIGN KEY ("A") REFERENCES "ContratoLocacao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContratoVeiculos" ADD CONSTRAINT "_ContratoVeiculos_B_fkey" FOREIGN KEY ("B") REFERENCES "Veiculo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
