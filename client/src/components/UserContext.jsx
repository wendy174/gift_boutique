// import React, { createContext, useContext, useState } from 'react';

// const CustomerContext = createContext();

// export const useCustomer = () => {
//   return useContext(CustomerContext);
// };

// export function CustomerProvider({ children }) {

//   const [currentCustomer, setCurrentCustomer] = useState(null);

//   const value = {
//     currentCustomer,
//     setCurrentCustomer
//   };

//   return (
//     <CustomerContext.Provider value={value}>
//       {children}
//     </CustomerContext.Provider>
//   );
// }

import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

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
    console.log(currentUser)
  };

  return (
    <UserContext.Provider value={{ currentUser, updateCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
