import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Types from "./Types";
import Card from "./CardForm";
import validate from "./Validate";
import { apiPostPokemon, getAllPokemon } from "../../Redux/Petitions";
import "./Formulario.css";
import Swal from "sweetalert";

export default function Form() {
  const { type } = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    allFields: "All fields are required",
  });
  const [newPokemon, setNewPokemon] = useState({
    name: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setNewPokemon({
      ...newPokemon,
      [name]: value,
    });
    setErrors(
      validate({
        ...newPokemon,
        [e.target.name]: e.target.value,
      })
    );
  };
  const watchPokemon=()=>{
    useLocation.reload()
  }
  const handelChangeSelect = (e) => {
    const { value } = e.target;
    if (newPokemon.types.includes(value + " ")) return;
    setNewPokemon({
      ...newPokemon,
      types: [value + " ", ...newPokemon.types.splice(0, 1)],
    });
    setErrors(
      validate({
        ...newPokemon,
        types: [value + " ", ...newPokemon.types.splice(0, 1)],
      })
    );
  };
  const onsubmitnt = (e) => {
    e.preventDefault();
    Swal.fire("error:(", `${Object.values(errors)[0]}`, "error");
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    apiPostPokemon(newPokemon)
      .then((res) => {
        Swal({
          title: "Successfully created pokemon!",
          text: "Your pokemon is already in the home!",
          icon: "success",
          button: "go to Home!",
        }).then((e) => navigate("/home")).then(watchPokemon());
        getAllPokemon(dispatch);
      })
      .catch((err) => Swal.fire("Error! :(", `${err.response}`, "error"));
  };

  return (
    <>
      <div className="button_back">
        <NavLink to="/home"> 🢀 Back </NavLink>
      </div>
      <div className="formulario_F">
        <div className="card_Form">
          <div>{newPokemon ? <Card pokemon={newPokemon} /> : null}</div>
        </div>
        <form onSubmit={Object.keys(errors).length ? onsubmitnt : handelSubmit}>
          <section className="form-register">
            <div className="title_Fr">
            <h3>Create Pokemon</h3>
            </div>
            <input
              id="name"
              type="text"
              name="name"
              className="controls"
              value={newPokemon.name}
              onChange={handleChangeInput}
              placeholder="Enter your Name"
            />
            {errors.name && <h4 className="erroree">{errors.name} </h4>}
            <input
              id="img"
              type="text"
              className="controls"
              name="img"
              value={newPokemon.img}
              onChange={handleChangeInput}
              placeholder="Enter your Img"
            />
            {errors.url && <h4 className="erroree">{errors.url} </h4>}
            <div className="divs">
            <input
              className="controls"
              type="number"
              name="hp"
              min={1}
              max={100}
              value={newPokemon.hp}
              onChange={handleChangeInput}
              placeholder="Enter your Hp"
            />
            <input
              className="controls"
              type="number"
              min={1}
              max={100}
              name="attack"
              id="attack"
              value={newPokemon.attack}
              onChange={handleChangeInput}
              placeholder="Enter your Attack"
            />
            </div>
            {errors.lim && <h4 className="erroree">{errors.lim} </h4>}
            <div className="divs">
            <input
              className="controls"
              id="defense"
              type="number"
              min={1}
              max={100}
              name="defense"
              value={newPokemon.defense}
              onChange={handleChangeInput}
              placeholder="Enter your Defense"
            />
            <input
              id="speed"
              type="number"
              className="controlss"
              name="speed"
              min={1}
              max={100}
              value={newPokemon.speed}
              onChange={handleChangeInput}
              placeholder="Enter your Speed"
            />
            </div>
            {errors.lim && <h4 className="erroree">{errors.lim} </h4>}
            <input
              className="controls"
              id="height"
              type="number"
              name="height"
              value={newPokemon.height}
              onChange={handleChangeInput}
              placeholder="Enter your Height"
            />
            {errors.lim && <h4 className="erroree">{errors.lim} </h4>}
            <input
              className="controls"
              id="weight"
              type="number"
              name="weight"
              min={0}
              value={newPokemon.weight}
              onChange={handleChangeInput}
              placeholder="Enter your Weight"
            />
            {errors.lim && <h4 className="erroree">{errors.lim} </h4>}
            <label>Select types:</label>
            <select
              className="select_F"
              name="types"
              onChange={handelChangeSelect}
            >
              {type.map((e) => (
                <option value={e.name} key={e.name}>
                  {e.name}
                </option>
              ))}
            </select>
            <Types
              type={newPokemon?.types}
              setTypes={setNewPokemon}
              newPokemon={newPokemon}
            />
            {errors.types && <h4 className="erroree_types">{errors.types} </h4>}
            <button
              className={Object.keys(errors).length ? "disabled" : "botons"}
            >
              Create Pokemon !
            </button>
          </section>
        </form>
      </div>
    </>
  );
}
