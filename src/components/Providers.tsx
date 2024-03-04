'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';

const SidebarContext = createContext<{
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}>({
  isOpen: false,
  setIsOpen: () => {},
});

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [queryClient] = useState(() => new QueryClient());

  const sidebarContextValue = useMemo(() => ({ isOpen, setIsOpen }), [isOpen]);

  return (
    <QueryClientProvider client={queryClient}>
      <SidebarContext.Provider value={sidebarContextValue}>
        {children}
      </SidebarContext.Provider>
    </QueryClientProvider>
  );
};

export default Providers;

export const useSidebar = () => useContext(SidebarContext);
