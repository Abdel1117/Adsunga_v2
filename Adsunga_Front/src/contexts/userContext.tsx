import { useState, useEffect, ReactNode, useCallback } from "react";
import { createContext, useContext } from "react";
import { UserType } from "../types/UserType.ts";

import { checkToken, setToken } from "../Hooks/checkToken";
import { refreshToken } from "../Hooks/refreshToken";
import { useNavigate } from "react-router";

/*  */

type UserContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  userAuth: UserType | null;
  setUserAuth: (user: UserType | null) => void;
  authError: string | null;
  isLoading: boolean;
  logout: () => void;
  checkUserAuth: () => Promise<void>;
};
/*  */

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userAuth, setUserAuth] = useState<UserType | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const logout = useCallback(() => {
    setUserAuth(null);
    setToken("");
    setIsLoggedIn(false);
    sessionStorage.removeItem("token");
    navigate("/");
  }, [navigate, setUserAuth]);

  const checkUserAuth = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await checkToken();
      if (response.ok) {
        const data = await response.json();
        setUserAuth(data);
        setIsLoggedIn(true);
      } else {
        if (response.status === 401) {
          const refreshResponse = await refreshToken();
          if (refreshResponse.ok) {
            const newData = await refreshResponse.json();
            setUserAuth(newData);
            setToken(newData.token);
            setIsLoggedIn(true);
          } else {
            logout();
          }
        } else {
          setUserAuth(null);
          setAuthError("Erreur lors de la vérification du token");
        }
      }
    } catch (error) {
      console.error("Erreur lors de la vérification du token :", error);
      setAuthError("Erreur de vérification du token");
    } finally {
      setIsLoading(false);
    }
  }, [setUserAuth, logout]);

  useEffect(() => {
    checkUserAuth();
  }, [checkUserAuth]);
  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        userAuth,
        setUserAuth,
        authError,
        isLoading,
        logout,
        checkUserAuth,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
