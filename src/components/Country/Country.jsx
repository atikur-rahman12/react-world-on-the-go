import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedC, handleVisitedFlag }) => {
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedC(country);
  };

  return (
    <div className={`country ${visited && "country-visited"}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Name : {country.name.common}</h3>
      <p>Capital : {country.capital.capital}</p>
      <p>
        Area : {country.area.area} -{" "}
        {country.area.area > 300000 ? "Big Country" : "Small Country"}
      </p>
      <p>Population : {country.population.population}</p>
      <button className="btn" onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
      <button className="btn2" onClick={() => { handleVisitedFlag(country.flags.flags.png) }}>Add Visited Flag</button>
    </div>
  );
};

export default Country;
