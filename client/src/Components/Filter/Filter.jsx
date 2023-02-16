import { useDispatch, useSelector } from "react-redux";
import { filterbyTypes, filterByCreated } from "../../Redux/Slices";
import "./Filter.css";

export default function Filter() {
  const { type } = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();

  function handleChangeFilterType(e) {
    return dispatch(filterbyTypes(e.target.value));
  }
  function handleChangeFilterDB(e) {
    return dispatch(filterByCreated(e.target.value))
  }

  function clearFilter(e) {
    dispatch(filterbyTypes(e.target.value));
  }
  return (
    <>
      <div className="contenedorfilter">
        <h3 className="title_filter">Filters</h3>
        <div className="form_fil">
            <select onChange={handleChangeFilterType} className="select">
              <option value="all">All</option>
              {type.map((e) => (
                <option value={e.name} key={e.name}>
                  {e.name}
                </option>
              ))}
            </select>
            <select onChange={handleChangeFilterDB} className="select">
              <option disabled value="all">
                Filter by created
              </option>
              <option value="all">All</option>
              <option value="">Api</option>
              <option value="true">Db</option>
            </select>
            <button className="btn_types" value = "all" onClick={clearFilter}>
            Clear Filter
          </button>
        </div>
      </div>
    </>
  );
}
