"use client";
import { createContext, useState, useEffect, useContext } from "react";

interface User {
  // Define the properties of your user object here
  id: string;
  name: string;
  email: string;
  // Add more fields as needed
}

interface AuthContextType {
  user: User | null;
  // login: (user: User) => void;
  login: (email: string, password: string) => boolean; // повертає true/false
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  // const login = (userData: User) => {
  //   setUser(userData);
  //   localStorage.setItem("user", JSON.stringify(userData));
  // };

  // Локальний логін: перевірка email/password
  const login = (email: string, password: string): boolean => {
    // Тут можна задати "заглушку" користувача
    const dummyUser = {
      id: "1",
      name: "Admin",
      email: "yroslavterno@gmail.com",
    };
    const dummyPassword = "1qaz@WSX";
    if (email === dummyUser.email && password === dummyPassword) {
      setUser(dummyUser);
      localStorage.setItem("user", JSON.stringify(dummyUser));
      return true; // успішний логін
    }
    return false; // неправильні дані
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
