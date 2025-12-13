import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import About from "./pages/About";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import RecipePage from "./pages/RecipePage";
import CookingTips from "./pages/CookingTips";
import "./App.css";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes/:id" element={<RecipePage />} />
        <Route path="/tips" element={<CookingTips />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
