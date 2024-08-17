import "./App.css";
import { useState } from "react";
import CitySelector from "./components/cityselector";
import CityCard from "./components/citycard";

function App() {
  const [currentCity, setCurrentCity] = useState("");

  function updateCity(city) {
    setCurrentCity(city);
  }

  return (
    <div className="App">
      <CitySelector updateCity={updateCity} />

      {currentCity ? (
        <CityCard currentCity={currentCity} />
      ) : (
        <p>город не выбран</p>
      )}
    </div>
  );
}

export default App;
