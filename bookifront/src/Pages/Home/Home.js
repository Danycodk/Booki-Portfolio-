import  styles from "./Home.module.scss";
import chambre from "../../assets/images/chambre1.jpg" ;
import populaire from "../../assets/images/populaire1.jpg" ;
function Home(){

    return(
        <>
        <div className={styles.headline} >
            <h1> Trouvez votre hébergements pour des vacances de rêve</h1>
            <p> En plein centre-ville ou en pleine nature</p>
        </div>




            <form>
                <div className={styles.locationSchearch}>
                    <i class="fa-solid fa-location-dot"></i>
                </div>
                <div className= {styles.flexInputSearchButton}>
                    <input type="search" name="search" placeholder="Cherchez une chambre ici .." />
                    <button className={styles.logoSchearch}>
                        <i class="fa-solid fa-magnifying-glass"></i> 
                    </button>
                    <button className={styles.buttonTexte}> Rechercher </button>
                </div>
            </form>








            <div className={styles.filterBar} >
                <h2> Filtres</h2>
                <ul>
                    <li><i class="fa-solid fa-money-bill-wave"></i>Économique </li>
                    <li> <i class="fa-solid fa-person"></i>  Familial </li>
                    <li><i class="fa-solid fa-heart"></i>Romantique  </li>
                    <li><i class="fa-solid fa-fire"></i>Nos pépites   </li>
                </ul>
            </div>






            <div className={styles.infosBar}> 
                <div className="circle-info">
                    <i class="fa-solid fa-info"></i>
                </div>
                <p> Plus de 500 logements sont disponibles dans cette ville </p>
            </div>









            <div className={styles.sectionAside}>
                <section className={styles.section}>
                    <h2> Hébergements  </h2>
                    <figure> 
                        <img src={chambre} alt="chambre d hotel" />
                        <figcaption>
                            <h3> Auberge La Canebière </h3>
                            <p> Nuit à partir de 25€</p> 
                            <p> Etoile</p>
                        </figcaption>
                    </figure>
                </section>













                <aside className={styles.aside}>
                   <div>
                       <h2> Les plus populaires  </h2>
                       <i> </i>
                   </div>
                    <figure>
                        <img src={populaire} alt="chambre d hotel populaires" />
                        <figcaption>
                            <div>
                                <h3> Auberge La Canebière </h3>
                                <p> Nuit à partir de 25€</p> 
                            </div>
                            <p> Etoile</p>
                        </figcaption>
                    </figure>
                </aside>
            </div>












        </>
    )
}


export default Home ;