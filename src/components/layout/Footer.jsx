import { Link } from "react-router-dom";
import githubIcon from "../../assets/icons/github.png";

function Footer() {
    return (
    <footer className="footer">
        <div className="footer-top">
        <div className="logo-wb">
                <span className="footer-logo"></span>
            </div>

        <nav className="footer-nav">
            <Link to="/">HOME</Link>
            <Link to="/recipes">RECIPES</Link>
            <Link to="/tips">COOKING TIPS</Link>
            <Link to="/about">ABOUT US</Link>
        </nav>

        <div className="footer-socials">
            <Link to="https://github.com/KYKAGM">
                <img src = {githubIcon} alt="GitHub Icon" className="github-icon"/>
            </Link>
        </div>
        </div>

        <p className="footer-copy">
        COPYRIGHT © 2025 KYKAGM<br />
        Made for IITU university session project!
        </p>
    </footer>
    );
}

export default Footer;
