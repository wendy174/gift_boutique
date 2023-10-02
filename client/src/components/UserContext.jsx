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
  // have to separate firebase and database user info or login won't work 
  const [currentUser, setCurrentUser] = useState(null); // firebase user info 
  const [currentUserDb, setCurrentUserDb] = useState(null) // database user info 

  const updateCurrentUser = (firebaseUserInfo, dataBaseUserInfo) => {
    setCurrentUser(firebaseUserInfo);
    setCurrentUserDb(dataBaseUserInfo); 
};

  return (
    <UserContext.Provider value={{ currentUser, currentUserDb, updateCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
