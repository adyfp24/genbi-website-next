import React, { createContext, ReactNode, useState } from "react";

const BlogContext = createContext<BlogContextType | undefined>(undefined);

interface BlogContextType {
    loading: boolean
    error: string | null
    blogs: 
}

interface BlogProviderProps {
    children: ReactNode
}

export const BlogProvider : React.FC<BlogProviderProps> = ({children}) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [blogs, setBlogs] = useState<Blog[]>([])
    const getAllBlog = () => {
        try {

        } catch (e) {

        }
    }

    const getBlogById = () => {
        try {

        } catch (e) {

        }
    }

    const createBlog = () => {
        try {

        } catch (e) {

        }
    }

    return <BlogContext.Provider
        value={{
            loading,
            error,
            blogs,
            getAllBlog,
            getBlogById,
            createBlog
        }}
    >
        {children}
    </BlogContext.Provider>
}