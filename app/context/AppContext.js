"use client"; // Required for context to work in Next.js with App Router

import { createContext, useContext, useState } from 'react';

// Create the context
const AppContext = createContext();

// Create the provider
export function AppProvider({ children }) {
  const [shareClick, setShareClick] = useState(false);

  return (
    <AppContext.Provider value={{ shareClick, setShareClick }}>
      {children}
    </AppContext.Provider>
  );
}

// Custom hook for easier usage
export function useAppContext() {
  return useContext(AppContext);
}
