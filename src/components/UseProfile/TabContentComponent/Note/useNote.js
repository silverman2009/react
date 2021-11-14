import { useContext, useMemo } from "react";
import { writeComponent } from "./../../../context/WriteComponentContext";

export const useNote = () => {
  const { isClick, setIsClick } = useContext(writeComponent);
  const clickCrateNewNote = () => {
    setIsClick(!isClick);
  };
  return { isClick, setIsClick, clickCrateNewNote };
};
