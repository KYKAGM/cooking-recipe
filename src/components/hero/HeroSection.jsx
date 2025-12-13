import { useNavigate } from "react-router-dom";
function HeroSection() {
    const navigate = useNavigate();

    return (
    <section id = "hero-section" className="hero">
        <div className="hero-content">
        <h1 className="hero-title">
            TURN INGREDIENTS INTO <br /> CULINARY MAGIC!
        </h1>

        <p className="hero-subtitle">
            Discover a world of flavors with carefully crafted recipes 
            that bring passion and aroma straight to your kitchen.
        </p>

        <button className="hero-btn" onClick={() => 
        {document.getElementById("featured-recipes").scrollIntoView({ behavior: "smooth" }); 
        }}
        >DISCOVER RECIPES!</button>
        </div>
    </section>
    );
}

export default HeroSection;
