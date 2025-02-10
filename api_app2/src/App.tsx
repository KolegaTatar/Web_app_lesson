import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Używamy Routes zamiast Switch
import HomePage from './pages/Home';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import UserPage from './pages/UserPage';
import './styles/App.scss';
import './styles/Home.scss';
import './styles/PostListPage.scss';
import './styles/PostDetails.scss';
import './styles/PostList.scss';
import './styles/UserList.scss';
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/posts" element={<PostListPage />} />
                        <Route path="/post/:id" element={<PostPage />} />
                        <Route path="/users" element={<UserPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
