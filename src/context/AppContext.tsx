import { ReactNode, createContext, useMemo, useState } from "react";
import { IUserDetails, TUserDetail } from "../interfaces";

export const AppContext = createContext({});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [userDetails, setUserDetails] = useState<TUserDetail>({
    phone: "",
    isLoggedIn: true,
  });

  const values = useMemo(() => {
    return {
      userDetails,
      setUserDetails,
    };
  }, [userDetails]);

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
