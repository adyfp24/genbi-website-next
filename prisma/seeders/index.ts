import prisma from "@/lib/prisma";
import faqSeed from "./faqSeeder";

async function main() {
    await faqSeed();
    console.log("Seeding completed.");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });