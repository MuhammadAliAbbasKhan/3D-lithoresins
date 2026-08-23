import React, { useState } from 'react';
import { ToastProvider } from './context/ToastContext';
import { ToastNotification } from './components/common/ToastNotification';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { AuthModal } from './components/common/AuthModal';
import { CheckoutModal } from './components/common/CheckoutModal';
import { TrialModal } from './components/common/TrialModal';
import { SearchModal } from './components/common/SearchModal';

import { HomePage } from './pages/HomePage';
import { DesignerPage } from './pages/DesignerPage';
import { ProductsPage } from './pages/ProductsPage';
import { ApplicationsPage } from './pages/ApplicationsPage';
import { ShopPage } from './pages/ShopPage';
import { SupportPage } from './pages/SupportPage';
import { AboutPage } from './pages/AboutPage';
import { AdminPage } from './pages/AdminPage';
import { PremiumConsultationPage } from './pages/PremiumConsultationPage';
import { LegalPage } from './pages/LegalPage';

function MainApp() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentUser, setCurrentUser] = useState(null);

  // Modals state
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isTrialOpen, setIsTrialOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleLoginSuccess = (user, triggerCheckout = false) => {
    setCurrentUser(user);
    if (triggerCheckout) {
      setIsCheckoutOpen(true);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} onOpenTrial={() => setIsTrialOpen(true)} onOpenAuth={() => setIsAuthOpen(true)} />;
      case 'designer':
        return <DesignerPage />;
      case 'products':
        return <ProductsPage setCurrentPage={setCurrentPage} onOpenTrial={() => setIsTrialOpen(true)} />;
      case 'applications':
        return <ApplicationsPage setCurrentPage={setCurrentPage} />;
      case 'shop':
        return <ShopPage onOpenAuth={() => setIsAuthOpen(true)} currentUser={currentUser} onOpenCheckout={() => setIsCheckoutOpen(true)} />;
      case 'support':
        return <SupportPage />;
      case 'about':
        return <AboutPage onOpenTrial={() => setIsTrialOpen(true)} />;
      case 'admin':
        return <AdminPage />;
      case 'premium-consultation':
        return <PremiumConsultationPage currentUser={currentUser} onOpenAuth={() => setIsAuthOpen(true)} />;
      case 'legal-notice':
      case 'privacy-statement':
      case 'terms-conditions':
      case 'service-specification':
      case 'how-to-order':
        return <LegalPage type={currentPage} setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} onOpenTrial={() => setIsTrialOpen(true)} onOpenAuth={() => setIsAuthOpen(true)} />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#050811' }}>
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        currentUser={currentUser}
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onLogout={handleLogout}
      />

      <main style={{ flex: 1 }}>
        {renderPage()}
      </main>

      <Footer setCurrentPage={setCurrentPage} />

      {/* Global Modals */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        currentUser={currentUser}
        onPaymentSuccess={(updatedUser) => setCurrentUser(updatedUser)}
      />

      <TrialModal
        isOpen={isTrialOpen}
        onClose={() => setIsTrialOpen(false)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        setCurrentPage={setCurrentPage}
      />

      <ToastNotification />
    </div>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <MainApp />
    </ToastProvider>
  );
}
