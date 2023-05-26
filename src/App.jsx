import { useEffect } from "react";
import axios from "axios";
import "./App.css";
import { useState } from "react";
import { AllCountries } from "./components/AllCountries";
import { ErrorSearch } from "./components/ErrorSearch";
import { SearchBar } from "./components/SearchBar";

function App() {
  const [catchError, setCatchError] = useState(null);
  const [countries, setCountries] = useState();
  const [searchCountry, setSearchCountry] = useState(false);
  const [target, setTarget] = useState("");

  const handleTarget = (e) => {
    setTarget(e.target.value);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setSearchCountry(target);
      setTarget("");
    }
  };

  const handleClick = () => {
    setSearchCountry(target);
    setTarget("");
  };

  useEffect(() => {
    const url = `https://restcountries.com/v3.1/name/${searchCountry}`;
    axios
      .get(url)
      .then((res) => setCountries(res.data[0]))
      .catch((err) => {
        setCatchError("Error");
        console.log(err);
        setCountries(null);
      });
  }, [searchCountry]);

  return (
    <div className="container-fluid app-container">
      <SearchBar
        handleTarget={handleTarget}
        handleSearch={handleSearch}
        target={target}
        handleClick={handleClick}
      />

      {!searchCountry ? (
        "Please type your country😜"
      ) : countries ? (
        <AllCountries
          key={countries?.name.common}
          img={countries?.flags.svg}
          name={countries?.name.common}
          capital={countries?.capital}
          independent={countries?.independent}
          region={countries?.region}
          subregion={countries?.subregion}
          area={countries?.area}
        />
      ) : (
        <ErrorSearch />
      )}
    </div>
  );
}

export default App;
