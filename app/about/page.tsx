import { Foundations } from "@/components/about/foundations";
import AboutHero from "@/components/about/hero";
import { MissionStatement } from "@/components/about/missionstatement";
import { NewsletterBlock } from "@/components/about/newsletterblock";
import PrinciplesGrid from "@/components/about/principlegrid";
import Footer from "@/components/home/footer";
import Navbar from "@/components/navbar";

export default function AboutPage() {
    return (
        <div className="min-h-screen max-w-screen bg-linear-to-b from-[#F9EDE7] to-[#FEFBF8]">
            <Navbar />
            <main>
            <AboutHero />
            <PrinciplesGrid />
            <MissionStatement />
            <Foundations />
            <section className="bg-purple-50 py-24 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Talk better. Feel safer. Connect deeper.
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Nova guides the conversations that matter most.
            </p>

            <div className="flex flex-col items-center space-y-4">
              <button className="bg-[#6D4C7D] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#5a3e68] transition-colors shadow-md">
                Join Nova early access
              </button>
              <p className="text-sm text-gray-500">
                Be among the first to experience the future of human
                communication
              </p>
            </div>
          </div>
        </section>
        <NewsletterBlock />
        </main>
        <Footer />
        </div>
    );
}