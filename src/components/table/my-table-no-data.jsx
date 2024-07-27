import PropTypes from 'prop-types';

import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export default function MyTableNoData({ query, colLength }) {
  return (
    <TableRow>
      <TableCell align="center" colSpan={colLength + 1}>
        <Paper
          sx={{
            textAlign: 'center',
            boxShadow: 'none'
          }}
        >
          <Typography variant="h6" paragraph>
            Not found
          </Typography>

          <Typography variant="body2">
            No results found for &nbsp;
            <strong>&quot;{query}&quot;</strong>.
            <br /> Try checking for typos or using complete words.
          </Typography>
        </Paper>
      </TableCell>
    </TableRow>
  );
}

MyTableNoData.propTypes = {
  query: PropTypes.string,
  colLength: PropTypes.number
};
