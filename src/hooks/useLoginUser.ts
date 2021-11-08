import { useContext } from "react";

import {
  LoginUserContenxt,
  LoginUserContextType
} from "../providers/LoginUserProvider";

export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContenxt);
