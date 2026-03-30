import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countiesPromise }) => {
  const [visitedC, setVisitedC] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedC = (country) => {
    const newVisitedC = [...visitedC, country];
    setVisitedC(newVisitedC);
  };

  const handleVisitedFlag = (flag) => {
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };

  const countriesData = use(countiesPromise);
  const countries = countriesData.countries;

  return (
    <div className="countries">
      <h1>In the Countries : {countries.length}</h1>
      <h3>Total Visited Country : {visitedC.length}</h3>
      <h3>Total Flag Visited : {visitedFlags.length}</h3>
      <ol>
        {visitedC.map((country) => (
          <li key={country.cca3.cca3}>{country.name.common}</li>
        ))}
      </ol>

      <div className="visited-flags">
        {
          visitedFlags.map((flag , index) => <img key={index} src={flag}></img>)
        }
      </div>

      <div className="countriesCard">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedC={handleVisitedC}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
