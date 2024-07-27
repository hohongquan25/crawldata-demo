import PropTypes from 'prop-types';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Paper, Typography } from '@mui/material';

// ----------------------------------------------------------------------

export default function MyTableEmptyRows({ colLength, height }) {
  return (
    <TableRow
      sx={{
        ...(height && {
          height: height
        })
      }}
    >
      <TableCell align="center" colSpan={colLength + 1} sx={{}}>
        <Paper
          sx={{
            textAlign: 'center',
            boxShadow: 'none'
          }}
        >
          <Typography variant="h6">No data available</Typography>
          {/* <Typography variant="body2"> */}
          {/* No results found for &nbsp; */}
          {/* <strong>&quot;{query}&quot;</strong>. */}
          {/* <br /> Try checking for typos or using complete words.
          </Typography> */}
        </Paper>
      </TableCell>
    </TableRow>
  );
}

MyTableEmptyRows.propTypes = {
  emptyRows: PropTypes.number,
  height: PropTypes.number
};
