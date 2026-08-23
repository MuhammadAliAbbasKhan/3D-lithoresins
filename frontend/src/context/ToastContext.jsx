import React, { createContext, useContext, useState, useCallback } from 'react';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'info') => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 4500);
  }, []);

  const handleDjangoMessages = useCallback((messageList) => {
    if (!messageList || !Array.isArray(messageList)) return;
    messageList.forEach(item => {
      addToast(item.message, item.level || 'info');
    });
  }, [addToast]);

  return (
    <ToastContext.Provider value={{ toasts, addToast, handleDjangoMessages }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
