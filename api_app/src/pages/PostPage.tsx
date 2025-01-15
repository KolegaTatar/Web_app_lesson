import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/PostDetails.scss';

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface User {
    id: number;
    name: string;
    email: string;
}

const PostPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<Post | null>(null);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((response) => {
            setPost(response.data);
            return axios.get(`https://jsonplaceholder.typicode.com/users/${response.data.userId}`);
        }).then((response) => {
            setUser(response.data);
        });
    }, [id]);

    if (!post || !user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="post-details">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <div className="user-info">
                <h2>Autor:</h2>
                <p>{user.name}</p>
                <p>{user.email}</p>
            </div>
        </div>
    );
};

export default PostPage;
