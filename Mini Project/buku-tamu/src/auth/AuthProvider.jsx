import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const register = (userData, token) => {
    const user = JSON.stringify(userData);

    localStorage.setItem("user", user);
    localStorage.setItem("token", token);
    setUser(userData);
  };

  const login = (userData, token) => {
    const user = JSON.stringify(userData);

    localStorage.setItem("user", user);
    localStorage.setItem("token", token);
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
