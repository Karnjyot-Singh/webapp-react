import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";

function MoviesPage() {
   const [movies, setMovies] = useState([]);
   const [search, setSearch] = useState("");
   const backendUrl = import.meta.env.VITE_BACKEND_URL

   const getMovies = () => {
      const params = {};
      if(search.length > 0) {
         params.search = search
      }
      axios.get(`${backendUrl}/movies`, {params}).then((resp) => {
         setMovies(resp.data.data);
         
      });
   }


  useEffect(() => {
   getMovies()
  }, []);




   return(
      <>
         <section>
            <h1>Tutti i film del mondo!</h1>
            <p>Vedi i film che abbiamo preparato per te</p>
         </section>
         <section>
            <h2>Elenco di film</h2>
            <div className="my-4 d-flex">
               <input value={search} onChange={(event) => setSearch(event.target.value)} className="form-control" type="search" aria-label="Cerca film per parola chiave" placeholder="Cerca film" />
               <button onClick={getMovies} className="btn btn-primary ms-2">Cerca</button>
            </div>
            {
               movies.length > 0 ? (
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-clos-lg-4 g-3">
               {movies.map((curMovie) =>( 
                  <div className="col" key={curMovie.id}>
                     <MovieCard movie={curMovie}/>
                  </div>
               ))}
            </div>
               ) : (
                  <div className="alert alert-warning">Non abbiamo trovato nulla, Riprova</div>
            )}
         </section>
      </>
   );
}

export default MoviesPage;