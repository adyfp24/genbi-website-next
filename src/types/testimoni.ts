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
    id: string;
    name: string;
    message: string;
}
