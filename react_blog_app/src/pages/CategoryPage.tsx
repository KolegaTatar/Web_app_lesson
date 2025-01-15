import '../styles/CategoryPage.scss';

function CategoryPage() {
    const categories = ['Technologia', 'Podróże', 'Styl życia', 'Zdrowie', 'Finanse'];

    return (
        <div className="category-page">
            <h1>Kategorie</h1>
            <div className="category-grid">
                {categories.map((category, index) => (
                    <button key={index} className="category-button">
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default CategoryPage;
