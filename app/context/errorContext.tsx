import React, { createContext, useContext, useState, ReactNode } from "react";
import Modal from "~/components/modal";
import { ErrorContextType } from "~/types/types";

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export const ErrorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [error, setError] = useState<string | null>(null);

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      {children}
      {error && (
        <Modal
          isOpen={error != null}
          onClose={() => setError(null)}
          type="error"
        >
          <p>{error}</p>
        </Modal>
      )}
    </ErrorContext.Provider>
  );
};

export const useError = (): ErrorContextType => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error("useError, ErrorProvider içinde kullanılmalıdır");
  }
  return context;
};
