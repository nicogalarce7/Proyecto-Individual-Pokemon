import React, { useState } from "react";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { getByName } from "../../Redux/Petitions";
import "./SearchBar.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [input, SetInput] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    getByName(dispatch, input)
    .catch((err) => {
      swal({
        title: "Error!",
        text: `${err.response.data}`,
        icon: "error",
        button: "Back",
      });
    });
    }
    
    const handleChange = (e) => {
      SetInput(e.target.value);
  };
  return (
    <>
      <div className="c">
        <form className="form" onSubmit={handleSubmit}>
          <input
            required
            type="text"
            id="name"
            className="input"
            onChange={handleChange}
            placeholder="Search Pokemon"
          />
        </form>
      </div>
    </>
  );
};
  
