import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <footer className="bg-slate-50 w-full rounded-t-[2rem]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full px-12 py-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="text-lg font-bold text-slate-800 font-headline">Ethereal Commons</div>
          <p className="font-body text-sm leading-relaxed text-slate-500 max-w-[300px] text-center md:text-left">
            {t('footer.description')}
          </p>
        </div>
        <div className="flex gap-12 font-body text-sm">
          <div className="flex flex-col gap-3">
            <Link to="#" className="text-slate-500 hover:text-teal-500 underline-offset-4 hover:underline transition-opacity">
              {t('footer.privacy')}
            </Link>
            <Link to="/about" className="text-slate-500 hover:text-teal-500 underline-offset-4 hover:underline transition-opacity">
              {t('footer.charter')}
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="#" className="text-slate-500 hover:text-teal-500 underline-offset-4 hover:underline transition-opacity">
              {t('footer.status')}
            </Link>
            <Link to="#" className="text-slate-500 hover:text-teal-500 underline-offset-4 hover:underline transition-opacity">
              {t('footer.support')}
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center hover:opacity-80 transition-opacity">
              <span className="material-symbols-outlined text-on-surface-variant text-lg">public</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center hover:opacity-80 transition-opacity">
              <span className="material-symbols-outlined text-on-surface-variant text-lg">rss_feed</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-slate-500 text-sm">language</span>
            <select
              onChange={(e) => changeLanguage(e.target.value)}
              value={i18n.language.split('-')[0]}
              className="bg-transparent text-slate-500 text-sm font-body focus:outline-none cursor-pointer"
            >
              <option value="fr">Français</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
