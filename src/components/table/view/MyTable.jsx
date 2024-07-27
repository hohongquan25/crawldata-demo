import { useState } from 'react';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import MyTableNoData from '../my-table-no-data';
import MyTableRow from '../my-table-row';
import MyTableEmptyRows from '../my-table-empty-rows';
import MyTableToolbar from '../my-table-toolbar';
import { emptyRows, applyFilter, getComparator } from '../utils';
import Iconify from 'components/iconify/iconify';
import Scrollbar from 'components/scrollbar';
import ConfirmDeleteDialog from '../ConfirmDeleteDialog';
import MyTableHead from '../my-table-head';
import { useTranslation } from 'react-i18next';

// ----------------------------------------------------------------------

export default function MyTable({
  data,
  headLabel,
  createTitle,
  tableTitle,
  titleDelete
}) {
  const { t } = useTranslation();

  const [isOpenConfirmDialog, setIsOpenConfirmDialog] = useState(false);

  const [contentDelete, setContentDelete] = useState();

  const handleCloseConfirmDialog = () => {
    setIsOpenConfirmDialog(false);
  };

  const handleOpenConfirmDialog = () => {
    setIsOpenConfirmDialog(true);
  };

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);
  console.log('🚀 ~ selected:', selected);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      setSelected(data);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, row) => {
    const selectedIndex = selected.findIndex((item) => item.id === row.id);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, row);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const dataFiltered = applyFilter({
    inputData: data,
    comparator: getComparator(order, orderBy),
    filterName
  });

  const notFound = !dataFiltered.length && !!filterName;

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        mb={2}
      >
        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="eva:plus-fill" />}
        >
          {createTitle}
        </Button>
      </Stack>

      <Card>
        <MyTableToolbar
          numSelected={selected.length}
          filterName={filterName}
          onFilterName={handleFilterByName}
          onOpenConfirmDialog={handleOpenConfirmDialog}
          t={t}
          tableTitle={tableTitle}
        />

        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <MyTableHead
                order={order}
                orderBy={orderBy}
                rowCount={data.length}
                numSelected={selected.length}
                onRequestSort={handleSort}
                onSelectAllClick={handleSelectAllClick}
                headLabel={headLabel}
                sx={{
                  '& th:first-child': {
                    position: 'sticky',
                    left: 0,
                    backgroundColor: 'background.paper',
                    zIndex: 1
                  }
                }}
              />
              <TableBody>
                {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, idx) => (
                    <MyTableRow
                      key={idx}
                      name={row.name}
                      role={row.role}
                      status={row.status}
                      company={row.company}
                      avatarUrl={row.avatarUrl}
                      isVerified={row.isVerified}
                      selected={selected.some((item) => item.id === row.id)}
                      handleClick={(event) => handleClick(event, row)}
                      row={row}
                      headLabel={headLabel}
                      sx={{
                        '& td:first-child': {
                          position: 'sticky',
                          left: 0,
                          backgroundColor: 'background.paper',
                          zIndex: 1
                        }
                      }}
                    />
                  ))}
                {data.length <= 0 && (
                  <MyTableEmptyRows height={77} colLength={headLabel.length} />
                )}

                {notFound && data.length > 0 && (
                  <MyTableNoData
                    colLength={headLabel.length}
                    query={filterName}
                  />
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          page={page}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage={t('table.rowsPerPage')}
        />
      </Card>
      <ConfirmDeleteDialog
        isOpen={isOpenConfirmDialog}
        onClose={handleCloseConfirmDialog}
        content={contentDelete}
        onClearContent={() => setContentDelete('')}
        title={titleDelete}
        deleteList={selected}
      />
    </>
  );
}
