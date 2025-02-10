import { Link } from 'react-router-dom';
import '../styles/Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <h1 className="logo">
                    <Link to="/">Blog</Link>
                </h1>
                <div className="nav-wrapper">
                    <nav>
                        <ul className="nav-links">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/posts">Posts</Link>
                            </li>
                            <li>
                                <Link to="/users">Users</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
