import { Link } from 'react-router-dom';
import '../styles/Header.scss';

function Header(){
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">BlogApp</Link>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/category/tech">Tech</Link></li>
                    <li><Link to="/category/lifestyle">Lifestyle</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
