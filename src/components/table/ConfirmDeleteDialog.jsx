import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ConfirmDeleteDialog({
  isOpen,
  onClose,
  title,
  content,
  onClearContent,
  deleteList
}) {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Dialog
        open={isOpen}
        onClose={() => {
          onClose();
          onClearContent();
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {title ? t(title) : t('table.title')}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {/* {content || t('table.content')} */}
            {deleteList.length === 1
              ? t('table.confirmDeleteSingle', { name: deleteList[0].name })
              : t('table.confirmDeleteMultiple', { count: deleteList.length })}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              onClose();
              onClearContent();
            }}
            sx={{ textTransform: 'unset' }}
            color="secondary"
          >
            {t('table.disagree')}
          </Button>
          <Button
            color="error"
            onClick={() => {
              onClose();
              onClearContent();
            }}
            sx={{ textTransform: 'unset' }}
          >
            {t('table.agree')}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
