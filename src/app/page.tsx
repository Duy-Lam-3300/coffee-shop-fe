import AboveTheFold from "@/components/Homepage/AboveTheFold";
import BrandStory from "@/components/Homepage/BrandStory";
import CoffeeBenefitsSection from "@/components/Homepage/CoffeeBenefitsSection";
import ExploreProduct from "@/components/Homepage/ExploreProduct";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full mx-auto space-y-16">
      <AboveTheFold />
      <BrandStory/>
      <CoffeeBenefitsSection />
      <ExploreProduct />
      
    </div>
  );
}
