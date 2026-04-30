import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Pricing = () => {
  const { t } = useTranslation();
  const [mode, setMode] = useState<'personnel' | 'professionnel'>('professionnel');
  const [capacity, setCapacity] = useState(24);
  const [addons, setAddons] = useState({
    cloud: true,
    notes: false,
    budget: true,
    password: false,
    inventory: false,
  });

  const basePrice = 5; // per user
  const prices = {
    cloud: 2.5,
    notes: 1.2,
    budget: 3.0,
    password: 0.8,
    inventory: 2.2,
  };

  const calculateTotal = () => {
    const addonPrice = Object.entries(addons)
      .filter(([_, enabled]) => enabled)
      .reduce((sum, [key, _]) => sum + prices[key as keyof typeof prices], 0);

    const perUser = basePrice + addonPrice;
    return mode === 'personnel' ? perUser : perUser * capacity;
  };

  const toggleAddon = (key: keyof typeof addons) => {
    setAddons(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="pt-32 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-20">
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-on-surface mb-6">{t('pricing.title')}</h1>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">{t('pricing.subtitle')}</p>
        </header>

        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1 bg-surface-container-high rounded-full">
            <button
              onClick={() => setMode('personnel')}
              className={`px-8 py-3 rounded-full font-bold transition-all ${mode === 'personnel' ? 'bg-white text-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              {t('pricing.personnel')}
            </button>
            <button
              onClick={() => setMode('professionnel')}
              className={`px-8 py-3 rounded-full font-bold transition-all ${mode === 'professionnel' ? 'bg-white text-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              {t('pricing.professionnel')}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Configurator */}
          <div className="lg:col-span-8 space-y-12">
            {mode === 'professionnel' && (
              <section className="bg-surface-container-low p-10 rounded-[2.5rem]">
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <h3 className="font-headline text-2xl font-bold">{t('pricing.users')}</h3>
                    <p className="text-on-surface-variant">{t('signup.collaborators')}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-4xl font-black text-primary">{capacity}</span>
                    <span className="text-on-surface-variant font-bold ml-2">{t('pricing.users')}</span>
                  </div>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={capacity}
                  onChange={(e) => setCapacity(parseInt(e.target.value))}
                  className="w-full h-3 bg-surface-container-highest rounded-full appearance-none cursor-pointer accent-primary"
                />
              </section>
            )}

            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.keys(addons).map((key) => (
                <button
                  key={key}
                  onClick={() => toggleAddon(key as keyof typeof addons)}
                  className={`p-8 rounded-[2rem] border-2 text-left transition-all ${addons[key as keyof typeof addons] ? 'border-primary bg-primary/5' : 'border-outline-variant hover:border-primary/50'}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="material-symbols-outlined text-3xl text-primary">
                      {key === 'cloud' ? 'cloud' : key === 'notes' ? 'edit_note' : key === 'budget' ? 'account_balance_wallet' : key === 'password' ? 'key' : 'inventory_2'}
                    </span>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${addons[key as keyof typeof addons] ? 'bg-primary border-primary' : 'border-outline-variant'}`}>
                      {addons[key as keyof typeof addons] && <span className="material-symbols-outlined text-white text-sm">check</span>}
                    </div>
                  </div>
                  <h4 className="font-headline font-bold text-lg mb-1">{t(`pricing.addons.${key}`)}</h4>
                  <p className="text-primary font-bold">+{prices[key as keyof typeof prices].toFixed(2)}€ <span className="text-on-surface-variant font-normal text-sm">/ mois</span></p>
                </button>
              ))}
            </section>
          </div>

          {/* Summary Card */}
          <div className="lg:col-span-4">
            <div className="bg-primary text-on-primary p-12 rounded-[3rem] sticky top-32 shadow-2xl shadow-primary/20">
              <h3 className="font-headline text-2xl font-bold mb-8">{t('signup.estimated_total')}</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-6xl font-black">{calculateTotal().toFixed(2).replace('.', ',')}€</span>
                <span className="text-on-primary/70 font-bold">/ mois</span>
              </div>
              <p className="text-on-primary/60 text-sm mb-12">{t('pricing.billed_annually')}</p>

              <ul className="space-y-4 mb-12">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary">check_circle</span>
                  <span>{t('signup.included')}: Email Chiffré</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary">check_circle</span>
                  <span>{t('signup.energy_title')}</span>
                </li>
              </ul>

              <button className="w-full bg-white text-primary py-5 rounded-full font-headline font-black text-xl hover:scale-105 transition-transform">
                {t('pricing.get_started')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
