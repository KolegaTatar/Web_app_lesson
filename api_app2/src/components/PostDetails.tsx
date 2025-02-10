import { Link } from 'react-router-dom';

function PostDetails({ post }: { post: any }) {
    return (
        <div className="post-details">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link to="/posts">Powrót do listy postów</Link>
        </div>
    );
}

export default PostDetails;
