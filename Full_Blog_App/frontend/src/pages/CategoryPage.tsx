import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Dodajemy Link do nawigacji po kliknięciu na kategorię
import '../styles/CategoryPage.scss';

interface Category {
    id: number;
    nazwa: string;
}

function CategoryPage() {
    const [categories, setCategories] = useState<Category[]>([]); // Stan do przechowywania kategorii
    const [loading, setLoading] = useState<boolean>(true); // Stan ładowania
    const [error, setError] = useState<string | null>(null); // Stan na błędy, jeżeli wystąpią

    // Pobieranie kategorii z backendu
    useEffect(() => {
        axios.get('http://localhost:5000/kategorie')  // Zmieniamy na endpoint backendu
            .then(response => {
                setCategories(response.data);  // Ustawiamy pobrane dane w stanie
                setLoading(false);  // Zmieniamy stan na "załadowano"
            })
            .catch(error => {
                console.error('Błąd pobierania kategorii:', error);
                setError('Nie udało się załadować kategorii. Spróbuj ponownie później.');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="category-page">
                <h1>Kategorie</h1>
                <div className="category-grid">
                    <p>Ładowanie...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="category-page">
                <h1>Kategorie</h1>
                <div className="category-grid">
                    <p>{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="category-page">
            <h1>Kategorie</h1>
            <div className="category-grid">
                {categories.map((category) => (
                    <Link to={`/category/${category.id}`} key={category.id} className="category-button">
                        {category.nazwa}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default CategoryPage;
