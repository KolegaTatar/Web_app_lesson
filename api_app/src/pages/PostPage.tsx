// src/pages/PostPage.tsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/PostDetails.scss';

function PostPage() {
    const { id } = useParams<{ id: string }>(); // Pobieranie parametru 'id' z URL
    const [post, setPost] = useState<any>(null);
    const [author, setAuthor] = useState<any>(null);

    useEffect(() => {
        if (id) {
            // Pobierz dane postu
            axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then(response => {
                    setPost(response.data);
                })
                .catch(error => console.error(error));

            // Pobierz dane użytkownika (autora postu)
            axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(response => {
                    setAuthor(response.data);
                })
                .catch(error => console.error(error));
        }
    }, [id]);

    if (!post || !author) {
        return <div>Loading...</div>;
    }

    return (
        <div className="post-details">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <div className="author-info">
                <h3>Autor: {author.name}</h3>
                <p>Email: {author.email}</p>
                <p>Telefon: {author.phone}</p>
            </div>
        </div>
    );
}

export default PostPage;
