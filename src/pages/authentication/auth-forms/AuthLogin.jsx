import PropTypes from 'prop-types';
import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

// material-ui
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// third party
import * as Yup from 'yup';
import { useFormik } from 'formik';

// project import
import AnimateButton from 'components/@extended/AnimateButton';

// assets
import FirebaseSocial from './FirebaseSocial';
import MyInput from 'components/input';
import { useDispatch } from 'react-redux';
import { loginUser } from 'api/authApi';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useAuth } from 'contexts/auth-reducer/AuthContext';

// ============================|| JWT - LOGIN ||============================ //

export default function AuthLogin({ isDemo = false }) {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { updateAuth, onLogin } = useAuth();
  const [checked, setChecked] = React.useState(false);
  const user = useSelector((state) => state.auth.login?.currentUser);
  const { t } = useTranslation();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(t('validation.authForm.emailValid'))
      .max(255)
      .required(t('validation.authForm.emailRequired')),
    password: Yup.string()
      .max(255)
      .required(t('validation.authForm.passwordRequired'))
  });

  const formik = useFormik({
    // enableReinitialize: true,
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (data) => {
      const res = await loginUser(data, dispatch, nav);
      onLogin(res?.token, res?.data, res?.code, nav);
    }
  });

  return (
    <>
      <form noValidate onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <MyInput
              label={t('auth.loginForm.email')}
              formik={formik}
              name={'email'}
              type="text"
              placeholder={t('auth.loginForm.emailPlaceholder')}
            />
          </Grid>
          <Grid item xs={12}>
            <MyInput
              label={t('auth.loginForm.password')}
              formik={formik}
              name={'password'}
              placeholder={t('auth.loginForm.passwordPlaceholder')}
              ispassword={true}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: -1 }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={(event) => setChecked(event.target.checked)}
                    name="checked"
                    color="primary"
                    size="small"
                  />
                }
                label={
                  <Typography variant="h6">
                    {t('auth.loginForm.keepMeSignIn')}
                  </Typography>
                }
              />
              <Link variant="h6" component={RouterLink} color="text.primary">
                {t('auth.loginForm.forgotPassword')}
              </Link>
            </Stack>
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
                {t('auth.loginForm.submitTitle')}
              </Button>
            </AnimateButton>
          </Grid>
          <Grid item xs={12}>
            <Divider>
              <Typography variant="caption">
                {t('auth.loginForm.loginWith')}
              </Typography>
            </Divider>
          </Grid>
          <Grid item xs={12}>
            <FirebaseSocial />
          </Grid>
        </Grid>
      </form>
    </>
  );
}

AuthLogin.propTypes = { isDemo: PropTypes.bool };
