interface TestimoniUpdateRequest {
    rating?: number,
    testimoni?: string,
    name?: string,
    instansi?: string,
    videoUrl?: string
}

interface TestimoniCreateRequest {
    rating: number,
    testimoni: string,
    name: string,
    instansi: string,
    videoUrl: string
}

interface Testimoni {
    id: number,
    name: string,
    testimoni: string,
    rating: number,
    instansiId: string | number,
    InstansiPenerima : Instansi
}

