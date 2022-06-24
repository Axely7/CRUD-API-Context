import React, { useReducer } from 'react'
import { GlobalContext } from './GlobalContext';
import AppReducer from './AppReducer';
import { v4 } from "uuid";

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
    // console.log(task);
    dispatch({ type: 'ADD_TASK', payload: { ...task, id: v4() }});
  }

  const deleteTask = (id) => {
    dispatch({ type: 'DELETE_TASK', payload: id })
  }

  return (
    <GlobalContext.Provider value={{
      ...state,

      // Methods:
      addTask,
      deleteTask
    }}>
      { children }
    </GlobalContext.Provider>
  )
}
