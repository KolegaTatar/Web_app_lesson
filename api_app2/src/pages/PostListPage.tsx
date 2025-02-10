import { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from '../components/PostList';

function PostListPage() {
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => setPosts(response.data));
    }, []);

    return (
        <div className="post-list-page">
            <h2>Lista postów</h2>
            <PostList posts={posts} />
        </div>
    );
}

export default PostListPage;
