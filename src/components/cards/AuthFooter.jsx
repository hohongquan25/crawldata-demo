// material-ui
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useTranslation } from 'react-i18next';

// ==============================|| FOOTER - AUTHENTICATION ||============================== //

export default function AuthFooter() {
  const { t } = useTranslation();
  return (
    <Container maxWidth="xl">
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent={{ xs: 'center', sm: 'space-between' }}
        spacing={2}
        textAlign={{ xs: 'center', sm: 'inherit' }}
      >
        <Typography variant="subtitle2" color="secondary">
          {t('auth.policy.privacyPolicy')}{' '}
          <Typography
            component={Link}
            variant="subtitle2"
            href="#mantis-privacy"
            target="_blank"
            underline="hover"
          >
            MG Team
          </Typography>
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 3 }}
          textAlign={{ xs: 'center', sm: 'inherit' }}
        >
          <Typography
            variant="subtitle2"
            color="secondary"
            component={Link}
            href="https://codedthemes.com"
            target="_blank"
            underline="hover"
          >
            {t('auth.policy.termsOfConditions')}
          </Typography>
          <Typography
            variant="subtitle2"
            color="secondary"
            component={Link}
            href="https://codedthemes.com"
            target="_blank"
            underline="hover"
          >
            MG Team
          </Typography>
          <Typography
            variant="subtitle2"
            color="secondary"
            component={Link}
            href="https://codedthemes.com"
            target="_blank"
            underline="hover"
          >
            {t('auth.policy.privacyNotice')}
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
}
