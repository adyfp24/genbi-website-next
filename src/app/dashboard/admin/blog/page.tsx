"use client";

import DefaultLayout from "@/components/admin/layouts/DefaultLayout";
import CKeditor from "@/components/layouts/ck-editor";
import React, { useEffect, useState } from "react";
import { useBlog } from "@/context/blogContext";

const BlogAdmin: React.FC = () => {
    const [data, setData] = useState<string>("");
    const [editorLoaded, setEditorLoaded] = useState<boolean>(false);
    const [formData, setFormData] = useState<CreateBlogProps>({
        title: "",
        caption: "",
        content: "",
        bannerImg: null,
        categoryId: 1, 
        keywords: []
    });

    const { loading, error, addBlog } = useBlog();

    useEffect(() => {
        setEditorLoaded(true);
    }, []);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        setFormData((prev) => ({ ...prev, bannerImg: file }));
    };

    const handleKeywordsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const keywordsArray = event.target.value.split(",");
        setFormData((prev) => ({ ...prev, keywords: keywordsArray }));
    };

    const handleEditorChange = (content: string) => {
        setData(content);
        setFormData((prev) => ({ ...prev, content }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const blogData: CreateBlogProps = {
            ...formData,
            content: data
        };
        try {
            await addBlog(blogData);
            console.log("Blog added successfully");
        } catch (err) {
            console.error("Error adding blog:", err);
        }
    };

    return (
        <DefaultLayout>
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 md:p-8 lg:p-10 space-y-6">
                <h3 className="font-bold text-2xl mb-6 text-gray-800">Tambahkan Artikel Baru</h3>

                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Judul Artikel</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="categoryId" className="block text-sm font-medium text-gray-700">Tambahkan Kategori</label>
                    <select
                        name="categoryId"
                        id="categoryId"
                        value={formData.categoryId}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                    >
                        <option value={1}>Seminar</option>
                        <option value={2}>Edukasi</option>
                        <option value={3}>Hiburan</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="keywords" className="block text-sm font-medium text-gray-700">Tambahkan Keyword (Pisahkan dengan koma)</label>
                    <input
                        type="text"
                        id="keywords"
                        name="keywords"
                        value={formData.keywords.join(", ")}
                        onChange={handleKeywordsChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>

                <div>
                    <label htmlFor="bannerImg" className="block text-sm font-medium text-gray-700">Tambahkan Gambar Header</label>
                    <input
                        type="file"
                        id="bannerImg"
                        name="bannerImg"
                        onChange={handleFileChange}
                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-100 file:text-indigo-700 hover:file:bg-indigo-200"
                    />
                </div>

                <div>
                    <label htmlFor="caption" className="block text-sm font-medium text-gray-700">Tambahkan Caption</label>
                    <input
                        type="text"
                        id="caption"
                        name="caption"
                        value={formData.caption}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>

                <div className="mt-8">
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700">Konten Artikel</label>
                    <CKeditor
                        editorLoaded={editorLoaded}
                        name="content"
                        onChange={handleEditorChange}
                        value={data}
                    />
                </div>

                <div className="mt-8">
                    <h2 className="font-semibold text-lg text-gray-700 mb-2">Content Preview:</h2>
                    <div className="prose prose-indigo max-w-none" dangerouslySetInnerHTML={{ __html: data }} />
                </div>

                <button
                    type="submit"
                    className="mt-6 w-full inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Submit Artikel
                </button>
            </form>
        </DefaultLayout>
    );
};

export default BlogAdmin;
