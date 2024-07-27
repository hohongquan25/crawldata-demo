import { Grid, Link, Typography } from '@mui/material';
import React from 'react';
import { AccountInfo } from './account-info';
import { AccountDetailsForm } from './account-details-form';
import ComponentSkeleton from 'pages/component-overview/ComponentSkeleton';
import MainCard from 'components/MainCard';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import { useTranslation } from 'react-i18next';
function AccountPage() {
  const { t } = useTranslation();

  return (
    <ComponentSkeleton
    // isLoading={hasData} // Skeleton
    >
      <p>
        <MainCard
          border={false}
          sx={{ mb: 3, bgcolor: 'transparent' }}
          content={false}
        >
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={1}
          >
            <Grid item>
              <MuiBreadcrumbs aria-label="breadcrumb">
                <Typography
                  component={Link}
                  to="/dashboard"
                  color="textSecondary"
                  variant="h6"
                  sx={{
                    textDecoration: 'none',
                    ':hover': { textDecoration: 'none', cursor: 'pointer' }
                  }}
                >
                  {t('home.title')}
                </Typography>

                <Typography variant="subtitle1" color="textPrimary">
                  Tài khoản
                </Typography>
              </MuiBreadcrumbs>
            </Grid>
            <Grid item sx={{ mt: 2 }}>
              <Typography variant="h5">Tài khoản</Typography>
            </Grid>
          </Grid>
        </MainCard>
        {/* {postsLoading && <Loader />} */}
        <Grid container spacing={3}>
          <Grid lg={4} md={6} xs={12}>
            <AccountInfo />
          </Grid>
          <Grid lg={8} md={6} xs={12}>
            <AccountDetailsForm />
          </Grid>
        </Grid>
      </p>
    </ComponentSkeleton>
  );
}

export default AccountPage;
