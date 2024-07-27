import { useAuth } from 'contexts/auth-reducer/AuthContext';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const CompanyRouteProtected = ({ element, ...rest }) => {
  const {
    auth: { token }
  } = useAuth();
  console.log('🚀 ~ CompanyRouteProtected ~ token:', token);

  // Nếu không có token, chuyển hướng đến trang đăng nhập
  if (!token) {
    return <Navigate to="/login" />;
  }

  return element;
};

export default CompanyRouteProtected;
