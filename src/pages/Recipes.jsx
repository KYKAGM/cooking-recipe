import { useState } from "react";
import { recipes } from "../data/recipes";
import Subscribe from "../components/subscribe/Subscribe";

function Recipes() {
    const [category, setCategory] = useState("All");

    const filtered =
    category === "All"
        ? recipes
        : recipes.filter(r => r.category === category);

    return (
        <main>
            <div className="container">
                <h1>Recipes</h1>

                <select onChange={e => setCategory(e.target.value)}>
                <option>All</option>
                <option>Dinner</option>
                <option>Dessert</option>
                </select>

                {filtered.map(r => (
                <p key={r.id}>{r.title}</p>
                ))}
            </div>
            <Subscribe />
        </main>
    );
}

export default Recipes;
