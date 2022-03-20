import { createContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [menuActive, setMenuActive] = useState(false);

  const menuHandle = () => {
    setMenuActive(!menuActive);
  };

  return (
    <DataContext.Provider value={{ menuActive, menuHandle }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
