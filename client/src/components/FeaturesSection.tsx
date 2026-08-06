import { CheckCircle2 } from "lucide-react";

/**
 * Features Section Component
 * Design: Futurismo Acessível
 * - Layout alternado: texto-imagem-texto
 * - Destaques com checkmarks
 * - Gradientes e sombras sofisticadas
 */

interface Feature {
  title: string;
  description: string;
  benefits: string[];
  image: string;
  imagePosition: "left" | "right";
}

const features: Feature[] = [
  {
    title: "Controle Inteligente",
    description: "Gerencie todos os dispositivos da sua casa a partir de um único painel. Automações personalizadas que se adaptam ao seu estilo de vida.",
    benefits: [
      "Interface intuitiva e responsiva",
      "Controle remoto via smartphone",
      "Agendamentos automáticos",
      "Integração com assistentes de voz",
    ],
    image: "/images/hero-smart-home_870ce7f8.png",

    imagePosition: "right",
  },
  {
    title: "Economia Garantida",
    description: "Reduza suas contas de água e energia com monitoramento inteligente. Relatórios detalhados mostram exatamente onde economizar.",
    benefits: [
      "Economia de até 40% em energia",
      "Alertas de consumo anormal",
      "Comparativos mensais",
      "Sugestões de otimização",
    ],
    image: "/images/medidor-inteligente_2570e1af.png",
    imagePosition: "left",
  },
  {
    title: "Segurança 24/7",
    description: "Monitore sua casa em tempo real com integração de câmeras e sensores. Receba notificações instantâneas de qualquer atividade.",
    benefits: [
      "Monitoramento em tempo real",
      "Alertas de segurança",
      "Histórico de eventos",
      "Integração com sistemas de segurança",
    ],
    image: "/images/ia-automation_fa56fc11.png",
    imagePosition: "right",
  },
];

export default function FeaturesSection() {
  return (
    <section id="recursos" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Recursos Avançados
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tecnologia de ponta para transformar sua casa em um ambiente inteligente
          </p>
        </div>

        {/* Features */}
        <div className="space-y-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fadeInUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Imagem Esquerda */}
              {feature.imagePosition === "left" && (
                <div className="hidden md:block">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-br from-orange-600/10 to-black/10 rounded-2xl blur-2xl"></div>
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="relative w-full h-auto rounded-2xl shadow-xl object-cover"
                    />
                  </div>
                </div>
              )}

              {/* Conteúdo */}
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  {feature.title}
                </h3>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {feature.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Imagem Direita */}
              {feature.imagePosition === "right" && (
                <div className="hidden md:block">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-br from-orange-600/10 to-black/10 rounded-2xl blur-2xl"></div>
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="relative w-full h-auto rounded-2xl shadow-xl object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
