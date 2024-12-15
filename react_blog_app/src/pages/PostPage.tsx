import { useParams } from 'react-router-dom';
import '../styles/PostPage.scss';

function PostPage() {
    const { id } = useParams<{ id: string }>();

    return (
        <div className="post-page">
            <h1>Post {id}</h1>
            <p>This is the content of the post with ID {id}.</p>
        </div>
    );
}

export default PostPage;
