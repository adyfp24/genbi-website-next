"use client"
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface FaqContextType {
    loading: boolean;
    error: string | null;
    faqs: FAQ[];
    faq: FAQ | null;
    getAllFaq: () => Promise<void>;
    getFaqById: (id: string) => Promise<void>;
    addFaq: (faq: Omit<FAQ, 'id'>) => Promise<void>;
    updateFaq: (id: string, updatedFaq: Omit<FAQ, 'id'>) => Promise<void>;
    deleteFaq: (id: string) => Promise<void>;
}

interface FaqProviderProps {
    children: ReactNode;
}

export const FaqContext = createContext<FaqContextType | undefined>(undefined);

export const FaqProvider: React.FC<FaqProviderProps> = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [faqs, setFaqs] = useState<FAQ[]>([]);
    const [faq, setFaq] = useState<FAQ | null>(null);

    const getAllFaq = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('/api/faq');
            if (!response.ok) throw new Error('Error fetching FAQ data');
            const data = await response.json();
            if (data.success && Array.isArray(data.data)) setFaqs(data.data)
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const getFaqById = async (id: string) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`/api/faq/${id}`);
            if (!response.ok) throw new Error('Error fetching FAQ by ID');
            const data = await response.json();
            setFaq(data.data);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const addFaq = async (faq: Omit<FAQ, 'id'>) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('/api/faq', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(faq),
            });
            if (!response.ok) throw new Error('Error adding FAQ');
            await getAllFaq(); // Refresh the list after adding
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const updateFaq = async (id: string, updatedFaq: Omit<FAQ, 'id'>) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`/api/faq/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedFaq),
            });
            if (!response.ok) throw new Error('Error updating FAQ');
            await getAllFaq();
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const deleteFaq = async (id: string) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`/api/faq/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) throw new Error('Error deleting FAQ');
            await getAllFaq();
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllFaq();
    }, []);

    return (
        <FaqContext.Provider
            value={{
                loading,
                error,
                faqs,
                faq,
                getAllFaq,
                getFaqById,
                addFaq,
                updateFaq,
                deleteFaq,
            }}
        >
            {children}
        </FaqContext.Provider>
    );
};

export const useFaq = () => {
    const context = useContext(FaqContext);
    if (context === undefined) {
        throw new Error('useFaq must be used within a FaqProvider');
    }
    return context;
};
