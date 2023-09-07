import React, { createContext, useReducer } from "react";
import { Reducer } from "./Reducer";
const initialState = {
  tokenData: [],
  isLoading: false,
  isError: false,
  pairData: [],
};
export const DataContext = createContext();
const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const value = { state, dispatch };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataContextProvider;
