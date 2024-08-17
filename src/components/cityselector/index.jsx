import styles from "./styles.module.css";
import { citiesData } from "./mockData";

function CitySelector({ updateCity }) {
  function handleChange(event) {
    updateCity(citiesData[event.target.value]);
  }

  return (
    <form>
      <select onChange={handleChange} name="" id="">
        <option value="">city</option> {/*why do we have value */}
        {citiesData.map((city, idx) => {
          return (
            <option key={idx} value={idx}>
              {city.name}
            </option>
          );
        })}
      </select>
    </form>
  );
}

export default CitySelector;
