import { useParams } from 'react-router-dom';
import '../styles/CategoryPage.scss';

function CategoryPage() {
    const { category } = useParams<{ category: string }>();

    return (
        <div className="category-page">
            <h1>Category: {category}</h1>
            <p>List of posts in the {category} category.</p>
        </div>
    );
}

export default CategoryPage;
