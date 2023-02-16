import "./CardForm.css";
import imgDefault from "../../assets/pokemonn.png";

export default function Card({ pokemon }) {
  const { name, types, hp, attack, defense, speed, height, weight } = pokemon;
  const img = pokemon.img || imgDefault;

  return (
    <>
      <div className="flip">
        <div className="content">
          <div className="front">
            <img className="img_F" src={img} alt={name} key={name}></img>
            <div className="infoo">
              <div className="Name_F">
                <h1>{name}</h1>
              </div>
              <h3 id="type_FN">Types:</h3>
              <div className="types_F">
                {types?.map((e, k) => {
                  return (
                    <div className="type_F" key={k}>
                      <h2 id="type_Name_F">{e}</h2>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="back">
            <h4>Hp: {hp}</h4>
            <h4>Attack: {attack}</h4>
            <h4>Defense: {defense}</h4>
            <h4>Speed: {speed}</h4>
            <h4>Height: {height}</h4>
            <h4>Weight: {weight}</h4>
          </div>
        </div>
      </div>
    </>
  );
}
