import React, { useReducer, useMemo, createContext } from 'react';
// import Hello from "./Hello";
// import Wrapper from './Wrapper';
import UserList from './UserList';
import CreateUser from './CreateUser';
import Produce from 'immer';


function countActiveUsers(users) {
  console.log('active userr counting...');
  return users.filter(user => user.active).length;
}


const initialState = {
  
  users: [{
      id: 1,
      username: "j0dev",
      email: "asdf@asdf.com",
      active: true
    },
      {
    id: 2,
      username: "intadd",
        email: "qwer@asdf.com",
          active: false
  },
  {
    id: 3,
      username: "test",
        email: "zxcv@asdf.com",
          active: false
  }]
}


function reducer(state, action){
  
  switch (action.type) {
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      }
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user => 
          user.id === action.id
          ? {...user, active: !user.active}
          : user
          )
      }

    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user =>user.id !== action.id)
      }
    default:
      throw new Error('Unhandled action');
    
  }
}

export const UserDispatch = createContext(null);

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  const { users } = state;

  const count = useMemo(() => countActiveUsers(users), [users])

  
  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser 
      /> 
      <UserList users = {users}/>
      <div>활성 사ㅏ용자 수: {count}</div>

    </UserDispatch.Provider>
  );
}

export default App;
