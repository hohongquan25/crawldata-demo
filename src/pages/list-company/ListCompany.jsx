import {
  Box,
  Button,
  Container,
  CssBaseline,
  Pagination,
  Typography
} from '@mui/material';
import Stack from '@mui/material/Stack';
import React, { useState } from 'react';
import CompaniesFilters from './integrations-filters';
import IntegrationCard from './integrations-card';
import Grid from '@mui/material/Unstable_Grid2';
import Profile from 'layout/Dashboard/Header/HeaderContent/Profile';
import { useTranslation } from 'react-i18next';
import { useGetCompanies } from 'api/companyApi';

import { UserModel } from 'model/user';
import { selectorRedux } from 'utils/selectorRedux';
import Loader from 'components/Loader';
import { useAuth } from 'contexts/auth-reducer/AuthContext';
import { getDetailProduct } from 'api/crawlData';

export default function ListCompany() {
  const { t } = useTranslation();
  const {
    auth: { user }
  } = useAuth();
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  let initParams = {
    hasTarget: true,
    userId: user.id,
    page: page,
    limit: 3
  };

  const { companies, companiesLoading, companiesError, totalDocs, totalPages } =
    useGetCompanies(JSON.parse(localStorage.getItem('token')), initParams);

  return (
    <React.Fragment>
      {companiesLoading && <Loader />}
      <CssBaseline />
      <Container fixed>
        <Stack spacing={3}>
          <Grid
            spacing={3}
            sx={{
              px: 2,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Stack direction="row" spacing={3}>
              <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
                <Typography variant="h4">
                  {t('listCompany.workingSpace')}
                </Typography>
              </Stack>
            </Stack>
            <Profile />
          </Grid>
          <Box sx={{ px: '12px' }}>
            <CompaniesFilters />
          </Box>

          <Grid container spacing={3}>
            {(companies || []).map((com) => (
              <Grid key={com.id} lg={4} md={6} xs={12}>
                <IntegrationCard company={com.target} />
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: -3,
              position: 'relative',
              transform: 'translateY(-20px)'
            }}
          >
            <Pagination
              page={page}
              onChange={handleChange}
              count={totalPages}
              size="small"
            />
          </Box>
        </Stack>
      </Container>
    </React.Fragment>
  );
}
