"use client";
import React, { Dispatch, createContext, useReducer, useState } from "react";

export const Category_context = createContext({});
export const CategoryContextProvider = ({ children }) => {
  const [category_id, setCategory_id] = useState("");
  return (
    <Category_context.Provider value={{ category_id, setCategory_id }}>
      {children}
    </Category_context.Provider>
  );
};
