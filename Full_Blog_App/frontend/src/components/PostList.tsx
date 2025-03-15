import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/PostList.scss';

interface Post {
    id: number;
    tytul: string;
    tresc: string;
}

function PostList() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        axios.get('http://localhost:5000/wpisy')
            .then(response => {
                setPosts(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Błąd pobierania postów:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="post-list">
                <h1>Lista artykułów</h1>
                <div className="grid">
                    <p>Ładowanie...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="post-list">
            <h1>Lista artykułów</h1>
            <div className="grid">
                {posts.map((post, index) => (
                    <article className="post" key={index}>
                        <h2>{post.tytul}</h2>
                        <p>{post.tresc}</p>
                        <a href={`/post/${post.id}`}>Czytaj więcej</a>
                    </article>
                ))}
            </div>
        </div>
    );
}

export default PostList;
