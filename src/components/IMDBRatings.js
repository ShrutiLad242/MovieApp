import { useEffect, useState } from "react";
// import IMDBtable from "./IMDBtable";

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { maxWidth } from "@mui/system";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const IMDBRatings = () => {

  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://imdb-api.com/en/API/Top250Movies/k_zc79xs3g",
      {
        method: "GET",
        headers: {},
      }
    );
    const data = await response.json()
    setMovies(data.items);
  }
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: "100%" }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell  >Rank</StyledTableCell >
            <StyledTableCell  >Title</StyledTableCell >
            <StyledTableCell  >Image</StyledTableCell >
            <StyledTableCell  >year</StyledTableCell >
            <StyledTableCell  >votes</StyledTableCell >

          </TableRow>
        </TableHead>
        <TableBody>
          {movies.map((row) => (
            <TableRow
              key={row.id}
            >
              <StyledTableCell component="th" scope="row">
                {row.rank}
              </StyledTableCell>
              <StyledTableCell>{row.title}</StyledTableCell>
              <StyledTableCell><img src={row.image} alt="movieposter" height="120px" width="120px" /></StyledTableCell>
              <StyledTableCell>{row.year}</StyledTableCell>
              <StyledTableCell>{row.imDbRatingCount}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  );
};
export default IMDBRatings;