import TipCard from "./TipCard";
import { nourishing } from "../../data/cookingTips.js";

function TipsBlueSection() {
    return (
    <section className="tips-blue">
        <h2>NOURISHING EVERY PALATE</h2>
        <div className="tips-grid">
        {nourishing.map(item => (
            <TipCard key={item.id} {...item} overlay />
        ))}
        </div>
    </section>
    );
}

export default TipsBlueSection;
