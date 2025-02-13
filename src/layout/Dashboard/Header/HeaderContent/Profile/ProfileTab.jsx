import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// assets
import EditOutlined from '@ant-design/icons/EditOutlined';
import ProfileOutlined from '@ant-design/icons/ProfileOutlined';
import LogoutOutlined from '@ant-design/icons/LogoutOutlined';
import UserOutlined from '@ant-design/icons/UserOutlined';
import WalletOutlined from '@ant-design/icons/WalletOutlined';
import BusinessIcon from '@mui/icons-material/Business';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { useAuth } from 'contexts/auth-reducer/AuthContext';

// ==============================|| HEADER PROFILE - PROFILE TAB ||============================== //

export default function ProfileTab() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const nav = useNavigate();

  const { onLogout } = useAuth();

  const { t } = useTranslation();

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <List
      component="nav"
      sx={{ p: 0, '& .MuiListItemIcon-root': { minWidth: 32 } }}
    >
      <ListItemButton
        selected={selectedIndex === 0}
        onClick={(event) => {
          handleListItemClick(event, 0, '/apps/profiles/user/personal');
          nav('/account');
        }}
      >
        <ListItemIcon>
          <EditOutlined />
        </ListItemIcon>
        <ListItemText primary={t('menuAvatar.profile.editProfile')} />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 1}
        onClick={(event) => {
          handleListItemClick(event, 1, '/apps/profiles/account/basic');
          nav('/');
        }}
      >
        <ListItemIcon>
          <BusinessIcon />
        </ListItemIcon>
        <ListItemText primary={t('menuAvatar.profile.companies')} />
      </ListItemButton>

      <ListItemButton
        selected={selectedIndex === 3}
        onClick={(event) =>
          handleListItemClick(event, 3, 'apps/profiles/account/personal')
        }
      >
        <ListItemIcon>
          <ProfileOutlined />
        </ListItemIcon>
        <ListItemText primary={t('menuAvatar.profile.socialProfile')} />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 4}
        onClick={(event) =>
          handleListItemClick(event, 4, '/apps/invoice/details/1')
        }
      >
        <ListItemIcon>
          <WalletOutlined />
        </ListItemIcon>
        <ListItemText primary={t('menuAvatar.profile.billing')} />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 2}
        onClick={() => onLogout(nav)}
      >
        <ListItemIcon>
          <LogoutOutlined />
        </ListItemIcon>
        <ListItemText primary={t('menuAvatar.profile.logout')} />
      </ListItemButton>
    </List>
  );
}

ProfileTab.propTypes = { handleLogout: PropTypes.func };
