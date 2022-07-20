import { useEffect, useState } from "react";
import IMDBtable from "./IMDBtable";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DUMMY_MOVIES } from './Dummy_Movies'
import { DataGrid } from '@mui/x-data-grid';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const IMDBRatings = () => {

  console.log("DUMMY_MOVIES")
  console.log(DUMMY_MOVIES)

  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://imdb-api.com/en/API/Top250Movies/k_yip52iqe/",
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

  const columns = [
    {
      field: 'rank',
      headerName: 'rank',
    },
    {
      field: 'title',
      headerName: 'title',
    }, {
      field: 'image',
      headerName: 'image',
    },
    {
      field: 'year',
      headerName: 'year',
    }, {
      field: 'vote',
      headerName: 'vote',
    },
  ];

  return (


    <TableContainer component={Paper}>
      <Table sx={{ width: "100 %" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Rank</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">year</TableCell>
            <TableCell align="right">votes</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {movies.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.rank}
              </TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.image}</TableCell>
              <TableCell align="right">{row.year}</TableCell>
              <TableCell align="right">{row.imDbRatingCount}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>











    // <TableContainer component={Paper} sx={{ minWidth: 500, maxWidth: 800 }}>
    //   <Table sx={{ minWidth: 700 }} aria-label="customized table">
    //     <TableHead style={{ backgroundColor: 'black' }}>
    //       <TableRow>
    //         <TableCell style={{ color: 'white' }}>Rank</TableCell>
    //         <TableCell style={{ color: 'white' }}>Title</TableCell>
    //         <TableCell style={{ color: 'white' }}>Image</TableCell>
    //         <TableCell style={{ color: 'white' }}>Year</TableCell>
    //         <TableCell style={{ color: 'white' }}>Votes</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {true && movies.map((movie) => (



    //         <IMDBtable key={movie.id}
    //           title={movie.title}
    //           rank={movie.rank}
    //           img={movie.image}
    //           ReleaseYear={movie.year}
    //           votes={movie.imDbRatingCount} 
    //           path={'ratings'}/>



    //       ))}</TableBody>
    //   </Table></TableContainer>

  );
};
export default IMDBRatings;