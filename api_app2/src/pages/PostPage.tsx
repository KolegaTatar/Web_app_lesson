import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/PostDetails.scss';

const fetchPost = async (id: string) => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return data;
};

const fetchAuthor = async (id: string) => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return data;
};

function PostPage() {
    const { id } = useParams<{ id: string }>();

    if (!id) return <div>Nieprawidłowe ID posta.</div>;

    const { data: post, isLoading: postLoading, error: postError } = useQuery({
        queryKey: ['post', id],
        queryFn: () => fetchPost(id),
    });

    const { data: author, isLoading: authorLoading, error: authorError } = useQuery({
        queryKey: ['author', id],
        queryFn: () => fetchAuthor(id),
    });

    if (postLoading || authorLoading) return <div>Ładowanie...</div>;
    if (postError || authorError) return (
        <div>
            <h2>Błąd podczas ładowania danych.</h2>
            <p>{postError?.message || authorError?.message}</p>
        </div>
    );

    return (
        <div className="post-details">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <div className="author-info">
                <h3>Autor: {author.name}</h3>
                <p>Email: {author.email}</p>
                <p>Nazwa użytkownika: {author.username}</p>
                <p>Miasto: {author.address.city}</p>
                <p>Ulica: {author.address.street}</p>
                <p>Kod pocztowy: {author.address.zipcode}</p>
                <p>Telefon: {author.phone}</p>
                <p>Strona: {author.website}</p>
                <p>Nazwa firmy: {author.company.name}</p>
            </div>
        </div>
    );
}

export default PostPage;
