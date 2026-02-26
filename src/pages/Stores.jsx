import { useState } from "react";
import { Link } from "react-router-dom";

export default function Stores() {
  const [clicked, setClicked] = useState(false);

  return (
    <section className="storesPage">
      
      <div className="storesHero">
        <h1>
          Find <span>Tomaple</span> Store
        </h1>
        <p>Visit our stores to get your potato donuts</p>
        <div className="btnWrapper">
        <Link 
          to="/stores" 
          className={`findStoreBtn ${clicked ? "active" : ""}`}
          onClick={() => setClicked(true)}
        >   
          Find Our Store
        </Link>
        </div>
      </div>
    </section>
  );
}
