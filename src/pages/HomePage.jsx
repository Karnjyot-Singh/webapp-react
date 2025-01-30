import { Link } from "react-router-dom";

function HomePage() {
   return(
      <>
         <section>
          <h1>Benvenuto nella nostra app di film!</h1>
          <p>Qui puoi lasicare la tua recensione e vedere le recensioni degli altri</p>
          <Link to="/movies" className="btn btn-primary">Vedi tutti i film</Link>
         </section>
      </>
   );
}

export default HomePage;