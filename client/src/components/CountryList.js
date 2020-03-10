import React from "react";
import { Grid } from "@material-ui/core";
import CountryCard from "./CountryCard";

export default ({countries}) => {
    return (
        <Grid container justify="center" alignItems="center">
            {countries.map(([name, key, data]) => {
                return <CountryCard key={key} name={name} data={data} />
            })}
        </Grid>
    )
}