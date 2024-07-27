import { Link } from 'react-router-dom';

// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project import
import AuthWrapper from './AuthWrapper';
import AuthLogin from './auth-forms/AuthLogin';
import { useTranslation } from 'react-i18next';

// ================================|| LOGIN ||================================ //

export default function Login() {
  const { t } = useTranslation();
  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
            sx={{ mb: { xs: -0.5, sm: 0.5 } }}
          >
            <Typography variant="h3">{t('auth.loginForm.title')}</Typography>
            <Typography
              component={Link}
              to="/register"
              variant="body1"
              sx={{ textDecoration: 'none' }}
              color="primary"
            >
              {t('auth.loginForm.noAccount')}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <AuthLogin />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
}
