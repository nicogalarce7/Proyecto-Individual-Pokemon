import "./Details.css";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../Redux/axios";
import Loading from "../../Views/Loading/Loading";
import Card from "../Card/Card";


export default function Details() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://proyecto-individual-pokemon-production.up.railway.app/pokemons/id/${id}`)
      .then((e) => setPokemon(e.data[0]))
      .catch((err) => {
        return err;
      });
  }, [id, navigate]);

  return (
    <>
      <div className="container_card_details">
            <div className="button_back">
              <NavLink to="/home"> 🢀 Back </NavLink>
            </div>
          {pokemon?(
        <div className="details">
            <div className="column_card">
            <div className="card_detailss"> <Card pokemon={pokemon} /></div>
          </div>
          <div className="columns_info">
            <h2 className="name_details">{pokemon?.name.charAt(0).toUpperCase() + pokemon?.name.slice(1)}</h2>
            <h4>Id: {pokemon?.id}</h4>
            <p className="info_details">
              Hp:<strong>{pokemon?.hp}</strong> 
            </p>
            <p className="info_details">
              Attack: <strong>{pokemon?.attack}</strong> 
            </p>
            <p className="info_details">
              Defense: <strong>{pokemon?.defense}</strong>
            </p>
            <p className="info_details">
              Speed:<strong> {pokemon?.speed} km/h</strong>
            </p>
            <p className="info_details">
              Heigth:<strong> {pokemon?.height}0 cm</strong>
            </p>
            <p className="info_details">
              Weigth:<strong> {pokemon?.weight} g</strong>
            </p>
          </div>
        </div>
        ):<Loading />}
      </div>
    </>
  );
}
