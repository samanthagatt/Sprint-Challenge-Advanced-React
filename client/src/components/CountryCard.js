import React from "react";
import { Card, Grid, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        width: 300,
        margin: 20,
        textDecoration: "none"
    },
    card: {
        padding: 30,
        '&:hover': {
            background: "#eee",
        }
    }
});

export default ({name, data}) => {
    const classes = useStyles();
    return (
        <Grid item className={classes.root} component={Link} to={`/countries/${name}`}>
            <Card className={classes.card}>
                <Typography variant="h4" component="h2" gutterBottom>{name}</Typography>
                <Typography variant="body1">Number of women: {data.length}</Typography>
            </Card>
        </Grid>
    )
}