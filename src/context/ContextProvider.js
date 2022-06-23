import React, { useReducer } from 'react'
import { GlobalContext } from './GlobalContext';
import AppReducer from './AppReducer';

const initialState = {
  tasks: [
      {
          id: "1",
          title: "title one",
          description: "some description",
          done: false
      },
      {
          id: "2",
          title: "title two",
          description: "some description 2",
          done: false
      },
  ],
}


export const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(AppReducer, initialState)

  const addTask = (task) => {
    console.log(task);
  }

  return (
    <GlobalContext.Provider value={{
      ...initialState,

      // Methods:
      addTask
    }}>
      { children }
    </GlobalContext.Provider>
  )
}
