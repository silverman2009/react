import { createContext } from "react";
import createPersistedState from "use-persisted-state";

const useCounterState = createPersistedState("tokenVerifyCode");

export const tokenVerifyCode = createContext();
export const TokenVerifyCodeLogin = ({ children }) => {
  const [tokenVeriFy, setTokenVerify] = useCounterState("");
  return (
    <tokenVerifyCode.Provider value={{ tokenVeriFy, setTokenVerify }}>
      {children}
    </tokenVerifyCode.Provider>
  );
};
