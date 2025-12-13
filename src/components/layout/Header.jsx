import { Link } from "react-router-dom";
import searchIcon from "../../assets/icons/search.png";

function Header() {
    return (
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">

        {/* LOGO */}
        <Link to="/" className="logo">
            <span className="navbar-logo"></span>
            <span className="logo-text">
            Cooks <br /> Delight
            </span>
    </Link>

    {/* TOGGLER */}
    <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavbar"
        aria-controls="mainNavbar">
        <span className="navbar-toggler-icon"></span>
    </button>

    {/* MENU */}
    <div className="collapse navbar-collapse justify-content-center" id="mainNavbar">
        <ul className="navbar-nav gap-4">
            <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
        </li>
            <li className="nav-item">
            <Link className="nav-link" to="/recipes">Recipes</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/tips">Cooking Tips</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/about">About Us</Link>
        </li>
        </ul>
    </div>


    <button className="search-btn" aria-label="Search">
        <img src={searchIcon} alt="Search Icon" />
    </button>
</div>
</nav>
    );
}

export default Header;
