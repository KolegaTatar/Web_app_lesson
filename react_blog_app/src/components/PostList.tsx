import '../styles/PostList.scss';

function PostList() {
    const posts = Array.from({ length: 12 }, (_, i) => ({
        title: `Artykuł ${i + 1}`,
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }));

    return (
        <div className="post-list">
            <h1>Lista artykułów</h1>
            <div className="grid">
                {posts.map((post, index) => (
                    <article className="post" key={index}>
                        <h2>{post.title}</h2>
                        <p>{post.excerpt}</p>
                        <a href="#">Czytaj więcej</a>
                    </article>
                ))}
            </div>
        </div>
    );
}

export default PostList;
