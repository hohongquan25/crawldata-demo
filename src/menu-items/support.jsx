// assets
import {
  ChromeOutlined,
  QuestionOutlined,
  ContactsOutlined
} from '@ant-design/icons';
import DataObjectIcon from '@mui/icons-material/DataObject';
// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined,
  ContactsOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'support',
  title: 'Support',
  type: 'group',
  children: [
    {
      id: 'crawl-data',
      title: 'Crawl Data',
      type: 'item',
      url: '/crawl-data',
      icon: DataObjectIcon
    },
    {
      id: 'sample-page',
      title: 'Sample Page',
      type: 'item',
      url: '/sample-page',
      icon: icons.ChromeOutlined
    },
    {
      id: 'contact',
      title: 'Contact',
      type: 'item',
      url: '/contact',
      icon: icons.ContactsOutlined
    },
    {
      id: 'documentation',
      title: 'Documentation',
      type: 'item',
      url: 'https://codedthemes.gitbook.io/mantis/',
      icon: icons.QuestionOutlined,
      external: true,
      target: true
    }
  ]
};

export default support;
