import styles from "./styles.module.css";

function CityCard({ currentCity }) {
  return (
    <div>
      <h1>{currentCity.name} </h1>
      <img src={currentCity.imageUrl} alt="" />
      <p>{currentCity.description}</p>
      <ul>
        {currentCity.facts.map((fact, idx) => {
          return <li key={idx}>{fact}</li>;
        })}
      </ul>
    </div>
  );
}

export default CityCard;
