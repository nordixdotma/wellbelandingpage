import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ProSection from "@/components/pro-section"
import ProFeatures from "@/components/pro-features"
import ClientSection from "@/components/client-section"
import ExperienceSection from "@/components/experience-section"
import RevolutionSection from "@/components/revolution-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <ProSection />
      <ProFeatures />
      <ClientSection />
      <ExperienceSection />
      <RevolutionSection />
      <Footer />
    </main>
  )
}
