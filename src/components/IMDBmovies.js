import { useState, useContext } from "react";
import IMDBtable from "./IMDBtable";

import { list } from '../App';
import Grid from '@mui/material/Grid';
// import { Button } from '@mui/material';
// import TextField from '@mui/material/TextField';


const IMDBRatings = () => {
    const ctx = useContext(list);

    // const [movieList,setMovieList] = useState(DUMMY_MOVIES);
    const [mid, setMid] = useState(0);


    return (<div style={{ marginBottom: "500", padding: "50" }}>

        <Grid style={{ padding: "50" }}>

        </Grid>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item md={2.4} xs={2.4}>
                <h3>Title</h3>
            </Grid>
            <Grid item md={3} xs={3}>
                <h3>Year</h3>
            </Grid>
            <Grid item md={2.6} xs={2.6}>
                <h3>Image</h3>
            </Grid><Grid item md={2} xs={2}>
                <h3>Votes</h3>
            </Grid>
            <Grid item md={1} xs={1}>
                <h3>Edit</h3>
            </Grid>

        </Grid>
        {
            ctx.a.map((movie) => (
                <IMDBtable key={movie.id}
                    title={movie.title}
                    img={movie.poster_path}
                    ReleaseYear={movie.release_date}
                    votes={movie.popularity}
                    path={'movie'}
                    change={movie.id === mid}
                    onClick={() => { setMid(movie.id) }}
                />
            ))}
    </div>

    )
};
export default IMDBRatings;