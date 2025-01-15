import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/PostList.scss';

interface Post {
    id: number;
    title: string;
    body: string;
}

const PostsPage: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
            setPosts(response.data);
        });
    }, []);

    return (
        <div className="post-list">
            <h1>Posty</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/post/${post.id}`}>
                            <h2>{post.title}</h2>
                            <p>{post.body.slice(0, 100)}...</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsPage;
