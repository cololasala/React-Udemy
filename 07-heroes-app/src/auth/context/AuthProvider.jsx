import { AuthContext } from './AuthContext';
import { useReducer } from 'react';
import { authReducer } from './AuthReducer';
import { types } from '../types/types';

const initialState = {
    logged: false,
}

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return {
    logged: !!user, // !! transforma a false, el null o undefined
    user
  }
}

export const AuthProvider = ({ children }) => { // el children son todos nuestros componenetes

  const [authState, dispatch] = useReducer(authReducer, initialState, init);

  const login = (name = '') => {
    const user = { id: 'ABC', name: name };
    const action = {
      type: types.login,
      payload: user
    };
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(action);
  }

  const logout = () => {
    localStorage.removeItem('user');
    const action = {
      type: types.logout,
    };
    dispatch(action);
  }


  return (
    <AuthContext.Provider value={{      // a nuestro context provider le voy a pasar el authState y la funcion login, es decir, esos dos podran ser usados en los componentes hijos
      ...authState,
      login: login,
      logout: logout
    }}>
        {children}
    </AuthContext.Provider>
  )
}
