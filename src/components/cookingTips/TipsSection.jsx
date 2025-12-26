import TipCard from "./TipCard";

function TipsSection({ title, data }) {
    return (
    <section className="tips-section">
        <h2>{title}</h2>
        <div className="tips-grid">
        {data.map(item => (
            <TipCard key={item.id} {...item} />
        ))}
        </div>
    </section>
    );
}

export default TipsSection;
