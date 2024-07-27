import {
  Button,
  Card,
  InputAdornment,
  OutlinedInput,
  Box,
  useMediaQuery,
  useTheme
} from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useTranslation } from 'react-i18next';
import { PlusOutlined } from '@ant-design/icons';
import ModalAddCompany from './add-company/modal-add-company';

export default function CompaniesFilters() {
  const { t } = useTranslation();
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = React.useState(false);

  return (
    <Card sx={{ p: 2, zIndex: -1 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <OutlinedInput
          defaultValue=""
          fullWidth
          placeholder={t('search')}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon fontSize="var(--icon-fontSize-md)" />
            </InputAdornment>
          }
          sx={{ maxWidth: '500px', mr: 2 }}
        />
        <Button
          startIcon={<PlusOutlined fontSize="var(--icon-fontSize-md)" />}
          variant="contained"
          onClick={() => setOpen(true)}
        >
          {matchesXs ? 'Add' : t('listCompany.addCompany')}
        </Button>
      </Box>
      <ModalAddCompany open={open} setOpen={setOpen} />
    </Card>
  );
}
