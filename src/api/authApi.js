import { AuthApiConfig } from 'api/config/api.config';
import axiosInstance from 'api/config/axiosConfig';
import { loginFailed, loginStart, loginSuccess } from 'features/auth/authSlice';
import { toast } from 'react-toastify';

export const loginUser = async (data, dispatch, navigate) => {
  dispatch(loginStart());

  try {
    const response = await axiosInstance.post(AuthApiConfig.LOGIN, data);
    if (response?.data?.code === 200) {
      toast.success('Đăng nhập thành công');
      dispatch(loginSuccess(response.data));
    } else {
      dispatch(loginFailed());
      toast.error(response?.data?.message);
    }
    return response.data;
  } catch (error) {
    console.log('🚀 ~ useAuthLogin ~ error:', error);
    dispatch(loginFailed());
    toast.error('Có lỗi xảy ra khi đăng nhập');
  }
};

export const registerUser = async (data) => {
  const response = await axiosInstance.post(AuthApiConfig.REGISTER, data);
  return response.data;
};

export const sendMailRegister = async (data) => {
  const response = await axiosInstance.post(ApiConfig.SEND_MAIL, data);
  return response.data;
};
