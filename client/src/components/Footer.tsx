import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

/**
 * Footer Component
 * Design: Futurismo Acessível
 * - Fundo preto com texto branco
 * - Links organizados em colunas
 * - Redes sociais e contato
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Coluna 1: Logo e Descrição */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/pwm-logo-novo_ca27ecda.png"
                alt="PWM Automação"
                className="w-12 h-12 object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Transformando casas em ambientes inteligentes, seguros e econômicos através de tecnologia de ponta.
            </p>
            {/* Redes Sociais */}
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-gray-900 hover:bg-orange-600 rounded-lg transition-colors duration-200"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-900 hover:bg-orange-600 rounded-lg transition-colors duration-200"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-900 hover:bg-orange-600 rounded-lg transition-colors duration-200"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Produtos */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Produtos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors duration-200">
                  Cortinas Elétricas
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors duration-200">
                  Medidores Inteligentes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors duration-200">
                  Integração IA
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors duration-200">
                  Pacotes Completos
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Empresa */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Empresa</h4>
            <ul className="space-y-3">
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-orange-600 transition-colors duration-200">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors duration-200">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors duration-200">
                  Carreira
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors duration-200">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Telefone</p>
                  <p className="text-white font-semibold">94025-7212</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-semibold">nascimentowillian781@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Localização</p>
                  <p className="text-white font-semibold">São Paulo, SP</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} PWM Automação Residencial. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-orange-600 text-sm transition-colors duration-200">
              Termos de Serviço
            </a>
            <a href="#" className="text-gray-500 hover:text-orange-600 text-sm transition-colors duration-200">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-500 hover:text-orange-600 text-sm transition-colors duration-200">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
