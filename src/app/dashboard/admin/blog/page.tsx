"use client";
import DefaultLayout from "@/components/admin/layouts/DefaultLayout";
import React, { useEffect, useState } from "react";
import { useBlog } from "@/context/blogContext";
import dynamic from 'next/dynamic';
// import TinyEditor from "@/components/layouts/tiny-editor";

const TinyEditor = dynamic(() => import('@/components/layouts/tiny-editor'), {
    ssr: false
});

interface CreateBlogProps {
    title: string;
    caption: string;
    content: string;
    bannerImg: File | null;
    categoryId: number;
    keywords: string[];
}

const BlogAdmin: React.FC = () => {

    const [formData, setFormData] = useState<CreateBlogProps>({
        title: "",
        caption: "",
        content: "",
        bannerImg: null,
        categoryId: 1,
        keywords: []
    });
    const { loading, error, addBlog } = useBlog();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        setFormData((prev) => ({ ...prev, bannerImg: file }));
    };

    const handleKeywordsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const keywordsArray = event.target.value.split(",").map(k => k.trim());
        setFormData((prev) => ({ ...prev, keywords: keywordsArray }));
    };

    const handleEditorChange = (content: string) => {
        setFormData((prev) => ({ ...prev, content }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            await addBlog(formData);
            // Reset form after successful submission
            setFormData({
                title: "",
                caption: "",
                content: "",
                bannerImg: null,
                categoryId: 1,
                keywords: []
            });
            console.log("Blog added successfully");
        } catch (err) {
            console.error("Error adding blog:", err);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <DefaultLayout>
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10 space-y-8">
                <h3 className="font-bold text-2xl mb-6 text-gray-800">Tambahkan Artikel Baru</h3>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-600">Judul Artikel</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2"
                            placeholder="Masukkan judul artikel"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="categoryId" className="block text-sm font-medium text-gray-600">Kategori</label>
                        <select
                            name="categoryId"
                            id="categoryId"
                            value={formData.categoryId}
                            onChange={handleInputChange}
                            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2"
                            required
                        >
                            <option value={1}>Seminar</option>
                            <option value={2}>Edukasi</option>
                            <option value={3}>Hiburan</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="keywords" className="block text-sm font-medium text-gray-600">Keyword</label>
                        <input
                            type="text"
                            id="keywords"
                            name="keywords"
                            value={formData.keywords.join(", ")}
                            onChange={handleKeywordsChange}
                            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2"
                            placeholder="Pisahkan dengan koma, contoh: teknologi, seminar"
                        />
                    </div>
                    <div>
                        <label htmlFor="bannerImg" className="block text-sm font-medium text-gray-600">Gambar Header</label>
                        <input
                            type="file"
                            id="bannerImg"
                            name="bannerImg"
                            onChange={handleFileChange}
                            className="mt-2 block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border file:border-pr500 file:text-pr500 file:bg-indigo-50 hover:file:bg-indigo-100"
                            accept="image/*"
                        />
                    </div>
                    <div>
                        <label htmlFor="caption" className="block text-sm font-medium text-gray-600">Caption</label>
                        <input
                            type="text"
                            id="caption"
                            name="caption"
                            value={formData.caption}
                            onChange={handleInputChange}
                            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-pr500 focus:ring-pr900 sm:text-sm px-4 py-2"
                            placeholder="Masukkan deskripsi singkat"
                        />
                    </div>
                    <div>
                        <label htmlFor="content" className="block text-sm font-medium text-gray-600">Konten Artikel</label>
                        <div className="mt-2">
                            <TinyEditor
                                value={formData.content}
                                onChange={handleEditorChange}
                                className="min-h-[400px]"
                            />
                        </div>
                    </div>
                    <div className="mt-6">
                        <h2 className="font-semibold text-lg text-gray-700 mb-2">Pratinjau Konten:</h2>
                        <div
                            className="prose prose-indigo max-w-none bg-gray-50 p-4 rounded-md shadow-inner"
                            dangerouslySetInnerHTML={{ __html: formData.content }}
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="mt-6 w-full flex items-center justify-center rounded-md bg-pr700 py-3 px-6 text-sm font-medium text-white shadow-md hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Submit Artikel
                </button>
            </form>
        </DefaultLayout>
    );
};

export default BlogAdmin;