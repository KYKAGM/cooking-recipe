import { infoCards } from "../../data/cookingTips.js";

function TipsInfo() {
    return (
    <section className="tips-info-wrapper">
        <div className="tips-info">
        {infoCards.map((item) => (
            <div key={item.id} className="tips-info-card">
            <img src={item.icon} alt={item.title} />
            <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
            </div>
            </div>
        ))}
        </div>
    </section>
    );
}

export default TipsInfo;
