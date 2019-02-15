import React from "react";
import SearchBox from './components/SearchBox';
import CityInfo from './components/CityInfo/';
import SearchHistory from "./components/SearchHistory";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="page-title" id="page-title">
            Weather App
          </h1>
          <p className="page-description" id="page-description">
            Always know if you need an umbrella!
          </p>
        </div>
        <SearchBox />
        <div className="row col-md">
          <div className="col-md-6">
            <CityInfo />
          </div>
          <div className="col-md-6">
            <SearchHistory />
          </div>
        </div>
      </div>
    );
  }
}