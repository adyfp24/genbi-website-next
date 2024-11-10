"use client"

import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

const BlogContext = createContext<BlogContextType | undefined>(undefined);

interface BlogContextType {
    loading: boolean
    error: string | null
    blogs: Blog[]
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
    const getAllBlog = async () => {
        setLoading(true)
        setError(null)
        try {
            const response = await fetch('/api/blog')
            if (!response.ok) throw new Error('Error fetching blog data')
            const data = await response.json()
            if (data.success && Array.isArray(data.data)) setBlogs(data.data)
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
        setLoading(true)
        setError(null)
        try {
            const response = await fetch('/api/blog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            if (!response.ok) throw new Error('Error add blog data')
            await getAllBlog()
        } catch (error: any) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

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

    useEffect(() => {
        getAllBlog()
    }, [])

    return <BlogContext.Provider
        value={{
            loading,
            error,
            blogs,
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