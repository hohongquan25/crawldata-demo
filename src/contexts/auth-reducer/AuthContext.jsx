import React, { createContext, useContext, useState } from 'react';

import { UserModel } from 'model/user';
import { CompanyModel } from 'model/company';
import { useNavigate } from 'react-router';
const initialAuth = {
  token: '',
  user: new UserModel(),
  company: new CompanyModel()
};
export const AuthContext = createContext({
  auth: initialAuth,
  updateAuth: () => {},
  onLogout: () => {},
  onLogin: (token, user, code, navigate) => {}
});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialAuth);

  const updateAuth = (updatedSetting) => {
    const newState = {
      ...auth,
      ...updatedSetting
    };
    setAuth(newState);
  };

  const onLogout = (navigate) => {
    setAuth(initialAuth);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('company');
    navigate('/login');
  };

  const onLogin = (token, user, code, navigate) => {
    updateAuth({ token, user });
    if (code === 200) {
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', JSON.stringify(token));
      navigate('/');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        updateAuth,
        auth,
        onLogout,
        onLogin
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;

export function useAuth() {
  return useContext(AuthContext);
}
