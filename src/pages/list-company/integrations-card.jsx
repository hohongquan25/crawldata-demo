import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography
} from '@mui/material';
import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DownloadIcon from '@mui/icons-material/Download';
import dayjs from 'dayjs';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import moment from 'moment';
import { useAuth } from 'contexts/auth-reducer/AuthContext';
export default function IntegrationCard({ company }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { updateAuth } = useAuth();

  const handleSelectCompany = () => {
    navigate(`/dashboard`);
    updateAuth({ company: company });
    localStorage.setItem('company', JSON.stringify(company));
  };
  return (
    <Card
      onClick={handleSelectCompany}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <CardContent sx={{ flex: '1 1 auto', cursor: 'pointer' }}>
        <Stack spacing={2}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar
              src={
                'https://th.bing.com/th/id/R.6423d4202702a6bd8ec5797bd5bf089d?rik=yxFHcWg%2fugrk8w&pid=ImgRaw&r=0'
              }
              variant="square"
            />
          </Box>
          <Stack spacing={1}>
            <Typography align="center" variant="h5">
              {company?.name}
            </Typography>
            <Typography
              align="center"
              variant="body1"
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: '2',
                WebkitBoxOrient: 'vertical'
              }}
            >
              {company?.createdAt}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
      <Divider />
      <Stack
        direction="row"
        spacing={2}
        sx={{ alignItems: 'center', justifyContent: 'space-between', p: 2 }}
      >
        <Stack sx={{ alignItems: 'center' }} direction="row" spacing={1}>
          <AccessTimeIcon fontSize="var(--icon-fontSize-sm)" />
          <Typography color="text.secondary" display="inline" variant="body2">
            {t('listCompany.information.createAt')}
            {': '}
            {moment(company?.createdAt).format('DD/MM/yyyy')}
          </Typography>
        </Stack>
        <Stack sx={{ alignItems: 'center' }} direction="row" spacing={1}>
          <PermIdentityIcon fontSize="var(--icon-fontSize-sm)" />
          <Typography color="text.secondary" display="inline" variant="body2">
            25
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
