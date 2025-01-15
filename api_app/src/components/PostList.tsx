import { Link } from 'react-router-dom';

function PostList({ posts }: { posts: any[] }) {
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
