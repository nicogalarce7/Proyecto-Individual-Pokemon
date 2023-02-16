import "./Formulario.css";

export default function Type({ type, setTypes, newPokemon }) {
  const click = (e) => {
    setTypes({
      ...newPokemon,
      types: newPokemon.types.filter((d) => d !== e.target.value),
    });
  };
  return (
    <div className="type_R">
      {type.map((d) => (
        <button onClick={click} key={d} value={d}>
          {d}
        </button>
      ))}
    </div>
  );
}