import { useNavigate } from "react-router-dom";
import breakfast from "../../assets/icons/breakfast.png";
import lunch from "../../assets/icons/lunch.png";
import dinner from "../../assets/icons/dinner.png";
import dessert from "../../assets/icons/dessert.png";
import quickBite from "../../assets/icons/quickbite.png";


const categories = [
    { id: 1, title: "Breakfast", icon: breakfast },
    { id: 2, title: "Lunch", icon: lunch },
    { id: 3, title: "Dinner", icon: dinner },
    { id: 4, title: "Dessert", icon: dessert },
    { id: 5, title: "Quick Bite", icon: quickBite },
];

function Categories() {
    const navigate = useNavigate();
    
    return (
    <section className="palette">
        <div className="palette-left">
            <span className="badge">EXPLORE</span>
            <h1>OUR DIVERSE <br />PALETTE</h1>
            <p>
            If you are a breakfast enthusiast, a connoisseur of savory delights, or <br /> on the lookout for irresistible desserts, our curated selection has <br /> something to satisfy every palate.
            </p>
            <button className="outline-btn" onClick = {()=> navigate("/recipes")}>SEE MORE</button>
        </div>

        <div className="palette-right">
        {categories.map((cat) => (
        <div key={cat.id} className="palette-item">
            <img src={cat.icon} alt={cat.title} className="palette-icon"/>
            <span className="palette-text">
                {cat.title.toUpperCase()}
            </span>
            </div>
        ))}
        </div>
    </section>
    );
}

export default Categories;

