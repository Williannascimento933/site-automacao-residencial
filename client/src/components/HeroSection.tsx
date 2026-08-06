import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/**
 * Hero Section Component
 * Design: Futurismo Acessível
 * - Layout assimétrico: texto à esquerda, imagem à direita
 * - Gradiente laranja-preto sutil no fundo
 * - Animação de entrada suave
 */

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-32">
      {/* Gradiente de fundo sutil */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-600 to-black rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Conteúdo Esquerdo */}
          <div className="animate-slideInLeft">
            <div className="inline-block mb-4 px-4 py-2 bg-orange-100 rounded-full">
              <span className="text-orange-600 font-semibold text-sm">
                Tecnologia Inteligente para Sua Casa
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
              Sua Casa Inteligente, <span className="text-orange-600">No Seu Controle</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Automação residencial de ponta com cortinas elétricas, medidores inteligentes de água e energia, e integração com IA. Controle sua casa com precisão e economia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/40 flex items-center gap-2 group"
                onClick={() => alert("Solicitar demonstração - em breve!")}
              >
                Solicitar Demonstração
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                className="border-2 border-gray-300 text-black hover:border-orange-600 hover:text-orange-600 font-semibold px-8 py-3 rounded-lg transition-all duration-200"
                onClick={() => alert("Saiba mais - em breve!")}
              >
                Saiba Mais
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-8">
              <div>
                <p className="text-3xl font-bold text-orange-600">500+</p>
                <p className="text-gray-600 text-sm">Casas Automatizadas</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-orange-600">40%</p>
                <p className="text-gray-600 text-sm">Economia de Energia</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-orange-600">24/7</p>
                <p className="text-gray-600 text-sm">Suporte Técnico</p>
              </div>
            </div>
          </div>

          {/* Imagem Direita */}
          <div className="animate-slideInRight hidden md:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-orange-600/20 to-black/20 rounded-2xl blur-2xl"></div>

              <img
                src="/images/hero-smart-home_870ce7f8.png"
                alt="Casa Inteligente PWM"
                className="relative w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
