import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-50 w-full rounded-t-[2rem]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full px-12 py-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="text-lg font-bold text-slate-800 font-headline">Ethereal Commons</div>
          <p className="font-body text-sm leading-relaxed text-slate-500 max-w-[300px] text-center md:text-left">
            © 2024 The Ethereal Commons. Fier membre du collectif CHATONS.
          </p>
        </div>
        <div className="flex gap-12 font-body text-sm">
          <div className="flex flex-col gap-3">
            <Link to="#" className="text-slate-500 hover:text-teal-500 underline-offset-4 hover:underline transition-opacity">
              Politique de confidentialité
            </Link>
            <Link to="/about" className="text-slate-500 hover:text-teal-500 underline-offset-4 hover:underline transition-opacity">
              Charte éthique
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="#" className="text-slate-500 hover:text-teal-500 underline-offset-4 hover:underline transition-opacity">
              État du réseau
            </Link>
            <Link to="#" className="text-slate-500 hover:text-teal-500 underline-offset-4 hover:underline transition-opacity">
              Support
            </Link>
          </div>
        </div>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center hover:opacity-80 transition-opacity">
            <span className="material-symbols-outlined text-on-surface-variant text-lg">public</span>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center hover:opacity-80 transition-opacity">
            <span className="material-symbols-outlined text-on-surface-variant text-lg">rss_feed</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
