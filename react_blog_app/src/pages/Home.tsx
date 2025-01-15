import '../styles/Home.scss';

function Home() {
    return (
        <div className="home">
            <header className="hero">
                <h1>Witamy na naszym blogu</h1>
                <p>Twoje źródło wiedzy, inspiracji i rozrywki. Odkryj coś nowego każdego dnia!</p>
            </header>
            <section className="featured">
                <h2>Wyróżnione artykuły</h2>
                <div className="grid">
                    <article className="card">
                        <h3>Technologie przyszłości</h3>
                        <p>Sprawdź, jak technologie zmieniają nasz świat.</p>
                    </article>
                    <article className="card">
                        <h3>Styl życia XXI wieku</h3>
                        <p>Dowiedz się, jak znaleźć równowagę między pracą a życiem osobistym.</p>
                    </article>
                    <article className="card">
                        <h3>Poradnik podróżnika</h3>
                        <p>Odkryj najciekawsze miejsca na świecie.</p>
                    </article>
                </div>
            </section>
            <section className="about">
                <h2>O naszym blogu</h2>
                <p>
                    Jesteśmy zespołem pasjonatów, którzy chcą dzielić się swoją wiedzą i doświadczeniem z innymi.
                    Naszym celem jest inspirowanie i edukowanie.
                </p>
            </section>
        </div>
    );
}

export default Home;
