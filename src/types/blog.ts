interface Blog {
    id: number;
    title: string;
    caption: string;
    content: string;
    bannerImg: string;
    categoryId: number;
    createdAt: Date;
    updatedAt: Date;
    Category: Program; 
    BlogKeywords: BlogKeyword[]; 
}

interface Keyword {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    BlogKeywords: BlogKeyword[]; 
}

interface BlogKeyword {
    id: number;
    blogId: number;
    keywordId: number;
    createdAt: Date;
    updatedAt: Date;
    Blog: Blog; 
    Keyword: Keyword; 
}
