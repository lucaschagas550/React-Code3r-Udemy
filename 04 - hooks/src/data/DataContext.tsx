// DataContext.tsx
import React, { createContext, useState } from 'react';

export type DataContextType = {
    number: number;
    text: string;
    setState: React.Dispatch<React.SetStateAction<DataContextType>>;
};

export const data: Omit<DataContextType, 'setState'> = {
    number: 123,
    text: 'Context API...'
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, setState] = useState<DataContextType>({ ...data, setState: () => {} });

    return (
        <DataContext.Provider value={{ ...state, setState }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;