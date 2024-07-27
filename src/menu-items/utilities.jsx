// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined
} from '@ant-design/icons';

// icons
const icons = {
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'Typography',
      type: 'item',
      url: '/typography',
      icon: icons.FontSizeOutlined
    },
    {
      id: 'util-color',
      title: 'Color',
      type: 'item',
      url: '/color',
      icon: icons.BgColorsOutlined
    },
    {
      id: 'util-shadow',
      title: 'Shadow',
      type: 'item',
      url: '/shadow',
      icon: icons.BarcodeOutlined
    },
    {
      id: 'util-typography2',
      title: 'Tygography',
      type: 'item',
      url: '/typography',
      icon: icons.ImportOutlined
    },
    {
      id: 'util-color2',
      title: 'Colors',
      type: 'item',
      url: '/color',
      icon: icons.CloudUploadOutlined
    },
    {
      id: 'util-shadow2',
      title: 'Shadow',
      type: 'item',
      url: '/shadow',
      icon: icons.HistoryOutlined
    }
  ]
};

export default utilities;
