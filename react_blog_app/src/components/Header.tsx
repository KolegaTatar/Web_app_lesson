import '../styles/Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">Blog</div>
            <div className="nav">
                <a href="/">Home</a>
                <a href="/posts">Posty</a>
                <a href="/categories">Kategorie</a>
            </div>
        </header>
    );
}

export default Header;
