import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();


// custom hook that errors if component is not inside of userProvider
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const updateCurrentUser = (newCustomerData) => {
    setCurrentUser(newCustomerData);
};

  return (
    <UserContext.Provider value={{ currentUser, updateCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
