import PostList from '../components/PostList';
import '../styles/Home.scss';

function Home(){
    return (
        <div className="home">
            <h1>Welcome to BlogApp</h1>
            <PostList />
        </div>
    );
}

export default Home;
