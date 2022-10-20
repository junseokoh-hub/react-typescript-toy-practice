import React, { useState, useContext } from "react";

interface AppContext {
  isSidebarOpen: boolean;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  openSidebar: () => void;
  closeSidebar: () => void;
}

const AppContext = React.createContext<AppContext>({
  isSidebarOpen: false,
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
  openSidebar: () => {},
  closeSidebar: () => {},
});

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openModal,
        closeModal,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
