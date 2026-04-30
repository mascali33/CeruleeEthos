import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.pricing'), path: '/pricing' },
    { name: t('nav.about'), path: '/about' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-2xl shadow-xl shadow-teal-900/5 h-20">
      <div className="flex justify-between items-center w-full px-8 h-full max-w-7xl mx-auto">
        <Link to="/" className="text-xl font-bold text-teal-700 tracking-tighter font-headline">
          Ethereal Commons
        </Link>
        <div className="hidden md:flex items-center gap-10 font-headline text-sm tracking-tight font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`${
                location.pathname === link.path
                  ? 'text-teal-600 font-bold border-b-2 border-teal-600 pb-1'
                  : 'text-slate-600 hover:text-teal-500 transition-colors'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <Link
          to="/signup"
          className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-headline text-sm font-bold scale-95 active:scale-90 transition-all duration-300 hover:opacity-80"
        >
          {t('nav.signup')}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
