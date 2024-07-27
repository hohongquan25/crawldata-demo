// material-ui
import { Button } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Loader from 'components/Loader';
import MainCard from 'components/MainCard';
import MyTable from 'components/table';
import { users } from 'components/table/user';
import UserPage from 'components/table/view/MyTable';
import ComponentSkeleton from 'pages/component-overview/ComponentSkeleton';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
// import { useGetComments } from 'services/commentService';

// project import

// ==============================|| COMPONENTS - TYPOGRAPHY ||============================== //

export default function PushOrder() {
  const { t } = useTranslation();
  // const [post, setPost] = useState(1);
  // const { posts, postsLoading, postsError } = useGetComments(post);
  // const [hasData, setHasData] = useState(true);
  // // if (postsLoading) return <Loader />;
  // useEffect(() => {
  //   if (posts) {
  //     setHasData(false);
  //   }
  // }, [posts]);

  return (
    <ComponentSkeleton
    // isLoading={hasData} // Skeleton
    >
      {/* {postsLoading && <Loader />} */}
      <Grid container spacing={2}>
        <Grid item xs={12} lg={12}>
          <Stack spacing={2}>
            {/* <MainCard title="Import orders"> */}
            {/* <Button onClick={() => setPost(1)}>1</Button>
            <Button onClick={() => setPost(2)}>2</Button> */}
            {/* <MyTable
              title={t('importOrders.tableTitle')}
              data={[]}
              columns={[
                {
                  id: 'userId',
                  numeric: true,
                  disablePadding: false,
                  label: 'User id'
                },
                {
                  id: 'title',
                  numeric: false,
                  disablePadding: false,
                  label: 'Title'
                },
                {
                  id: 'body',
                  numeric: false,
                  disablePadding: false,
                  label: 'Body'
                }
              ]}
            /> */}

            <UserPage
              data={users.map((u) => {
                return {
                  id: u.id,
                  name: u.name,
                  company: u.company,
                  role: u.role,
                  isVerified: u.isVerified ? 'Yes' : 'No',
                  status: u.status
                };
              })}
              headLabel={[
                { id: 'id', label: 'Id', hidden: true },
                { id: 'name', label: 'Name' },
                { id: 'company', label: 'Company' },
                { id: 'role', label: 'Role' },
                { id: 'isVerified', label: 'Verified', align: 'center' },
                { id: 'status', label: 'Status', isLabel: true },
                { id: '' }
              ]}
              createTitle={t('importOrders.title')}
              tableTitle={t('importOrders.tableTitle')}
            />
            {/* </MainCard> */}
          </Stack>
        </Grid>
      </Grid>
    </ComponentSkeleton>
  );
}
