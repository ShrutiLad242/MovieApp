import React, { useState, useEffect, useContext } from "react";
import classes from "./MovieList.module.css"
import MovieName from "./MovieName";
import MovieDetails from './MovieDetails';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Box } from "@mui/system";
import { list } from '../../App';

// export const ClickContext = createContext(null);

const MovieList = (props) => {
    const ctx = useContext(list);

    const [details, setDetails] = useState(false);
    const [mid, setMid] = useState();
    const [isAscending, setIsAscending] = useState(false);
    const [sortedMovies, setSortedMovies] = useState(ctx.a);
    const [inputValue, setInputValue] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [isFound, setIsFound] = useState(false);


    const sort = (ascending) => {
        if (ascending) {
            return sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
        } else {
            return sortedMovies.sort((a, b) => b.title.localeCompare(a.title));
        }

    };

    const sortHandler = () => {
        setIsAscending(isAscending ? false : true);
        setSortedMovies(sort(isAscending));
        console.log(sortedMovies);
    }

    useEffect(() => {
        const l = sortedMovies.filter((movie) => {
            return movie.title.toLowerCase().startsWith(inputValue.toLowerCase())
        }).length

        if (l > 0) {
            setIsFound(true)
        } else {
            setIsFound(false)
        }

    }, [inputValue, sortedMovies]);

    return (
        // <ClickContext.Provider value={isClicked}>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>

                <Grid item xs>

                    <Button onClick={sortHandler}>sort</Button>
                    <TextField
                        id="outlined-basic"
                        label="Movie" variant="outlined"
                        type="search"
                        onChange={(e) => {
                            setIsSearching(true);
                            setInputValue(e.target.value)
                        }}
                        className="input" size="small" />

                    <Stack direction="column">

                        {!isSearching && sortedMovies.map((movie) => (
                            <div className={classes.movieList}>
                                <MovieName key={movie.id}
                                    title={movie.title}
                                    id={movie.id}
                                    selected={movie.id === mid}
                                    onClick={() => {
                                        setMid(movie.id);
                                        setDetails(true);
                                    }}
                                />
                            </div>
                        ))
                        }

                        {
                            isSearching &&

                            sortedMovies.filter((movie) => {
                                return movie.title.toLowerCase().startsWith(inputValue.toLowerCase())
                            }).map((movie) => (
                                <div className={classes.movieList}>
                                    <MovieName key={movie.id}
                                        title={movie.title}
                                        id={movie.id}
                                        selected={movie.id === mid}
                                        onClick={() => {
                                            // setIsClicked(true)
                                            setIsFound(true);
                                            setMid(movie.id);
                                            setDetails(true);
                                        }}
                                    />
                                </div>
                            ))
                        }
                        {
                            !isFound && isSearching && <h2>No Movies found</h2>
                        }
                    </Stack>
                </Grid>
                <Grid item xs={9}>

                    {details && <MovieDetails ids={mid} />}
                </Grid>
            </Grid>
        </Box>

    );
};
export default MovieList;