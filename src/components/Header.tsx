import React, { useEffect, useState } from 'react';
import { ShoppingBag, Calendar, Menu, X, Phone, MessageSquare } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { BUSINESS_INFO } from '../data/barbershopData';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onOpenScheduleModal: (defaultService?: string) => void;
  onOpenBrandGuideModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenScheduleModal, onOpenBrandGuideModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0f1115]/95 backdrop-blur-md border-b border-[#252830] py-3 shadow-xl'
          : 'bg-gradient-to-b from-[#0a0b0d]/90 via-[#0f1115]/60 to-transparent py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c59a53] rounded-lg group"
            aria-label="Barbearia O Martins - Ir para o início"
          >
            <BrandLogo variant="horizontal" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-stone-300 hover:text-[#d4a750] text-sm font-medium tracking-wide uppercase transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#c59a53] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Brand Guide Badge Modal trigger (Discreet & Elegant) */}
            <button
              onClick={onOpenBrandGuideModal}
              title="Ver Guia de Identidade Visual da Barbearia"
              className="hidden xl:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-[#333742] text-[11px] font-mono text-stone-400 hover:text-amber-300 hover:border-[#c59a53] transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#c59a53] animate-pulse"></span>
              Identidade Visual
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={toggleCart}
              className="relative p-2.5 rounded-full bg-[#181a20] hover:bg-[#22252e] border border-[#2d313d] text-stone-200 hover:text-[#d4a750] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c59a53]"
              aria-label={`Abrir carrinho de produtos, ${totalItems} itens`}
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#c59a53] text-stone-950 font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-scaleIn">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Agendar CTA Button (Desktop) */}
            <button
              onClick={() => onOpenScheduleModal()}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-gradient-to-r from-[#c59a53] via-[#d4af37] to-[#b8862f] text-stone-950 font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-[0_0_20px_rgba(197,154,83,0.4)] hover:brightness-110 active:scale-95 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-md bg-[#181a20] border border-[#2d313d] text-stone-300 hover:text-[#d4a750] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c59a53]"
              aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-[#0c0d10]/95 backdrop-blur-xl border-b border-[#252830] z-50 flex flex-col justify-between p-6 overflow-y-auto animate-fadeIn">
          <nav className="flex flex-col space-y-4 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-stone-200 hover:text-[#d4a750] text-lg font-semibold uppercase tracking-wider py-2.5 border-b border-[#1f222a] flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#c59a53]">→</span>
              </a>
            ))}

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBrandGuideModal();
              }}
              className="text-left text-sm text-stone-400 hover:text-amber-300 py-2"
            >
              ✦ Ver Guia de Identidade Visual Oficial
            </button>
          </nav>

          <div className="pt-6 space-y-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenScheduleModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-md bg-[#c59a53] text-stone-950 font-bold uppercase tracking-wider text-base shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              Agendar Horário
            </button>

            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
                'Olá! Gostaria de agendar um horário na Barbearia O Martins.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-md bg-[#181a20] border border-[#2d313d] text-stone-200 font-medium text-sm"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              WhatsApp Direto: {BUSINESS_INFO.whatsappFormatted}
            </a>

            <div className="text-center text-xs text-stone-400 pt-2 font-mono">
              Av. Heráclito Graça, 710 – Centro, Fortaleza
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
