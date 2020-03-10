import React from "react";
import { Card, Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: 300,
        margin: 20,
        padding: 30
    }
});

export default ({woman}) => {
    const classes = useStyles();
    return (
        <Grid item className={classes.root} component={Card}>
            <Typography variant="h4" component="h2" gutterBottom>{woman.name}</Typography>
            <Typography variant="body1" gutterBottom>Country: {woman.country}</Typography>
            <Typography variant="body1">Searches: {woman.searches}</Typography>
        </Grid>
    )
}
