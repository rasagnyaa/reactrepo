import axios from "axios";
import React, { useEffect, useState } from "react";

const CountryListing = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCountryDetails, setSelectedCountryDetails] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    console.log("response", response);
    const result = response.data;
    setCountries(result);
  };
  const selectedCountryHandler = (event) => {
    const countryName=(event.target.value);
    setSelectedCountry(countryName);
    const countryDetails = countries.find(country => country.name.official === countryName);
    setSelectedCountryDetails(countryDetails);
  };
 
  return (
    <div>
      <h1>Country listing</h1>
      <select value={selectedCountry} onChange={selectedCountryHandler}>
        {countries.map((eachCountry, index) => (
          <option key={index} value={eachCountry.name.official}>
            {eachCountry.name.official}
          </option>
            ))}
        </select>
        <h2>{selectedCountry}</h2>
       
        {/* <h1>
        {countries.map((each, index) => {
          return<><h5 key={index}>{each.name.common}</h5>
             
          </>
        })}
      </h1> */}
      {selectedCountryDetails && (
        <div>
          {/* <h3>{selectedCountryDetails.name.common}</h3> */}
          <img src={selectedCountryDetails.flags.png} alt={`Flag of ${selectedCountryDetails.name.common}`} />
        </div>
      )}
      {/* <h1>
        {countries.map((each, index) => (
          <h5 key={index}>{each.name.common}</h5>
        ))}
      </h1> */}


   
   
    </div>
  );
};

export default CountryListing;
