import { featuredRecipes } from "../../data/recipes";
import { useNavigate } from "react-router-dom";


function FeaturedRecipes() {
const navigate = useNavigate();
return (
    <section id="featured-recipes" className="featured">
    <h2 className="featured-title">FEATURED RECIPES</h2>
    <div className="featured-grid">
        {featuredRecipes.map((recipe) => (
        <div key={recipe.id} className="featured-card">
            <div className="featured-image">
            <img src={recipe.image} alt={recipe.title} />
                {recipe.badge && (
                    <div className="featured-badge">
                        <img src={recipe.badge} alt="Badge" />
                    </div>
                )}
            </div>
                <div className="featured-content">
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                    <div className="featured-footer">
                        <span>
                        {recipe.time} · {recipe.level} · {recipe.serves}
                        </span>
                        <button onClick={() => navigate(`/recipes/${recipe.id}`)} className="featured-btn">VIEW RECIPE</button>
                    </div>
                </div>
            </div>
        ))}
        </div>
    </section>
    );
}

export default FeaturedRecipes;
