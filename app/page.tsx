import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProofWidget from "@/components/ProofWidget";
import ProblemStats from "@/components/ProblemStats";
import ComparisonTable from "@/components/ComparisonTable";
import ProductList from "@/components/ProductList";
import HowItWorks from "@/components/HowItWorks";
import HumanControl from "@/components/HumanControl";
import CategoryComparison from "@/components/CategoryComparison";
import RoiCalculator from "@/components/RoiCalculator";
import CaseStudy from "@/components/CaseStudy";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProofWidget />
        <ProblemStats />
        <ComparisonTable />
        <ProductList />
        <HowItWorks />
        <HumanControl />
        <CategoryComparison />
        <RoiCalculator />
        <CaseStudy />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
