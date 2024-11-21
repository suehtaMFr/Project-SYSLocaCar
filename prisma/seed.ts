import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
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
    { nome: "Chevrolet" },
    { nome: "Saab" },
    { nome: "Pagani" },
    { nome: "Maserati" },
  ];

  await prisma.marca.createMany({
    data: marcas,
    skipDuplicates: true, // Evita duplicatas se o seed for rodado mais de uma vez
  });

  console.log("Tabelas populadas com sucesso!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
