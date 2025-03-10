import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Import TanStack Query
import HomePage from './pages/Home';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import UserPage from './pages/UserPage';
import './styles/App.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";

const queryClient = new QueryClient(); // Tworzymy instancję QueryClient

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <div className="App">
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/posts" element={<PostListPage />} />
                            <Route path="/post/:id" element={<PostPage />} />
                            <Route path="/users" element={<UserPage />} />
                            <Route path="*" element={<h2>Strona nie została znaleziona</h2>} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </QueryClientProvider>
    );
}

export default App;
