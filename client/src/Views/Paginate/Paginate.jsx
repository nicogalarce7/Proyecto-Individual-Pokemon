import React, { useState } from "react";
import "./Paginate.css";

const Paginate = ({ page, setPage, max }) => {
  const [input, setInput] = useState(1);
 
  const nextPage = ()=>{
    setInput(input+1)
    setPage(page+1)}

  const backPage = ()=>{
        setInput(input-1)
        setPage(page-1)
  }
  return (
    <div className="container_pag">
      <button disabled={page===1||page<1} className="prevB"
      onClick={backPage}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          width={16}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <p className="page_nm">{page}</p>
      <button className="nextB"
      disabled={page===max||page>max}
      onClick={nextPage}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          width={16}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Paginate;