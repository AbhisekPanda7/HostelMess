import React, { createContext, useContext, useState } from "react";

// Create a new context with default values
const MyContext = createContext({
  is_mobile_nav_open: false,
  update_mobile_nav_bool_function: () => {},
});

export default function MyProvider({ children }) {
  // Define the initial state and a function to update it
  const [is_mobile_nav_open, setMobileNavOpen] = useState(false);

  const updateMobileNavBoolFunction = (mobile_nav_bool) => {
    setMobileNavOpen(mobile_nav_bool);
  };

  const contextValue = {
    is_mobile_nav_open,
    update_mobile_nav_bool_function: updateMobileNavBoolFunction,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
}

// Export the context to use it in other parts of your application
export { MyContext };