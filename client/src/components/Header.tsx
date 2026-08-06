import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

/**
 * Header Component
 * Design: Futurismo Acessível
 * - Logo PWM à esquerda
 * - Navegação limpa no centro
 * - CTA em laranja à direita
 * - Responsivo com menu mobile
 */

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-md backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/images/pwm-logo-novo_ca27ecda.png"
            alt="PWM Automação"
            className="w-12 h-12 object-contain"
          />
        </div>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#servicos" className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium relative group">
            Serviços
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#recursos" className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium relative group">
            Recursos
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#sobre" className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium relative group">
            Sobre
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#contato" className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium relative group">
            Contato
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
          </a>
        </nav>

        {/* CTA Desktop */}
        <div className="hidden md:block">
          <Button
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/30"
            onClick={() => alert("Solicitar demonstração - em breve!")}
          >
            Solicitar Orçamento
          </Button>
        </div>

        {/* Menu Mobile */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile Expandido */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#servicos" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Serviços
            </a>
            <a href="#recursos" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Recursos
            </a>
            <a href="#sobre" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Sobre
            </a>
            <a href="#contato" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Contato
            </a>
            <Button
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold w-full rounded-lg transition-all duration-200"
              onClick={() => {
                alert("Solicitar demonstração - em breve!");
                setIsOpen(false);
              }}
            >
              Solicitar Demo
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
