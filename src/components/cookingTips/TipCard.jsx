function TipCard({ image, title, text, overlay }) {
    return (
    <div className={`tip-card ${overlay ? "overlay" : ""}`}>
        <img src={image} alt={title} />
        <div className="tip-content">
        <h4>{title}</h4>
        {text && <p>{text}</p>}
        {!overlay && <button className="outline-btn">READ MORE</button>}
        </div>
    </div>
    );
}

export default TipCard;
