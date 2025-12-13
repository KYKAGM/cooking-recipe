import HeroSection from "../components/hero/HeroSection";
import Categories from "../components/recipes/Categories";
import FeaturedRecipes from "../components/recipes/FeaturedRecipes";
import Subscribe from "../components/subscribe/Subscribe";

function Home() {
    return (
    <main>
        <HeroSection />
        <Categories />
        <FeaturedRecipes />
        <Subscribe />
    </main>
    );
}

export default Home;
