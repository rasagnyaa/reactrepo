import axios from "axios";
import { useEffect, useState } from "react";

const CountryListing2 = () => {
  const [city, setCity] = useState(""); // State for input value
  const [countries, setCountries] = useState([]); // State for fetched country data
  const [filteredCountries, setFilteredCountries] = useState([]); // State for filtered country data

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    const result = response.data;
    setCountries(result); // Store fetched data
    setFilteredCountries(result); // Initially show all countries
  };

  const handleInputChange = (event) => {
    const countryName = event.target.value.toLowerCase();
    setCity(countryName);

    //Filter countries based on input value
    const filtered = countries.filter(country =>
      country.name.common.toLowerCase().includes(countryName)
    );
    setFilteredCountries(filtered);
  };

  const handleSearch = (event) => {
    // Search logic can be handled here if needed
  
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter a country"
        value={city}
        onChange={handleInputChange}
      />
          <button onClick={handleSearch}>Search Country</button>
          <div>
          {filteredCountries.map((country) => (
          <div key={country.cca3} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
          <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} style={{ width: "50px", marginRight: "10px" }} />
          <span>{country.name.common}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default CountryListing2;
