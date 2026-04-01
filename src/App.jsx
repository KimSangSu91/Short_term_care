import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import News from './components/News';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans antialiased text-gray-900 bg-white selection:bg-emerald-200 selection:text-emerald-900">
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main>
        <Hero isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        <News />
        <Features />
        <Testimonials />
        <Benefits onOpenModal={() => setIsModalOpen(true)} />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
