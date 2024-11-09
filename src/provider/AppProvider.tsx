import { BlogProvider } from "@/context/blogContext"
import { FaqProvider } from "@/context/faqContext"
import { TestimoniProvider } from "@/context/testimoniContext"
import React, { ReactNode } from "react"

interface AppProviderProps {
    children: ReactNode
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    return (
        <>
            <FaqProvider>
                <TestimoniProvider>
                    <BlogProvider>
                        {children}
                    </BlogProvider>
                </TestimoniProvider>
            </FaqProvider>
        </>
    )
}

export default AppProvider