import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PostsPage from './pages/PostsPage';
import PostPage from './pages/PostPage';

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<PostsPage />} />
            <Route path="/post/:id" element={<PostPage />} />
        </Routes>
    );
};

export default App;
