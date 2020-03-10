import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import WomanCard from "./WomanCard";

export default ({getWomenFromCountry, women}) => {
    const { country } = useParams();
    women = women || getWomenFromCountry(country)[2];
    return (
        <>
            <Typography variant="h4" component="h2">{country}</Typography>
            <Grid container justify="center" alignItems="center">
                { women ? 
                    women.map(woman => {
                        return <WomanCard key={woman.id} woman={woman} />
                    }) : 
                    <Typography variant="h5" component="h3">No women found!</Typography>
                }
            </Grid>
        </>
    )
}