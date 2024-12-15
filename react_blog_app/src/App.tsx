import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PostPage from './pages/PostPage';
import CategoryPage from './pages/CategoryPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.scss';

function App(){
    return (
        <Router>
            <Header />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/post/:id" element={<PostPage />} />
                    <Route path="/category/:category" element={<CategoryPage />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
