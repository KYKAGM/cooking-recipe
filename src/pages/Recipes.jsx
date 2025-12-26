import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { recipes } from "../data/recipes";
import Subscribe from "../components/subscribe/Subscribe";

const filters = ["ALL", "VEGAN", "BREAKFAST", "LUNCH", "DINNER", "DESSERT", "QUICK BITE"];

function Recipes() {
    const [activeFilter, setActiveFilter] = useState("ALL");
    const navigate = useNavigate();

    const filteredRecipes =
    activeFilter === "ALL"
        ? recipes
        : recipes.filter(
            (r) => r.category === activeFilter || r.tags.includes(activeFilter)
        );

    return (
    <section className="recipes-page">
        <span className="badge">RECIPES</span>
        <h1>EMBARK ON A<br />JOURNEY</h1>
        <p className="recipes-subtitle">
        With our diverse collection of recipes we have something to <br /> satisfy every palate.
        </p>

        <div className="recipes-filters">
        {filters.map((filter) => (
            <button
            key={filter}
            className={activeFilter === filter ? "filter-btn active" : "filter-btn"}
            onClick={() => setActiveFilter(filter)}
            >
            {filter}
            </button>
        ))}
        </div>

        <div className="recipes-grid">
        {filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
                <img src={recipe.image} alt={recipe.title} />
                
            <div className="recipe-content">
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>

                <div className="recipe-footer">
                <span>
                    {recipe.time} · {recipe.level} · {recipe.serves}
                </span>
                <button
                    className="recipe-btn"
                    onClick={() => navigate(`/recipes/${recipe.id}`)}
                >
                    VIEW RECIPE
                </button>
                </div>
            </div>
            </div>
        ))}
        </div>
        <Subscribe />
    </section>
    );
}

export default Recipes;
