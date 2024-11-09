"use client";

import DefaultLayout from "@/components/admin/layouts/DefaultLayout";
import CKeditor from "@/components/layouts/ck-editor";
import React, { useEffect, useState } from "react";
// import {UseBlog}

interface CreateBlogProps {
    title: string;
    headerImg: string
    keyword: string
    categoryId: string
    content: string
}

const BlogAdmin: React.FC = () => {
    const [data, setData] = useState<string>("");
    const [editorLoaded, setEditorLoaded] = useState<boolean>(false);
    const [formData, setFormData] = useState<CreateBlogProps>();

    useEffect(() => {
        setEditorLoaded(true);
    }, []);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Add form submission logic here
        console.log("Form submitted with data:", data);
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
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">Tambahkan Kategori</label>
                    <select
                        name="category"
                        id="category"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                    >
                        <option value="Seminar">Seminar</option>
                        <option value="Edukasi">Edukasi</option>
                        <option value="Hiburan">Hiburan</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="keyword" className="block text-sm font-medium text-gray-700">Tambahkan Keyword</label>
                    <input
                        type="text"
                        id="keyword"
                        name="keyword"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>

                <div>
                    <label htmlFor="header_img" className="block text-sm font-medium text-gray-700">Tambahkan Gambar Header</label>
                    <input
                        type="file"
                        id="header_img"
                        name="header_img"
                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-100 file:text-indigo-700 hover:file:bg-indigo-200"
                    />
                </div>

                <div>
                    <label htmlFor="caption" className="block text-sm font-medium text-gray-700">Tambahkan Caption</label>
                    <input
                        type="text"
                        id="caption"
                        name="caption"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>

                <div className="mt-8">
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700">Konten Artikel</label>
                    <CKeditor
                        editorLoaded={editorLoaded}
                        name="content"
                        onChange={(data: string) => setData(data)}
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
