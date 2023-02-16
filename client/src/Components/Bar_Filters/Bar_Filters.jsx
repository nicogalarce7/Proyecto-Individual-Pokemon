import Filter from "../Filter/Filter";
import Sort from "../Filter/Sort";
import SearchBar from "../SearchBar/SearchBar";
import "./Bar_Filters.css";


export default function Bar_Filters() {
    return (
        <>
            <div className="contenedorFilters">
                <div className="filter_Div">
                    <SearchBar />
                </div>
                <div className="filter_Div">
                    <Filter />
                </div>
                <div className="filter_Div">

                    <Sort />
                </div>
            </div>
        </>
    );
}
