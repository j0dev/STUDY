import React, { createContext, useReducer, useContext } from "react";
import * as api from "./api";
import createAsyncDispatcher, {
  initialAsynState,
  createAsyncHandler
} from "./asyncActionUtils";

const initalState = {
  users: initialAsynState,
  user: initialAsynState
};

const usersHandler = createAsyncHandler("GET_USERS", "users");
const userHandler = createAsyncHandler("GET_USER", "user");
function usersReducer(state, action) {
  switch (action.type) {
    case "GET_USERS":
    case "GET_USERS_SUCCESS":
    case "GET_USERS_ERROR":
      return usersHandler(state, action);

    case "GET_USER":
    case "GET_USER_SUCCESS":
    case "GET_USER_ERROR":
      return userHandler(state, action);

    default:
      throw new Error(`UnHandled action type ${action.type}`);
  }
}

const UsersStateContext = createContext(null);
const USersDispatchContext = createContext(null);

export function UsersProvider({ children }) {
  const [state, dispatch] = useReducer(usersReducer, initalState);
  return (
    <UsersStateContext.Provider value={state}>
      <USersDispatchContext.Provider value={dispatch}>
        {children}
      </USersDispatchContext.Provider>
    </UsersStateContext.Provider>
  );
}

export function useUsersState() {
  const state = useContext(UsersStateContext);
  if (!state) {
    throw new Error("Cannot find UserProvider");
  }
  return state;
}

export function useUsersDispatch() {
  const dispatch = useContext(USersDispatchContext);
  if (!dispatch) {
    throw new Error("Cannot find UserProvider");
  }
  return dispatch;
}

export const getUsers = createAsyncDispatcher("GET_USERS", api.getUsers);
export const getUser = createAsyncDispatcher("GET_USER", api.getUser);
