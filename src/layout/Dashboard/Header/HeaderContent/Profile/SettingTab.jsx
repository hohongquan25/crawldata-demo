import React, { useState } from 'react';

// material-ui
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// assets
import {
  CommentOutlined,
  LockOutlined,
  QuestionCircleOutlined,
  UserOutlined,
  UnorderedListOutlined,
  GlobalOutlined
} from '@ant-design/icons';
import {
  ListItem,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip
} from '@mui/material';
import { useTranslation } from 'react-i18next';

// ==============================|| HEADER PROFILE - SETTING TAB ||============================== //

export default function SettingTab() {
  const { i18n, t } = useTranslation();
  const savedLanguage = localStorage.getItem('i18nextLng');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const [alignment, setAlignment] = React.useState(savedLanguage || 'en');

  const handleChangeLanguage = (event, newAlignment) => {
    i18n.changeLanguage(newAlignment);
    setAlignment(newAlignment);
  };

  return (
    <List
      component="nav"
      sx={{ p: 0, '& .MuiListItemIcon-root': { minWidth: 32 } }}
    >
      <ListItemButton
        selected={selectedIndex === 0}
        onClick={(event) => handleListItemClick(event, 0)}
      >
        <ListItemIcon>
          <QuestionCircleOutlined />
        </ListItemIcon>
        <ListItemText primary={t('menuAvatar.setting.support')} />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 1}
        onClick={(event) => handleListItemClick(event, 1)}
      >
        <ListItemIcon>
          <UserOutlined />
        </ListItemIcon>
        <ListItemText primary={t('menuAvatar.setting.accountSettings')} />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 2}
        onClick={(event) => handleListItemClick(event, 2)}
      >
        <ListItemIcon>
          <LockOutlined />
        </ListItemIcon>
        <ListItemText primary={t('menuAvatar.setting.privacyCenter')} />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 3}
        onClick={(event) => handleListItemClick(event, 3)}
      >
        <ListItemIcon>
          <CommentOutlined />
        </ListItemIcon>
        <ListItemText primary={t('menuAvatar.setting.feedback')} />
      </ListItemButton>
      <ListItem>
        <ListItemIcon>
          <GlobalOutlined />
        </ListItemIcon>
        <ListItemText primary={t('menuAvatar.setting.language')} />
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
      </ListItem>
    </List>
  );
}
