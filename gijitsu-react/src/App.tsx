import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="bg-background min-h-screen selection:bg-primary selection:text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={
            <>
              <Navbar />
              <Privacy />
              <Footer />
            </>
          } />
          <Route path="/terms" element={
            <>
              <Navbar />
              <Terms />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
