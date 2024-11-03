import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface Testimoni {
  id: string;
  name: string;
  message: string;
}

interface TestimoniContextType {
  testimonies: Testimoni[];
  testimoni: Testimoni | null;
  loading: boolean;
  error: string | null;
  getAllTestimoni: () => void;
  getTestimoniById: (id: string) => void;
  addTestimoni: (data: Omit<Testimoni, 'id'>) => void;
  deleteTestimoni: (id: string) => void;
  updateTestimoni: (id: string, data: Partial<Testimoni>) => void;
}

export const TestimoniContext = createContext<TestimoniContextType | undefined>(undefined);

interface TestimoniProviderProps {
  children: ReactNode;
}

export const TestimoniProvider: React.FC<TestimoniProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [testimonies, setTestimonies] = useState<Testimoni[]>([]);
  const [testimoni, setTestimoni] = useState<Testimoni | null>(null);

  const getAllTestimoni = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/testimoni');
      if (!response.ok) throw new Error('Failed to fetch testimonies');
      const data = await response.json();
      setTestimonies(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getTestimoniById = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/testimoni/${id}`);
      if (!response.ok) throw new Error('Failed to fetch testimoni');
      const data = await response.json();
      setTestimoni(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addTestimoni = async (data: Omit<Testimoni, 'id'>) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/testimoni', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to add testimoni');
      await getAllTestimoni(); // Refresh testimonies after adding
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteTestimoni = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/testimoni/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Failed to delete testimoni');
      await getAllTestimoni(); // Refresh testimonies after deletion
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateTestimoni = async (id: string, data: Partial<Testimoni>) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/testimoni/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to update testimoni');
      await getAllTestimoni(); // Refresh testimonies after updating
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllTestimoni();
  }, []);

  return (
    <TestimoniContext.Provider
      value={{
        testimonies,
        testimoni,
        loading,
        error,
        getAllTestimoni,
        getTestimoniById,
        addTestimoni,
        deleteTestimoni,
        updateTestimoni,
      }}
    >
      {children}
    </TestimoniContext.Provider>
  );
};

export const useTestimoni = () => {
  const context = useContext(TestimoniContext);
  if (context === undefined) {
    throw new Error('useTestimoni must be used within a TestimoniProvider');
  }
  return context;
};
