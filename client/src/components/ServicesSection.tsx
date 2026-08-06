import { Zap, Droplet, Brain } from "lucide-react";

/**
 * Services Section Component
 * Design: Futurismo Acessível
 * - Grid de 3 cards com ícones laranja
 * - Hover effects com glow e elevação
 * - Imagens dos produtos
 */

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  features: string[];
}

const services: ServiceCard[] = [
  {
    icon: <Zap className="w-12 h-12 text-orange-600" />,
    title: "Cortinas Elétricas",
    description: "Controle automático de cortinas com precisão. Integração com sensores de luz e temperatura para conforto otimizado.",
    image: "/images/cortina-eletrica.png",
    features: ["Controle remoto", "Automação por horário", "Sensores inteligentes"],
  },
  {
    icon: <Droplet className="w-12 h-12 text-orange-600" />,
    title: "Medidores Inteligentes",
    description: "Monitore consumo de água e energia em tempo real. Identifique padrões e economize até 40% nas contas.",
    image: "/images/medidor-inteligente_2570e1af.png",
    features: ["Leitura em tempo real", "Alertas de consumo", "Relatórios detalhados"],
  },
  {
    icon: <Brain className="w-12 h-12 text-orange-600" />,
    title: "Integração com IA",
    description: "Inteligência artificial que aprende seus hábitos e otimiza automaticamente o consumo de energia.",
    image: "/images/ia-automation_fa56fc11.png",
    features: ["Aprendizado contínuo", "Previsões precisas", "Automação inteligente"],
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluções completas de automação residencial para modernizar sua casa
          </p>
        </div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:translate-y-[-8px] animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Imagem do Serviço */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-orange-100 to-gray-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                {/* Ícone */}
                <div className="mb-4 p-3 bg-orange-100 rounded-lg w-fit group-hover:bg-orange-600 transition-all duration-300">
                  <div className="group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Título */}
                <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Descrição */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="mt-6 w-full py-2 px-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/30 group-hover:shadow-lg">
                  Saiba Mais
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
