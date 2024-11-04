import prisma from "@/lib/prisma"

export default async function(){
    await prisma.instansi.createMany({
        data: [
            {
                name : "Universitas Jember",
                contact: "88899900",
                instansiImg: "/images/unej.png",
                totalAwardee: 120,
            },
            {
                name : "Politeknik Negeri Jember",
                contact: "88899900",
                instansiImg: "/images/polije.png",
                totalAwardee: 75,
            },
            {
                name : "UIN KHAS Jember",
                contact: "88899900",
                instansiImg: "/images/unej.png",
                totalAwardee: 96,
            }
        ]
    })
}