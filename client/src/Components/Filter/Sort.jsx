import { useDispatch } from "react-redux";
import { sortByAsc, sortByAttack } from "../../Redux/Slices";
import "./Filter.css";

export default function Sort() {
  const dispatch = useDispatch();

  function handleChangeSortAsc(e) {
    return dispatch(sortByAsc(e.target.value));
  }
  function handleChangeSortAttack(e){
      dispatch(sortByAttack(e.target.value))
  };

  return (
    <>
      <div className="sort-cotainer">
        <div className="sort-form">
          <form>
            <h2>Sort</h2>
            <select className="select_S" onChange={handleChangeSortAsc}>
              <option value="asc">A-Z</option>
              <option value="des">Z-A</option>
            </select>
            <select  className="select_S" onChange={handleChangeSortAttack}>
               <option value='max'>Max Attack</option>
               <option value='min'>Min Attack</option>
            </select>
          </form>
        </div>
      </div>
    </>
  );
}
