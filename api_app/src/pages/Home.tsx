import { Link } from 'react-router-dom';
import '../styles/Home.scss';

function HomePage() {
    return (
        <div className="home-page">
            {/* Powitanie na stronie głównej */}
            <header className="hero">
                <h1>Witamy na naszym blogu!</h1>
                <p>Twoje źródło wiedzy, inspiracji i rozrywki. Odkryj coś nowego każdego dnia!</p>
                <Link to="/posts" className="btn">Zobacz posty</Link>
            </header>

            {/* Sekcja Wyróżnione Artykuły */}
            <section className="featured">
                <h2>Wyróżnione artykuły</h2>
                <div className="featured-grid">
                    <div className="card">
                        <h3>Technologie przyszłości</h3>
                        <p>Sprawdź, jak technologie zmieniają nasz świat. Dowiedz się o najnowszych osiągnięciach w sztucznej inteligencji, blockchainie, IoT i innych dziedzinach!</p>
                    </div>
                    <div className="card">
                        <h3>Styl życia XXI wieku</h3>
                        <p>Dowiedz się, jak znaleźć równowagę między pracą a życiem osobistym. Odkryj porady, jak utrzymać zdrowy styl życia, zachowując wydajność w codziennych obowiązkach.</p>
                    </div>
                    <div className="card">
                        <h3>Poradnik podróżnika</h3>
                        <p>Odkryj najciekawsze miejsca na świecie. Przewodnik po wyjątkowych miastach, kulturach i atrakcjach turystycznych, które musisz zobaczyć!</p>
                    </div>
                </div>
            </section>

            {/* Sekcja O nas */}
            <section className="about">
                <h2>O naszym blogu</h2>
                <p>Jesteśmy zespołem pasjonatów, którzy chcą dzielić się swoją wiedzą i doświadczeniem z innymi. Naszym celem jest inspirowanie i edukowanie naszych czytelników na temat technologii, stylu życia, podróży i wielu innych fascynujących tematów.</p>
            </section>

            {/* Sekcja Opinie */}
            <section className="testimonials">
                <h2>Opinie naszych czytelników</h2>
                <div className="testimonial">
                    <p>"Blog jest niesamowity! Znajduję tutaj zawsze coś ciekawego, co rozwija moje zainteresowania. Polecam każdemu!"</p>
                    <p>- Jan Kowalski</p>
                </div>
                <div className="testimonial">
                    <p>"Świetne artykuły o nowych technologiach. Na pewno wrócę, żeby przeczytać więcej!"</p>
                    <p>- Anna Nowak</p>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
