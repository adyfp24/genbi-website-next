import prisma from "@/lib/prisma";

export default async function testimoniSeed() {
    await prisma.testimoni.createMany({
        data: [
            {
                name: "Rizki Dwi Putra",
                testimoni: "Beasiswa Bank Indonesia ngebantu banget kuliah saya! Lewat GenBI, saya dapet banyak pengalaman seru.",
                rating: 5,
                videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                instansi: "universitas jember",
                instansiPenerimaId: 1
            },
            {
                name: "Irfan Muhammad Zein",
                testimoni: "Beasiswa Bank Indonesia ngebantu banget kuliah saya! Lewat GenBI, saya dapet banyak pengalaman seru.",
                rating: 5,
                videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                instansi: "universitas jember",
                instansiPenerimaId: 1
            },
            {
                name: "Nofita Nur Aini",
                testimoni: "Beasiswa Bank Indonesia ngebantu banget kuliah saya! Lewat GenBI, saya dapet banyak pengalaman seru.",
                rating: 5,
                videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                instansi: "universitas jember",
                instansiPenerimaId: 1
            }
        ]
    })
}