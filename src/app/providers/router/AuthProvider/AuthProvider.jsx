import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { checkLs } from "../../../../shared/lib/checkLs";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(checkLs());

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("userInfo");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Ошибка при загрузке данных из localStorage:", error);
    }
  }, []);

  const updateUserInfo = userData => {
    setUser(userData);
    userData
      ? localStorage.setItem("userInfo", JSON.stringify(userData))
      : localStorage.removeItem("userInfo");
  };

  const login = loginData => {
    updateUserInfo(loginData);
    return true;
  };

  const logout = () => {
    updateUserInfo(null);
    return true;
  };

  return (
    <AuthContext.Provider value={{ user, updateUserInfo, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
