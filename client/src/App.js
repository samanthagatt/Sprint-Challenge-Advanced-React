import React, { Component } from "react";
import axios from "axios";
import { Typography, Button, ButtonGroup, withStyles } from "@material-ui/core";
import { Switch, Route, Link } from "react-router-dom";
import CountryList from "./components/CountryList";
import WomenList from "./components/WomenList";

const styles = () => ({
  nav: {
    marginBottom: 20
  }
})

class App extends Component {
  state = { data: [], structuredData: {countries: [], indexStore: {}}, shouldReloadWomenList: false }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players")
      .then(res => {
        this.setState({ data: res.data, structuredData: this.restructureData(res.data), shouldReloadWomenList: true });
      }).catch(err => {
        alert(`An error occurred while trying to fetch data:\n\n ${err}`);
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

  getWomenFromCountry = (country) => {
    const index = this.state.structuredData.indexStore[country];
    return this.state.structuredData.countries[index] || [];
  }

  render() {
    return (
      <>
        <Typography variant="h3" component="h1" gutterBottom>Women's World Cup</Typography>
        <ButtonGroup className={this.props.classes.nav} variant="contained" size="large" component="nav">
          <Button component={Link} to="/">Home</Button>
          <Button component={Link} to="/countries">By Country</Button>
        </ButtonGroup>
        <Switch>
          <Route exact path="/">
            <WomenList women={this.state.data} />
          </Route>
          <Route path="/countries/:country">
            <WomenList getWomenFromCountry={this.getWomenFromCountry} shouldReloadWomenList />
          </Route>
          <Route path="/countries">
            <CountryList countries={this.state.structuredData.countries} />
          </Route>
          <Route>
            <Typography variant="h4" component="h2">404: Not Found</Typography>
          </Route>
        </Switch>
      </>
    )
  }
}

export default withStyles(styles)(App);
