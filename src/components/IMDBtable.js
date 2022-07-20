import { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
// import TextField from '@mui/material/TextField';
import { list } from '../App';

const IMDBtable = (props) => {

    // const inputRef = useRef(null);
    let objIndex = -1;
    const ctx = useContext(list);

    const [doChange, setDoChange] = useState(false);
    const [title, setTitle] = useState(props.title);


    let image = `https://image.tmdb.org/t/p/w300/${props.img}`;

    const data = ctx.a;

    const clickHandler = () => {
        setDoChange(false);
        console.log("inputRef.current.value");
        console.log(props.title);

        data.filter((movie) => {
            return movie.title === props.title
        }).map((movie) => {
            console.log(movie.title);
            objIndex = data.findIndex((m) =>
                m.title === movie.title
            );

            data[objIndex].title = title;

        })

        ctx.setA([...data]);
    }

    return (<div>
        <Box >

            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item md={2}>
                    {!doChange && props.title}
                    {doChange && <input id="standard-basic" defaultValue={props.title} variant="standard" onChange={(e) => { setTitle(e.target.value) }} />}
                </Grid>
                <Grid item md={3}>
                    {props.ReleaseYear}
                </Grid>
                <Grid item md={2.6}>
                    <img src={image} alt="movieimage" height="200" />
                </Grid>
                <Grid item md={2} style={{ align: "right" }}>
                    {props.votes}
                </Grid>
                <Grid item md={2} style={{ align: "right" }}>

                    {!doChange && <Button variant="outlined" onClick={() => {

                        setDoChange(true);

                    }}>Change</Button>}

                    {doChange && <Button variant="outlined" onClick={clickHandler} >ok</Button>}
                    {doChange && <Button variant="outlined" onClick={() => {
                        setDoChange(false);
                    }}>Cancel</Button>}
                </Grid>
            </Grid>
        </Box></div>
    );
};
export default IMDBtable;
