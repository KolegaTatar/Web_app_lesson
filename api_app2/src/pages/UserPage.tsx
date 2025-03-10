import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import UserList from '../components/UserList';
import '../styles/UserList.scss';

const fetchUsers = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    return data;
};

function UserPage() {
    const { data: users = [], isLoading, error } = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
    });

    if (isLoading) return <p className="loading">Ładowanie...</p>;
    if (error) return (
        <div className="error">
            <h3>Wystąpił błąd podczas ładowania danych.</h3>
            <p>{error.message}</p>
        </div>
    );

    return (
        <div className="user-page">
            <h2>Lista użytkowników</h2>
            <UserList users={users} />
        </div>
    );
}

export default UserPage;
