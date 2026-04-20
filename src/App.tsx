import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import About from './pages/About';
import SignUp from './pages/SignUp';

function App() {
  const location = useLocation();
  const isSignUpPage = location.pathname === '/signup';

  return (
    <div className="min-h-screen flex flex-col">
      {!isSignUpPage && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
      {!isSignUpPage && <Footer />}
    </div>
  );
}

export default App;
