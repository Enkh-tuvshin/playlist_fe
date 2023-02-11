import { createContext, useState, useContext } from "react";
import { Login } from "../component/Login";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {user && children}

      {!user && <Login />}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
