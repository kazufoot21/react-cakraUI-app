import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from "react";
import { User } from "../types/api/user";

type LoginUser = User & { isAdmin: boolean };

export type LoginUserContextType = {
  loginuser: (User & { isAdmin: boolean }) | null;
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
};

export const LoginUserContenxt = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginuser, setLoginUser] = useState<LoginUser | null>(null);
  return (
    <LoginUserContenxt.Provider value={{ loginuser, setLoginUser }}>
      {children}
    </LoginUserContenxt.Provider>
  );
};
