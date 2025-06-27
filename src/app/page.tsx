
import AboveTheFold from "@/components/homepage/AboveTheFold";
import BrandStory from "@/components/homepage/BrandStory";
import CoffeeBenefitsSection from "@/components/homepage/CoffeeBenefitsSection";
import ExploreProduct from "@/components/homepage/ExploreProduct";

export default function Home() {
  return (
    <div className="w-full mx-auto space-y-16 select-none">
      <AboveTheFold />
      <BrandStory />
      <CoffeeBenefitsSection />
      <ExploreProduct />
    </div>
  );
}
