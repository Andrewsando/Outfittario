import LinkButton from "../components/LinkButton";
import "./Home.css";

function Home (){

    return (
        <main className="home-page">
            <section className="home-content">
                <h1>Outfitario</h1>
                <div className="home-actions">
                    <LinkButton link="/closet" text="Ir al closet" />
                    <LinkButton link="/outfit" text="Pedir outfit" />
                </div>
            </section>
        </main>
    )
}

export default Home;