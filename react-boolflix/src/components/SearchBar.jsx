import React from "react"
export default function SearchBar({film,setFilm,tvserie, setTvSerie, onSearch}) {
const handleInput = (event) => {
    setFilm (event.target.value)
    setTvSerie (event.target.value)
}
    return(
    <div className="search-container">
        <input className="input-bar" type="text" 
        placeholder="trova un film o una serie TV..."
        value={film || tvSerie}
        onChange={handleInput}
        />
        <button onClick={onSearch}>Cerca</button>
    </div>
    )
}