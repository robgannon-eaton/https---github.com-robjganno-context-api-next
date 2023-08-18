"use client";
import React, { createContext, useReducer, useMemo } from 'react';
import { globalAppStoreReducer } from './GlobalAppStoreReducer';

const initialState = {
  myStore: {
    bestCheese: 'none',
    worstCheese: 'none',
  },
  globalVariable: "test string"
};

export const GlobalAppStoreContext = createContext(initialState);

export const GlobalAppStoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalAppStoreReducer, initialState);

  const allGlobalAppStore = useMemo(
    () => ({
      ...state,
      dispatch,
    }),
    [state]
  );

  return <GlobalAppStoreContext.Provider value={allGlobalAppStore}>{children}</GlobalAppStoreContext.Provider>;
};
