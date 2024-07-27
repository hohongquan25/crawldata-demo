import { useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import * as Yup from 'yup';
import { useFormik } from 'formik';

// project import
import AnimateButton from 'components/@extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import MyInput from 'components/input';
import { toast } from 'react-toastify';
import { registerUser, sendMailRegister } from 'api/authApi';
import { useTranslation } from 'react-i18next';

// ============================|| JWT - REGISTER ||============================ //

export default function AuthRegister() {
  const { t } = useTranslation();

  const nav = useNavigate();

  const objLabel = {
    poor: t('auth.registerForm.strengthPassword.poor'),
    weak: t('auth.registerForm.strengthPassword.weak'),
    normal: t('auth.registerForm.strengthPassword.normal'),
    good: t('auth.registerForm.strengthPassword.good'),
    strong: t('auth.registerForm.strengthPassword.strong')
  };

  const [sentCode, setSentCode] = useState(false);
  const [reSendCount, setReSendCount] = useState(5);

  useEffect(() => {
    if (reSendCount > 0 && sentCode) {
      const timerId = setInterval(() => {
        setReSendCount((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [reSendCount, sentCode]);

  const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required(t('validation.authForm.fullNameRequired')),
    email: Yup.string()
      .email(t('validation.authForm.emailValid'))
      .required(t('validation.authForm.emailRequired')),
    phone: Yup.string()
      .matches(/^\d+$/, t('validation.authForm.phoneRegexNum'))
      .matches(phoneRegExp, t('validation.authForm.phoneRegex'))
      .required(t('validation.authForm.phoneRequired')),
    password: Yup.string().required(t('validation.authForm.passwordRequired')),
    confirmPassword: Yup.string().required(
      t('validation.authForm.confirmPasswordRequired')
    ),
    ...(sentCode && {
      code: Yup.string().required(t('validation.authForm.code'))
    })
  });

  const handleSendMail = async (email) => {
    try {
      await sendMailRegister({
        email: email
      });
      setSentCode(true);
      setReSendCount(60);
      toast.success('Vui lòng nhập OTP gửi về mail');
    } catch (error) {
      console.log('🚀 ~ handleSendMail ~ error:', error);
      toast.error('Có lỗi xảy ra khi gửi OTP');
    }
  };

  const formik = useFormik({
    // enableReinitialize: true,
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      code: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (data) => {
      if (data.password !== data.confirmPassword) {
        toast.error('Mật khẩu phải trùng nhau.');
        return;
      }

      try {
        if (sentCode) {
          const res = await registerUser({
            fullName: data.fullName,
            email: data.email,
            phone: data.phone,
            password: data.password,
            confirmPassword: data.confirmPassword,
            code: data.code
          });
          toast.success('Đăng ký tài khoản thành công');
          setSentCode(false);
          nav('/login');
          return;
        }

        await handleSendMail(data.email);
      } catch (error) {
        console.log('🚀 ~ onSubmit: ~ error:', error);
        toast.error('Có lỗi xảy ra khi đăng ký tài khoản.');
      }
    }
  });

  const [level, setLevel] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const changePassword = (value) => {
    const temp = strengthIndicator(value);

    setLevel(strengthColor(temp, objLabel));
  };

  useEffect(() => {
    changePassword(formik.values.password);
  }, [formik.values.password, localStorage.getItem('i18nextLng')]);

  return (
    <>
      <form noValidate onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <MyInput
              label={t('auth.registerForm.fullName')}
              formik={formik}
              name={'fullName'}
              type="text"
              placeholder={t('auth.registerForm.fullNamePlaceholder')}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <MyInput
              label={t('auth.registerForm.phone')}
              formik={formik}
              name={'phone'}
              type="text"
              placeholder={t('auth.registerForm.phonePlaceholder')}
            />
          </Grid>
          <Grid item xs={12}>
            <MyInput
              label={t('auth.registerForm.email')}
              formik={formik}
              name={'email'}
              type="text"
              placeholder={t('auth.registerForm.emailPlaceholder')}
            />
          </Grid>
          <Grid item xs={12}>
            <MyInput
              label={t('auth.registerForm.password')}
              formik={formik}
              name={'password'}
              type="text"
              ispassword={true}
              placeholder={t('auth.registerForm.passwordPlaceholder')}
            />
          </Grid>
          <Grid item xs={12}>
            <MyInput
              label={t('auth.registerForm.confirmPassword')}
              formik={formik}
              name={'confirmPassword'}
              type="text"
              ispassword={true}
              placeholder={t('auth.registerForm.confirmPasswordPlaceholder')}
            />{' '}
            <FormControl fullWidth sx={{ mt: 2 }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <Box
                    sx={{
                      bgcolor: level?.color,
                      width: 85,
                      height: 8,
                      borderRadius: '7px'
                    }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" fontSize="0.75rem">
                    {level?.label}
                  </Typography>
                </Grid>
              </Grid>
            </FormControl>
          </Grid>
          {sentCode && (
            <Grid item xs={12}>
              <MyInput
                label={
                  <Box display={'flex'}>
                    {' '}
                    {t('auth.registerForm.otp')}{' '}
                    <Typography sx={{ mx: 1 }}>-</Typography>
                    {reSendCount === 0 ? (
                      <span
                        className="hover:underline hover:cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          handleSendMail(formik.values.email);
                        }}
                      >
                        {' '}
                        {t('auth.registerForm.resendOTP')}
                      </span>
                    ) : (
                      <span>{reSendCount}</span>
                    )}
                  </Box>
                }
                formik={formik}
                name={'code'}
                type="text"
                placeholder={'Enter OTP'}
              />
            </Grid>
          )}
          <Grid item xs={12}>
            <Typography variant="body2">
              {t('auth.registerForm.confirmTitle')} &nbsp;
              <Link variant="subtitle2" component={RouterLink} to="#">
                {t('auth.registerForm.termOfService')}
              </Link>
              &nbsp; & &nbsp;
              <Link variant="subtitle2" component={RouterLink} to="#">
                MG Team
              </Link>
            </Typography>
          </Grid>
          {formik.errors.submit && (
            <Grid item xs={12}>
              <FormHelperText error>{formik.errors.submit}</FormHelperText>
            </Grid>
          )}
          <Grid item xs={12}>
            <AnimateButton>
              <Button
                disableElevation
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                color="primary"
              >
                {t('auth.registerForm.createAccount')}
              </Button>
            </AnimateButton>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
