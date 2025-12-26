import { useState } from "react";
import { Link } from "react-router-dom";
import { recipeDetails } from "../../data/recipeDetails";
import searchIcon from "../../assets/icons/search.png";


function Header() {
    const [searchTerm, setSearchTerm] = useState("");
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const searchResults = Object.values(recipeDetails).filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) && searchTerm !== ""
    );

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to="/" className="logo">
                    <span className="navbar-logo"></span>
                    <span className="logo-text">
                        Cooks <br /> Delight
                    </span>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="mainNavbar">
                    <ul className="navbar-nav gap-4">
                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/recipes">Recipes</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/tips">Cooking Tips</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/about">News</Link></li>
                    </ul>
                </div>

                <div className="search-container">
                    {isSearchVisible && (
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Find a recipe..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            autoFocus
                        />
                    )}
                    <button 
                        className="search-btn" 
                        onClick={() => setIsSearchVisible(!isSearchVisible)}
                    >
                        <img src={searchIcon} alt="Search Icon" />
                    </button>

                    {searchResults.length > 0 && (
                        <div className="search-results-dropdown">
                            {searchResults.map((recipe) => (
                            <Link 
                            key={recipe.id} 
                            to={`/recipes/${recipe.id}`} 
                            className="search-result-item"
                            onClick={() => {
                                setSearchTerm(""); 
                                setIsSearchVisible(false); 
                            }}>
                                <img src={recipe.heroImage} alt={recipe.title} />
                                <span>{recipe.title}</span>
                            </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Header;