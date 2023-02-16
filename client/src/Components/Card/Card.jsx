import { useNavigate } from "react-router-dom";
import "./Card.css";
import imgDefault from "../../assets/pokemonn.png"

export default function Card({ pokemon }) {
  const { name, types } = pokemon;
  const img = pokemon.img || imgDefault;
  
  const navigate = useNavigate();
  const click = () => {
    navigate(`/details/${pokemon.id}`);
  };
  return (
    <>
      <div className="container_card" onClick={pokemon.id ? click : null}>
        <div className="card">
          <div className="cardetails">
            <img className="image" src={img} alt={name} key={name}></img>
            <div className="info">
              <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
              <div className="types">
                Types :
                {types?.map((e, k) => {
                  return (
                    <div className="type" key={k}>
                      <p className="text">{e.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
