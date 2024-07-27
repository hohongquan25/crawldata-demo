import PropTypes from 'prop-types';

// material-ui
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

// project import
import AuthFooter from 'components/cards/AuthFooter';
import Logo from 'components/logo';
import AuthCard from './AuthCard';

// assets
import AuthBackground from 'assets/images/auth/AuthBackground';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ToggleButton, ToggleButtonGroup, Tooltip } from '@mui/material';

// ==============================|| AUTHENTICATION - WRAPPER ||============================== //

export default function AuthWrapper({ children }) {
  const { i18n, t } = useTranslation();
  const savedLanguage = localStorage.getItem('i18nextLng');

  const [alignment, setAlignment] = React.useState(savedLanguage || 'en');

  const handleChangeLanguage = (event, newAlignment) => {
    i18n.changeLanguage(newAlignment);
    setAlignment(newAlignment);
  };

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <AuthBackground />
      <Grid
        container
        direction="column"
        justifyContent="flex-end"
        sx={{ minHeight: '100vh' }}
      >
        <Grid item xs={12} sx={{ mx: 3, mt: 3 }}>
          <Grid container>
            <Grid item xs={6}>
              <Logo />
            </Grid>
            <Grid item xs={6} display={'flex'} justifyContent={'flex-end'}>
              <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChangeLanguage}
                aria-label="locales"
                size="small"
              >
                <Tooltip title="English">
                  <ToggleButton value="en">EN</ToggleButton>
                </Tooltip>
                <Tooltip title="Vietnamese">
                  <ToggleButton value="vi">VI</ToggleButton>
                </Tooltip>
              </ToggleButtonGroup>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            item
            xs={12}
            container
            justifyContent="center"
            alignItems="center"
            sx={{
              minHeight: {
                xs: 'calc(100vh - 210px)',
                sm: 'calc(100vh - 134px)',
                md: 'calc(100vh - 112px)'
              }
            }}
          >
            <Grid item>
              <AuthCard>{children}</AuthCard>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
          <AuthFooter />
        </Grid>
      </Grid>
    </Box>
  );
}

AuthWrapper.propTypes = { children: PropTypes.node };
