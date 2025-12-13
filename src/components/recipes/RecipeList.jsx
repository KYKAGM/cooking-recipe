import RecipeCard from "./RecipeCard";

function RecipeList({ recipes }) {
    return (
    <div className="row">
        {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
    </div>
    );
}

export default RecipeList;
