import * as React from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import { CssVarsProvider, extendTheme } from '@mui/joy';
import SvgIcon from '@mui/joy/SvgIcon';
import { styled } from '@mui/joy';
import { useTranslation } from 'react-i18next';

const customTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        background: {
          backdrop: 'rgba(0, 0, 0, 0.5)' // Customize as needed
        }
      },
      zIndex: {
        modal: 1300 // Default value; customize as needed
      }
    },
    dark: {
      palette: {
        background: {
          backdrop: 'rgba(0, 0, 0, 0.5)' // Customize as needed
        }
      },
      zIndex: {
        modal: 1300 // Default value; customize as needed
      }
    }
  }
});

const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;
export default function ModalAddCompany({ open, setOpen }) {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <CssVarsProvider theme={customTheme}>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalDialog
            sx={{
              minWidth: '500px', // Set your desired min width here
              minHeight: '300px', // Set your desired min height here
              width: '60%', // Set your desired width here
              maxWidth: '800px', // Set your desired max width here
              borderRadius: 'md',
              p: 3,
              boxShadow: 'lg'
            }}
          >
            <DialogTitle>{t('listCompany.formAddCompany.title')}</DialogTitle>
            <DialogContent>
              {t('listCompany.formAddCompany.titleP')}
            </DialogContent>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setOpen(false);
              }}
            >
              <Stack spacing={2}>
                <FormControl>
                  <FormLabel>{t('listCompany.formAddCompany.name')}</FormLabel>
                  <Input autoFocus required />
                </FormControl>
                <FormControl>
                  <FormLabel>
                    {t('listCompany.formAddCompany.description')}
                  </FormLabel>
                  <Input required />
                </FormControl>
                <FormControl>
                  <FormLabel>{t('listCompany.formAddCompany.logo')}</FormLabel>
                  <Button
                    component="label"
                    role={undefined}
                    tabIndex={-1}
                    variant="outlined"
                    color="neutral"
                    startDecorator={
                      <SvgIcon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                          />
                        </svg>
                      </SvgIcon>
                    }
                  >
                    {t('listCompany.formAddCompany.image')}
                    <VisuallyHiddenInput type="file" />
                  </Button>
                </FormControl>
                <Button type="submit">Submit</Button>
              </Stack>
            </form>
          </ModalDialog>
        </Modal>
      </CssVarsProvider>
    </React.Fragment>
  );
}
