import { Link } from 'react-router-dom';
import '../styles/UserPage.scss';


function UserList({ users }: { users: any[] }) {
    return (
        <div className="user-list">
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`/user/${user.id}`}>
                            <h3>{user.name}</h3>
                            <p>{user.email}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;
