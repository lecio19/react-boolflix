import SearchBar from "../components/SearchBar";
import { useState } from "react";
import axios from "axios";
import Flags from "../context/Flags";
import ImgUrl from "../context/ImgUrl";
import stars from "../components/Stars";
import setFlags from "../components/SetFlags";

export default function HomePage() {
  const [film, setFilm] = useState("");
  const [tvSerie, setTvSerie] = useState("")
  const [results, setResults] = useState([]);
  
  const handleSearch = () => {
    if (!film) return; 
    Promise.all([
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=da445b1f8c881fe7432f8928e0e4f76f&query=${film}`),
        axios.get(`https://api.themoviedb.org/3/search/tv?api_key=da445b1f8c881fe7432f8928e0e4f76f&language=it_IT&query=${tvSerie}`)
      ])
        .then(([res1, res2]) => {
      })
      .catch((err) => {
        console.log("Errore durante le richieste", err);
        setResults([]); 
      });
  };
  
  return (
    <>
      <SearchBar film={film} setFilm={setFilm} setTvSerie = {setTvSerie} onSearch={handleSearch} />
      <h1>Risultati Trovati</h1>
      <ul>
        {results.length > 0 ? (
          results.map((result) => {
            const language = result.original_language
            const poster = result.poster_path
          ? `${ImgUrl.IMG_URL}${result.poster_path}`
          : `${ImgUrl.emptyIMG}`

          const vote = result.vote_average.toFixed(0)/2  
          
          return(
            <li key={result.id}>
            <h1 style={{color: result.title ? 'black' : 'red'}}>Titolo: {result.title || result.name} </h1>
            <h3>Titolo Originale: {result.original_title} {result.original_name}</h3>
            <img src={poster} alt="" />
            <p>Lingua:{result.original_language}<img src={setFlags(language)} alt="" style={{width:"35px"}}/> </p>
            <p> {stars(vote)}</p>
            </li>
           )
        })
        ) : (
          <p>Nessun risultato trovato.</p>
        )}
      </ul>
    </>
  );
}