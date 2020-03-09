import React, { Component } from "react";
import axios from "axios";
import { Typography, Grid } from "@material-ui/core";
import CountryCard from "./components/CountryCard";

class App extends Component {
  state = { data: {countries: [], indexStore: {}} }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players")
      .then(res => {
        this.setState({ data: this.restructureData(res.data) });
      }).catch(err => {
        alert(`An error occurred while trying to fetch data:\n ${err}`);
      })
  }

  restructureData = (data) => {
    const obj = { length: 0, countries: [], indexStore: {} };
    data.reduce((obj, datum) => {
      const countryIndex = obj.indexStore[datum.country];
      if (countryIndex !== undefined) {
        obj.countries[countryIndex][2].push(datum);
      } else {
        obj.indexStore[datum.country] = obj.length;
        obj.countries.push([datum.country, obj.length, [datum]])
        obj.length++
      }
      return obj;
    }, obj);
    return {countries: obj.countries, indexStore: obj.indexStore};
  }

  render() {
    return (
      <>
        <Typography variant="h3" component="h1" gutterBottom>Women's World Cup</Typography>
        <Grid container justify="center" alignItems="center">
          {this.state.data.countries.map(([name, key, data]) => {
            return <CountryCard key={key} name={name} data={data} />
          })}
        </Grid>
      </>
    )
  }
}

export default App;
