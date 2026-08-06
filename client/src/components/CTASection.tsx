import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

/**
 * CTA Section Component
 * Design: Futurismo Acessível
 * - Fundo com gradiente laranja-preto
 * - Chamada à ação destacada
 * - Contato direto
 */

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Fundo com Gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-orange-900"></div>

      {/* Padrão decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-block mb-6 px-4 py-2 bg-orange-500/20 rounded-full border border-orange-500/30">
            <span className="text-orange-300 font-semibold text-sm">
              Pronto para Transformar Sua Casa?
            </span>
          </div>

          {/* Título */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Comece Sua Jornada Rumo à Casa Inteligente
          </h2>

          {/* Descrição */}
          <p className="text-xl text-orange-100 mb-10 leading-relaxed">
            Solicite uma demonstração gratuita e conheça como a PWM pode transformar sua residência em um ambiente inteligente, seguro e econômico.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-orange-600/50 flex items-center gap-2 group justify-center"
              onClick={() => alert("Solicitar demonstração - em breve!")}
            >
              Solicitar Demonstração
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition-all duration-200 flex items-center gap-2 justify-center"
              onClick={() => alert("Ligar para suporte - em breve!")}
            >
              <Phone size={20} />
              Falar com Especialista
            </Button>
          </div>

          {/* Info */}
          <p className="text-orange-200 text-sm">
            Disponível de segunda a sexta, das 8h às 18h
          </p>
        </div>
      </div>
    </section>
  );
}
