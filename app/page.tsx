import Navbar from "@/components/navbar";
import Hero from "@/components/home/hero";
import ValueProposition from "@/components/home/valueprop";
import UseCases from "@/components/home/usecases";
import ResearchModel from "@/components/home/researchmodel";
import Footer from "@/components/home/footer";
export default function Home() {
  return (
    <div className="min-h-screen max-w-screen bg-[#FAF75]">
      <Navbar />
      <Hero />
      <ValueProposition />
      <UseCases />
      <ResearchModel />
      <Footer />
    </div>
  );
}
