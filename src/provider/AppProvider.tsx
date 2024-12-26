"use client"

import { BlogProvider } from "@/context/blogContext"
import { FaqProvider } from "@/context/faqContext"
import { TestimoniProvider } from "@/context/testimoniContext"
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react"

interface AppProviderProps {
    children: ReactNode
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    return (
        <>
            <SessionProvider>
                <FaqProvider>
                    <TestimoniProvider>
                        <BlogProvider>
                            {children}
                        </BlogProvider>
                    </TestimoniProvider>
                </FaqProvider>
            </SessionProvider>
        </>
    )
}

export default AppProvider