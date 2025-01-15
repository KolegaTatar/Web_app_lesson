import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PostList from './components/PostList';
import CategoryPage from './pages/CategoryPage';
import PostPage from './pages/PostPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.scss';

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <Router>
            <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
                <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/posts" element={<PostList />} />
                        <Route path="/categories" element={<CategoryPage />} />
                        <Route path="/posts/:id" element={<PostPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
