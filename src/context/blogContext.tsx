"use client"

import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

const BlogContext = createContext<BlogContextType | undefined>(undefined);

interface BlogContextType {
    loading: boolean
    error: string | null
    blogs: Blog[]
    highlightedBlogs: Blog[]
    blog: Blog | null
    getAllBlog: () => Promise<void>
    getBlogById: (id: string) => Promise<void>
    addBlog: (data: CreateBlogProps) => Promise<void>
    updateBlog: (id: string, data: Partial<Blog>) => Promise<void>
    deleteBlog: (id: string) => Promise<void>
}

interface BlogProviderProps {
    children: ReactNode
}

export const BlogProvider
    : React.FC<BlogProviderProps> = ({ children }) => {
        const [loading, setLoading] = useState(false)
        const [error, setError] = useState<string | null>(null)
        const [blogs, setBlogs] = useState<Blog[]>([])
        const [blog, setBlog] = useState<Blog | null>(null)
        const [highlightedBlogs, setHighlightedBlogs] = useState<Blog[]>([])

        const getAllBlog = async () => {
            setLoading(true)
            setError(null)
            try {
                const response = await fetch('/api/blog')
                if (!response.ok) throw new Error('Error fetching blog data')
                const data = await response.json()
                if (data.success && Array.isArray(data.data)) {
                    setBlogs(data.data)
                    getBlogHighlight(data.data)
                }
            } catch (error: any) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        const getBlogById = async (id: string) => {
            setLoading(true)
            setError(null)
            try {
                const response = await fetch(`/api/blog/${id}`)
                if (!response.ok) throw new Error('Error fetching blog by ID')
                const data = await response.json()
                setBlog(data.data)
            } catch (error: any) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        const addBlog = async (data: CreateBlogProps) => {
            setLoading(true);
            setError(null);

            try {
                const formData = new FormData();
                formData.append('title', data.title);
                formData.append('caption', data.caption);
                formData.append('content', data.content);
                formData.append('categoryId', data.categoryId.toString());
                formData.append('keywords', JSON.stringify(data.keywords));
                if (data.bannerImg) {
                    formData.append('bannerImg', data.bannerImg);
                }

                const response = await fetch('/api/blog', {
                    method: 'POST',
                    body: formData,
                });

                if (!response.ok) throw new Error('Error adding blog data');
                await getAllBlog();
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };


        const updateBlog = async (id: string, data: Partial<Blog>) => {
            setLoading(true)
            setError(null)
            try {
                const response = await fetch(`/api/blog/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                if (!response.ok) throw new Error('Error update blog data')
                await getAllBlog()
            } catch (error: any) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        const deleteBlog = async (id: string) => {
            setLoading(true)
            setError(null)
            try {
                const response = await fetch(`/api/blog/${id}`, {
                    method: 'DELETE'
                })
                if (!response.ok) throw new Error('Error delete blog data')
                await getAllBlog()
            } catch (error: any) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        const getBlogHighlight = (blogs: Blog[]) => {
            setLoading(true)
            setError(null)
            try {
                const filteredData = blogs.filter((blog) => blog.isHighlight === true)
                setHighlightedBlogs(filteredData)
                console.log(highlightedBlogs)
            } catch (error: any) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        useEffect(() => {
            getAllBlog()
        }, [])

        return <BlogContext.Provider
            value={{
                loading,
                error,
                blogs,
                highlightedBlogs,
                blog,
                getAllBlog,
                getBlogById,
                addBlog,
                updateBlog,
                deleteBlog
            }}
        >
            {children}
        </BlogContext.Provider>
    }

export const useBlog = () => {
    const context = useContext(BlogContext)
    if (context == undefined) throw new Error('useBlog must be used within a Blog Provider')
    return context
}