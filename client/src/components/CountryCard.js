import React from "react";
import { Card, Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: 300,
        padding: 30,
        margin: 20
    }
});

export default ({name, data}) => {
    const classes = useStyles();
    return (
        <Grid item className={classes.root} component={Card}>
            <Typography variant="h4" component="h2" gutterBottom>{name}</Typography>
            <Typography variant="body1">Number of women: {data.length}</Typography>
        </Grid>
    )
}