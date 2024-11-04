import prisma from "@/lib/prisma";
import faqSeed from "./faqSeeder";
import testimoniSeed from "./testimoniSeeder";

async function main() {
    await faqSeed();
    await testimoniSeed();
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