import Card from "../Card/Card";
import "./Cards.css";
import { useSelector } from "react-redux";
import Paginate from "../../Views/Paginate/Paginate";
import { useState } from "react";
import Loading from "../../Views/Loading/Loading";

export default function Cards() {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(12);
  const state = useSelector((state) => state.pokemon);
  const allPokemon = useSelector((state) => state.pokemon.pokemonFilter);

  const ma = allPokemon.length / perPage;
  const max = Math.ceil(ma)

  if (!state.pokemonFilter.length) {
    return <Loading />;
  } else {
  return (
    <>
      <div>
        <div className="card_Fa">
        {state.pokemonFilter?.slice((page -1) * perPage, (page -1) * perPage + perPage).map((p)=>(
        <Card key={p.name} pokemon={p} />
        ))}    
        </div>
        <div className="paginateContainer">
            <Paginate page={page} setPage={setPage} max={max} />
          </div>
      </div>
    </>
  );
}
}