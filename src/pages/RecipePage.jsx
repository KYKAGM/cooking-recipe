import { useParams , Link} from "react-router-dom";
import { recipeDetails } from "../data/recipeDetails";
import Subscribe from "../components/subscribe/Subscribe";
import iconTime from "../assets/icons/time.png";
import iconLevel from "../assets/icons/level.png";
import iconServes from "../assets/icons/serves.png";
import "../styles/recipe-page.css";

function RecipePage() {
    const { id } = useParams();
    const recipe = recipeDetails[id];

    if (!recipe) {
    return <p style={{ padding: "40px" }}>Recipe not found</p>;
    }

    return (
    <main className="recipe-page">
        <Link to="/recipes" className="back-button">
            ← Back to Menu
        </Link>
        <section className="recipe-hero">
        <span className="recipe-badge">RECIPE</span>
        <h1>{recipe.title}</h1>
        <p className="recipe-subtitle">{recipe.subtitle}</p>

        <div className="recipe-meta">
            <div className="meta-item">
                <img src={iconTime} alt="Time" className="meta-icon" />
                <span>{recipe.time}</span>
            </div>

            <div className="meta-item">
                <img src={iconLevel} alt="Level" className="meta-icon" />
                <span>{recipe.level}</span>
            </div>  

            <div className="meta-item">
                <img src={iconServes} alt="Serves" className="meta-icon" />
                <span>{recipe.serves}</span>
            </div>
        </div>
        <img src={recipe.heroImage} alt={recipe.title} />
        </section>

        <section className="recipe-body">
        <div className="recipe-text">
            {recipe.intro.map((p, i) => (
            <p key={i}>{p}</p>
            ))}

            <h2>INSTRUCTION:</h2>
            {recipe.steps.map((step, i) => (
            <div key={i} className="recipe-step">
                <h3 className="recipe-step-title">{step.title}</h3>
                <p className="recipe-step-text">{step.text}</p>
            </div>
            ))}
        </div>

        <aside className="recipe-sidebar">
            <div className="info-box">
            <h4>Ingredients</h4>
            <ul>
                {recipe.ingredients.map((item, i) => (
                <li key={i}>{item}</li>
                ))}
            </ul>
            </div>

            <div className="info-box">
            <h4>Equipment</h4>
            <ul>
                {recipe.equipment.map((item, i) => (
                <li key={i}>{item}</li>
                ))}
            </ul>
            </div>

            {/* ПРОВЕРКА ЕСЛИ ПЕРВЫЙ НЕ БУДЕТ ПУСТЫМ И ТД */}
            {recipe.nutrition && (
            <div className="info-box">
                <h4>Nutritional Value</h4>
                <p>Calories: {recipe.nutrition.calories}</p>
                <p>Protein: {recipe.nutrition.protein}</p>
                <p>Fat: {recipe.nutrition.fat}</p>
                <p>Carbs: {recipe.nutrition.carbs}</p>
            </div>
            )}
        </aside>
        </section>

        <h2 className="VideoH2">VIDEO TUTORIAL:</h2>
        {recipe.video && (
        <section className="recipe-video">
            <iframe
            src={recipe.video}
            title="Recipe video"
            allowFullScreen
            />
        </section>
        )}

        <Subscribe />
    </main>
    );
}

export default RecipePage;