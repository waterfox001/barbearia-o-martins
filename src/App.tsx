/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Benefits } from './components/Benefits';
import { About } from './components/About';
import { HowItWorks } from './components/HowItWorks';
import { Gallery } from './components/Gallery';
import { MidCTA } from './components/MidCTA';
import { Products } from './components/Products';
import { Testimonials } from './components/Testimonials';
import { InstagramSection } from './components/InstagramSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { CartDrawer } from './components/CartDrawer';
import { ScheduleModal } from './components/ScheduleModal';
import { LegalModal } from './components/LegalModal';
import { BrandGuideModal } from './components/BrandGuideModal';
import { ServiceItem } from './types';

export default function App() {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [isBrandGuideOpen, setIsBrandGuideOpen] = useState(false);

  const handleOpenSchedule = (service?: ServiceItem) => {
    setSelectedService(service || null);
    setIsScheduleOpen(true);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#0d0e11] text-stone-200 selection:bg-[#c59a53] selection:text-black font-sans antialiased">
        {/* Fixed Header */}
        <Header
          onOpenScheduleModal={() => handleOpenSchedule()}
          onOpenBrandGuideModal={() => setIsBrandGuideOpen(true)}
        />

        {/* Main Content Sections */}
        <main>
          {/* 1. Hero Section */}
          <Hero onOpenScheduleModal={() => handleOpenSchedule()} />

          {/* 2. Services Section */}
          <Services onSelectServiceForScheduling={(svc) => handleOpenSchedule(svc)} />

          {/* 3. Differentials / Benefits */}
          <Benefits />

          {/* 4. About the Barbershop */}
          <About />

          {/* 5. How It Works (3 Steps) */}
          <HowItWorks onOpenScheduleModal={() => handleOpenSchedule()} />

          {/* 6. Visual Gallery */}
          <Gallery />

          {/* 7. Mid-page High Conversion CTA */}
          <MidCTA onOpenScheduleModal={() => handleOpenSchedule()} />

          {/* 8. Products Store */}
          <Products />

          {/* 9. Testimonials & Google Reviews */}
          <Testimonials />

          {/* 10. Instagram Feed */}
          <InstagramSection />

          {/* 11. Location & Working Hours */}
          <LocationSection />

          {/* 12. Contact Channels */}
          <ContactSection />

          {/* 13. Final CTA */}
          <FinalCTA onOpenScheduleModal={() => handleOpenSchedule()} />
        </main>

        {/* Footer */}
        <Footer
          onOpenPrivacy={() => setLegalModalType('privacy')}
          onOpenTerms={() => setLegalModalType('terms')}
          onOpenBrandGuide={() => setIsBrandGuideOpen(true)}
        />

        {/* Mobile Sticky Bottom Navigation Bar */}
        <MobileBottomBar onOpenScheduleModal={() => handleOpenSchedule()} />

        {/* Interactive Drawers and Modals */}
        <CartDrawer />
        <ScheduleModal
          isOpen={isScheduleOpen}
          onClose={() => setIsScheduleOpen(false)}
          defaultService={selectedService}
        />
        <LegalModal
          type={legalModalType}
          onClose={() => setLegalModalType(null)}
        />
        <BrandGuideModal
          isOpen={isBrandGuideOpen}
          onClose={() => setIsBrandGuideOpen(false)}
        />
      </div>
    </CartProvider>
  );
}
