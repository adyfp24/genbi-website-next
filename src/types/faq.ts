interface FaqCreateRequest {
    question: string
    answer: string
}

interface FaqUpdateRequest {
    question?: string
    answer?: string
}

interface FAQ {
    id: string;
    question: string;
    answer: string;
}