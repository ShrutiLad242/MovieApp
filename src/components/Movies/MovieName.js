import React, { useContext, useState } from "react";
import Button from '@mui/material/Button';
// import MovieDetails from "./MovieDetails";
const MovieName = (props) => {
    console.log(props.selected);


    return (
        <React.Fragment>
            <Button variant={props.selected ? 'contained' : 'outlined'}
                style={{ maxWidth: '222px', maxHeight: '50px', minWidth: '222px', minHeight: '50px', marginBottom: '0.1px' }}
                size="medium"
                onClick={props.onClick}>{props.title}</Button>
        </React.Fragment>
    );

};
export default MovieName;