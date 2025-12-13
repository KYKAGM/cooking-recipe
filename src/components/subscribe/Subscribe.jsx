import { useState } from "react";

function Subscribe() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
        alert("Please enter a valid email");
        return;
    }

    alert(`Thanks for subscribing, ${email}!`);
    setEmail("");
    };
    
    return (
    <section className="subscribe">
        <span className="subscribe-label">SUBSCRIBE</span>

        <h2 className="subscribe-title">
        JOIN THE FUN <br /> SUBSCRIBE NOW!
        </h2>

        <p className="subscribe-text">
        Subscribe to our newsletter for a weekly serving of recipes,
        cooking tips, and exclusive insights straight to your inbox.
        </p>

        <div className="subscribe-form">
        <form className="subscribe-form" onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                required
            />
        <button type="submit">SUBSCRIBE</button>
        </form>
        </div>
    </section>
    );
}

export default Subscribe;
