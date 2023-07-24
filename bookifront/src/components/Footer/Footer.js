import  styles from "./Footer.module.scss";
function Footer(){

    return(
        <>
            <footer  className={styles.footer}>
                <div >
                    <h2>À propos  </h2>
                    <p> Fonctionnement du site</p>
                    <p> Conditions générales </p>
                    <p> Données et confidentialité </p>

                </div>
                <div>
                    <h2>Nos hébergements </h2>
                    <p> Charte qualité </p>
                    <p> Proposer votre hôtel </p>
                </div>
                <div>
                    <h2> Assistance </h2>
                    <p> Centre d'aide </p>
                    <p> Nous contacter </p>
                </div>
            </footer>
        </>
    )
}


export default Footer ;