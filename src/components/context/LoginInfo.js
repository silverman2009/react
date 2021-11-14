import { createContext } from "react";
import createPersistedState from "use-persisted-state";

const useCounterState = createPersistedState("loginInfo");

export const loginInfoContext = createContext();
export const LoginInfoProvider = ({ children }) => {
  const [loginInfo, setLoginInfo] = useCounterState({});
  return (
    <loginInfoContext.Provider value={{ loginInfo, setLoginInfo }}>
      {children}
    </loginInfoContext.Provider>
  );
};
