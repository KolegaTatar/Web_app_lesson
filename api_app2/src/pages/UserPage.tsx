import { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from '../components/UserList';

function UserPage() {
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => setUsers(response.data));
    }, []);

    return (
        <div className="user-page">
            <h2>Lista użytkowników</h2>
            <UserList users={users} />
        </div>
    );
}

export default UserPage;
