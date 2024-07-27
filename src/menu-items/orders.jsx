// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined,
  ImportOutlined,
  CloudUploadOutlined,
  HistoryOutlined
} from '@ant-design/icons';

// icons
const icons = {
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined,
  ImportOutlined,
  CloudUploadOutlined,
  HistoryOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const orders = {
  id: 'orders',
  title: 'Orders',
  type: 'group',
  children: [
    {
      id: 'import-orders',
      title: 'sidebar.orders.children.importOrders',
      type: 'item',
      url: '/import-orders',
      icon: icons.ImportOutlined
    },
    {
      id: 'push-orders',
      title: 'sidebar.orders.children.pushOrders',
      type: 'item',
      url: '/push-orders',
      icon: icons.CloudUploadOutlined
    },
    {
      id: 'push-orders-history',
      title: 'sidebar.orders.children.pushOrdersHistory',
      type: 'item',
      url: '/push-orders-history',
      icon: icons.HistoryOutlined
    }
  ]
};

export default orders;
