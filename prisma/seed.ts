import { PrismaClient } from "@prisma/client";
import { DateTime } from "luxon"; // Para manipulação de datas de maneira mais fácil

const prisma = new PrismaClient();

async function main() {
  // Criar categorias
  const categorias = [
    { tipo: "SUV", valorLocacao: 150.0 },
    { tipo: "Sedan", valorLocacao: 100.0 },
    { tipo: "Hatchback", valorLocacao: 80.0 },
    { tipo: "Pickup", valorLocacao: 200.0 },
    { tipo: "Conversível", valorLocacao: 250.0 },
    { tipo: "Van", valorLocacao: 180.0 },
    { tipo: "Coupé", valorLocacao: 120.0 },
    { tipo: "Elétrico", valorLocacao: 300.0 },
    { tipo: "Híbrido", valorLocacao: 250.0 },
    { tipo: "Esportivo", valorLocacao: 500.0 },
  ];

  await prisma.categoria.createMany({
    data: categorias,
    skipDuplicates: true, // Evita duplicatas se o seed for rodado mais de uma vez
  });

  console.log("Categorias populadas com sucesso!");

  // Criar marcas
  const marcas = [
    { nome: "Toyota" },
    { nome: "Volkswagen" },
    { nome: "Ford" },
    { nome: "Chevrolet" },
    { nome: "Honda" },
    { nome: "Nissan" },
    { nome: "Hyundai" },
    { nome: "BMW" },
    { nome: "Mercedes-Benz" },
    { nome: "Audi" },
    { nome: "Kia" },
    { nome: "Peugeot" },
    { nome: "Renault" },
    { nome: "Fiat" },
    { nome: "Jeep" },
    { nome: "Subaru" },
    { nome: "Mazda" },
    { nome: "Porsche" },
    { nome: "Tesla" },
    { nome: "Volvo" },
    { nome: "Lexus" },
    { nome: "Land Rover" },
    { nome: "Jaguar" },
    { nome: "Suzuki" },
    { nome: "Mitsubishi" },
    { nome: "Ferrari" },
    { nome: "Lamborghini" },
    { nome: "Bugatti" },
    { nome: "Rolls-Royce" },
    { nome: "Bentley" },
    { nome: "Aston Martin" },
    { nome: "Alfa Romeo" },
    { nome: "Chrysler" },
    { nome: "Dodge" },
    { nome: "Ram" },
    { nome: "GMC" },
    { nome: "Cadillac" },
    { nome: "Infiniti" },
    { nome: "Acura" },
    { nome: "Seat" },
    { nome: "Skoda" },
    { nome: "Citroën" },
    { nome: "Mini" },
    { nome: "Genesis" },
    { nome: "Opel" },
  ];

  await prisma.marca.createMany({
    data: marcas,
    skipDuplicates: true, // Evita duplicatas se o seed for rodado mais de uma vez
  });

  console.log("Marcas populadas com sucesso!");

  // Criar modelos e associá-los a categorias e marcas
  const modelos = [
    {
      nome: "Corolla",
      anoModelo: DateTime.local().minus({ years: 2 }).toISO(),
      qtModelo: 10,
      categoriaId: 1,
      marcaId: 1,
    }, // Exemplo: SUV
    {
      nome: "Civic",
      anoModelo: DateTime.local().minus({ years: 3 }).toISO(),
      qtModelo: 8,
      categoriaId: 2,
      marcaId: 5,
    }, // Exemplo: Sedan
    {
      nome: "Golf",
      anoModelo: DateTime.local().minus({ years: 4 }).toISO(),
      qtModelo: 5,
      categoriaId: 3,
      marcaId: 2,
    }, // Exemplo: Hatchback
    {
      nome: "F-150",
      anoModelo: DateTime.local().minus({ years: 5 }).toISO(),
      qtModelo: 6,
      categoriaId: 4,
      marcaId: 3,
    }, // Exemplo: Pickup
    {
      nome: "Mustang",
      anoModelo: DateTime.local().minus({ years: 2 }).toISO(),
      qtModelo: 12,
      categoriaId: 10,
      marcaId: 3,
    }, // Exemplo: Esportivo
    {
      nome: "Model X",
      anoModelo: DateTime.local().minus({ years: 1 }).toISO(),
      qtModelo: 3,
      categoriaId: 8,
      marcaId: 19,
    }, // Exemplo: Elétrico
  ];

  await prisma.modelo.createMany({
    data: modelos,
    skipDuplicates: true, // Evita duplicatas se o seed for rodado mais de uma vez
  });

  console.log("Modelos populados com sucesso!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
