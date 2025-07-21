import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.tenant.create({
    data: { name: 'Sprint0 Demo', deployMode: 'single_school' },
  });
}
main().finally(() => prisma.$disconnect());
