import logo from './logo.svg';
import './App.css';
import './components/Header';
import Header from './components/Header';
import Hero from './components/Hero';
import Blog from './components/Blog';
import About from './components/About';
import Process from './components/Process';
import Fact from './components/Fact';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div>
        <>
    {/* Page Preloder */}
    <div id="preloder">
      <div className="loader" />
    </div>
    {/* Header section */}
    <Header />
    {/* Header section end */}
    {/* Hero section */}
    <Hero />
    {/* Hero section end */}
    {/* About section */}
    <About />
    {/* About section end */}
    {/* Features section */}
    <Features />
    {/* Features section end */}
    {/* Process section */}
    <Process />
    {/* Process section end */}
    {/* Fact section */}
    <Fact />
    {/* Fact section end */}
    {/* Team section */}
    {/* Team section */}
    {/* Review section */}
    {/* Review section end */}
    {/* Newsletter section */}
    {/* Newsletter section end */}
    {/* Blog section */}
    <Blog />
    {/* Blog section end */}
    {/* Footer section */}
    <Footer />
  </>
    </div>
  );
}

export default App;
