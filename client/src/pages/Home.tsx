import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

/**
 * Home Page - PWM Automação Residencial
 * Design: Futurismo Acessível
 * Paleta: Laranja (#FF8C00) + Preto (#0F0F0F)
 * 
 * Seções:
 * 1. Header - Navegação e branding
 * 2. Hero - Apresentação principal
 * 3. Services - Três serviços principais
 * 4. Features - Recursos avançados
 * 5. CTA - Chamada à ação
 * 6. Footer - Informações e links
 */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
