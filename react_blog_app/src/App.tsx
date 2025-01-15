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

    return (
        <Router>
            <Header/>
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/posts" element={<PostList />} />
                    <Route path="/categories" element={<CategoryPage />} />
                    <Route path="/posts/:id" element={<PostPage />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
