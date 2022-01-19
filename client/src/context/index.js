import React, { useState, createContext } from 'react';

export const LoginContext = createContext();

export const LoginProvider = (props) => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <LoginContext.Provider value={[showLogin, setShowLogin]}>
      {props.children}
    </LoginContext.Provider>
  );
};
