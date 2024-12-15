import { Link } from 'react-router-dom';
import '../styles/PostList.scss';

function PostList() {
    const posts = [
        { id: 1, title: 'Post 1', category: 'tech' },
        { id: 2, title: 'Post 2', category: 'lifestyle' },
        { id: 3, title: 'Post 3', category: 'tech' },
    ];

    return (
        <div className="post-list">
            {posts.map(post => (
                <div key={post.id} className="post-item">
                    <Link to={`/post/${post.id}`}>
                        <h2>{post.title}</h2>
                        <p>Category: {post.category}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default PostList;
