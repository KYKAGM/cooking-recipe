import { useParams } from "react-router-dom";
import { recipes } from "../data/recipes";
import Subscribe from "../components/subscribe/Subscribe";

function RecipePage() {
    const { id } = useParams();
    const recipe = recipes.find(r => r.id === Number(id));

    if (!recipe) return <p>Recipe not found</p>;


    return (
    <main>
        <div className="container">
        <h1>{recipe.title}</h1>
        <p>Category: {recipe.category}</p>
        <p>Time: {recipe.time} min</p>
        </div>
        <Subscribe />
    </main>

    );
}

export default RecipePage;
