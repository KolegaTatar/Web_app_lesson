import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import '../styles/PostList.scss';


interface Post {
    id: number;
    title: string;
    body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return data;
};

function PostList() {
    const { data: posts = [], isLoading, error } = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
    });

    if (isLoading) return <p className="loading">Ładowanie...</p>;
    if (error instanceof Error) return <p className="error">Błąd: {error.message}</p>;

    return (
        <div className="post-list">
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/post/${post.id}`}>
                            <h3>{post.title}</h3>
                            <p>{post.body.substring(0, 100)}...</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostList;
