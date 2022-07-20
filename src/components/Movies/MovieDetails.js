
import React, { useContext } from 'react';
import { list, ThemeContext } from '../../App';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const MovieDetails = (props) => {

    const ctx = useContext(list);
    const mode = useContext(ThemeContext);


    let obj = (ctx.a).find(movie => movie.id === props.ids);
    let image = `https://image.tmdb.org/t/p/w300/${obj.poster_path}`;

    return (

        <TableContainer component={Paper} sx={{ width: "100%" }}>
            <Table aria-label="simple table" style={{ backgroundColor: mode.theme !== 'light' ? "gray" : 'white' }}>
                <TableHead>
                    <TableRow>
                        <TableCell><img src={image} alt="movie poster" /></TableCell>
                        <TableCell align="left"><h1>{obj.title}</h1>
                            <b>Released Date</b>{obj.release_date}<br />
                            <b>IMDB: </b> {obj.vote_average}<br />
                            {obj.overview}
                        </TableCell>
                    </TableRow></TableHead>
            </Table> </TableContainer>

    );
};
export default MovieDetails;