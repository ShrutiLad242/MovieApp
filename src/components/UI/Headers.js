import React from 'react';
import classes from './headers.module.css';
import Switch from 'react-switch';
import AppBar from '@mui/material/AppBar';
import { Link } from 'react-router-dom';
const Headers = (props) => {
    return (
        <React.Fragment>
            <AppBar position="static" width="100%">
                <ul className={classes.nav}>
                    <li>
                        <Link to="/" style={{
                            cursor: "pointer",
                            font: "inherit",
                            color: "Black",
                            border: "none",
                            backgroundColor: "none",
                            textDecoration: "none",
                            padding: "0.75rem 1.5rem",
                            borderRadius: "4px",
                        }}>Movie App </Link>
                    </li><li>
                        <Link to="/imdb" style={{
                            cursor: "pointer",
                            font: "inherit",
                            color: "Black",
                            border: "none",
                            backgroundColor: "none",
                            textDecoration: "none",
                            padding: "0.75rem 1.5rem",
                            borderRadius: "4px",
                        }}>IMDB Ratings</Link>

                    </li>
                    <li>
                        {/* <Button onClick={<Link to="/imdbmovies"></Link>}>IMDB Movies</Button> */}
                        <Link to="/imdbmovies" style={{
                            cursor: "pointer",
                            font: "inherit",
                            color: "Black",
                            border: "none",
                            backgroundColor: "none",
                            textDecoration: "none",
                            padding: "0.75rem 1.5rem",
                            borderRadius: "4px",
                        }}>IMDB Movies</Link>

                    </li>

                    <li>
                        {/* <Button onClick={<Link to="/imdbmovies"></Link>}>IMDB Movies</Button> */}
                        <Link to="/shows" style={{
                            cursor: "pointer",
                            font: "inherit",
                            color: "Black",
                            border: "none",
                            backgroundColor: "none",
                            textDecoration: "none",
                            padding: "0.75rem 1.5rem",
                            borderRadius: "4px",
                        }}>IMDB Shows</Link>

                    </li>

                    <li>
                        <span className={classes.span}>
                            <Switch onChange={props.onChange} checked={props.checked} />
                        </span>
                    </li>
                </ul>



            </AppBar>
        </React.Fragment >
    )

};
export default (Headers);