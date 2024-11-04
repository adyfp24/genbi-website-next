import prisma from "@/lib/prisma";

export default async function faqSeed() {
    await prisma.fAQ.createMany({
        data: [
            {
                question: "Apa itu Beasiswa Bank Indonesia?",
                answer: "Beasiswa Bank Indonesia adalah program bantuan pendidikan dari Bank Indonesia yang diberikan kepada mahasiswa berprestasi."
            },
            {
                question: "Siapa yang bisa mendaftar Beasiswa Bank Indonesia?",
                answer: "Mahasiswa aktif yang memenuhi persyaratan dari Bank Indonesia dapat mendaftar."
            },
            {
                question: "Bagaimana cara mendaftar Beasiswa Bank Indonesia?",
                answer: "Anda dapat mendaftar melalui situs resmi Bank Indonesia atau melalui lembaga yang bekerja sama."
            },
            {
                question: "Apa manfaat bergabung dengan GenBI Jember?",
                answer: "Bergabung dengan GenBI Jember memberikan kesempatan berkontribusi di masyarakat serta jaringan dan pengalaman baru."
            },
            {
                question: "Berapa besar dana yang diberikan dalam Beasiswa Bank Indonesia?",
                answer: "Dana yang diberikan bervariasi tergantung kebijakan Bank Indonesia setiap tahunnya."
            },
            {
                question: "Apa saja kegiatan yang dilakukan oleh GenBI Jember?",
                answer: "Kegiatan GenBI Jember mencakup aksi sosial, pelatihan, seminar, dan pengembangan diri lainnya."
            }    
        ]   
    })
}