import TipsHero from "../components/cookingTips/TipsHero";
import TipsInfo from "../components/cookingTips/TipsInfo";
import TipsSection from "../components/cookingTips/TipsSection";
import TipsBlueSection from "../components/cookingTips/TipsBlueSection";
import { masteringBasics, tipsTricks } from "../data/cookingTips.js";
import FeaturedRecipes from "../components/recipes/FeaturedRecipes";
import Subscribe from "../components/subscribe/Subscribe";

function CookingTips() {
    return (
    <>
        <TipsHero />
        <TipsInfo />
        <FeaturedRecipes />
        <TipsSection title="MASTERING THE BASICS" data={masteringBasics} />
        <TipsBlueSection />
        <TipsSection title="TIPS & TRICKS" data={tipsTricks} />
        <Subscribe />
    </>
    );
}

export default CookingTips;
