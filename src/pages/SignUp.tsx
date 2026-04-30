import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const SignUp = () => {
  const { t } = useTranslation();
  const [mode, setMode] = useState<'personnel' | 'professionnel'>('personnel');
  const [capacity, setCapacity] = useState(1);
  const [pack, setPack] = useState({
    cloud: true,
    notes: false,
    budget: false,
  });

  const togglePack = (key: keyof typeof pack) => {
    setPack(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const calculateTotal = () => {
    const base = 4.0;
    const cloud = pack.cloud ? 5.0 : 0;
    const notes = pack.notes ? 2.5 : 0;
    const budget = pack.budget ? 3.0 : 0;
    return (base + cloud + notes + budget) * (mode === 'professionnel' ? capacity : 1);
  };

  return (
    <div className="pt-20 min-h-screen flex flex-col lg:flex-row bg-surface-container-lowest overflow-hidden">
      {/* Left Side - Hero info */}
      <div className="lg:w-2/5 p-12 lg:p-24 flex flex-col justify-center bg-primary text-on-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="relative z-10">
          <h1 className="font-headline text-5xl lg:text-7xl font-bold mb-8 tracking-tighter">
            {t('signup.title')}
          </h1>
          <p className="text-xl text-on-primary/80 mb-12 leading-relaxed max-w-md">
            {t('signup.subtitle')}
          </p>
        </div>
        <div className="hidden lg:block">
          <div className="glass-panel p-6 rounded-xl border border-outline-variant/15 flex items-center gap-4 bg-white/70 backdrop-blur-xl">
            <div className="w-12 h-12 bg-tertiary-container rounded-full flex items-center justify-center text-on-tertiary-container">
              <span className="material-symbols-outlined text-black">energy_savings_leaf</span>
            </div>
            <div>
              <p className="font-headline font-bold text-sm text-black">{t('signup.energy_title')}</p>
              <p className="text-xs text-on-surface-variant text-black/70">{t('signup.energy_desc')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="lg:w-3/5 p-4 lg:p-12">
        <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-xl border border-outline-variant/15 rounded-[2rem] shadow-xl shadow-teal-900/5 p-8 lg:p-12">
          <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
            <section>
              <label className="block font-headline font-bold text-sm mb-4 uppercase tracking-wider text-on-surface-variant">{t('signup.account_type')}</label>
              <div className="inline-flex p-1 bg-surface-container-high rounded-full w-full sm:w-auto mb-8">
                <button
                  type="button"
                  onClick={() => setMode('personnel')}
                  className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${mode === 'personnel' ? 'bg-surface-container-lowest text-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
                >
                  {t('pricing.personnel')}
                </button>
                <button
                  type="button"
                  onClick={() => setMode('professionnel')}
                  className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${mode === 'professionnel' ? 'bg-surface-container-lowest text-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
                >
                  {t('pricing.professionnel')}
                </button>
              </div>

              {mode === 'professionnel' && (
                <div className="bg-surface-container-low p-6 rounded-2xl animate-in fade-in slide-in-from-top-4 duration-500">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <h3 className="font-headline font-bold text-on-surface">{t('signup.capacity')}</h3>
                      <p className="text-xs text-on-surface-variant">{t('signup.collaborators')}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-extrabold text-primary">{capacity}</span>
                      <span className="text-on-surface-variant text-xs font-medium ml-1">{t('pricing.users')}</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={capacity}
                    onChange={(e) => setCapacity(parseInt(e.target.value))}
                    className="w-full h-2 bg-surface-container-highest rounded-full appearance-none cursor-pointer accent-primary"
                  />
                </div>
              )}
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block font-headline font-semibold text-sm px-2" htmlFor="name">{t('signup.full_name')}</label>
                <input id="name" type="text" placeholder="Jean Dupont" className="w-full h-14 px-6 bg-surface-container-highest border-0 rounded-xl focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all" />
              </div>
              <div className="space-y-2">
                <label className="block font-headline font-semibold text-sm px-2" htmlFor="email">{t('signup.email')}</label>
                <input id="email" type="email" placeholder="jean@exemple.com" className="w-full h-14 px-6 bg-surface-container-highest border-0 rounded-xl focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="block font-headline font-semibold text-sm px-2" htmlFor="password">{t('signup.password')}</label>
                <input id="password" type="password" placeholder="••••••••" className="w-full h-14 px-6 bg-surface-container-highest border-0 rounded-xl focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all" />
              </div>
            </section>

            <section>
              <header className="mb-6">
                <h2 className="text-2xl font-headline font-bold tracking-tight">{t('signup.configure_pack')}</h2>
                <p className="text-on-surface-variant text-sm">{t('signup.pack_desc')}</p>
              </header>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Base Mail Service - Always Included */}
                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 flex flex-col gap-3 relative">
                  <div className="flex justify-between items-start">
                    <span className="material-symbols-outlined text-primary">mail</span>
                    <span className="px-2 py-0.5 rounded-full bg-primary-container text-on-primary-container text-[10px] font-bold uppercase tracking-wider">{t('signup.included')}</span>
                  </div>
                  <div>
                    <p className="font-bold font-headline">{t('signup.services_list.mail')}</p>
                    <p className="text-xs text-on-surface-variant">{t('signup.services_list.mail_desc')}</p>
                  </div>
                  <p className="text-sm font-bold text-primary">4,00€ <span className="text-xs text-on-surface-variant font-normal">{t('signup.per_user')}</span></p>
                </div>

                {[
                  { key: 'cloud', icon: 'cloud', color: 'text-primary' },
                  { key: 'notes', icon: 'edit_note', color: 'text-secondary' },
                  { key: 'budget', icon: 'account_balance_wallet', color: 'text-tertiary' },
                ].map((item) => (
                  <label key={item.key} className="group cursor-pointer relative">
                    <input
                      type="checkbox"
                      className="hidden peer"
                      checked={pack[item.key as keyof typeof pack]}
                      onChange={() => togglePack(item.key as keyof typeof pack)}
                    />
                    <div className="p-6 rounded-2xl bg-surface-container-low border border-transparent peer-checked:border-primary peer-checked:bg-surface-container-lowest transition-all flex flex-col gap-3">
                      <div className="flex justify-between items-start">
                        <span className={`material-symbols-outlined ${item.color}`}>{item.icon}</span>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${pack[item.key as keyof typeof pack] ? 'bg-primary border-primary' : 'border-outline-variant'}`}>
                          {pack[item.key as keyof typeof pack] && <span className="material-symbols-outlined text-[14px] text-white">check</span>}
                        </div>
                      </div>
                      <div>
                        <p className="font-bold font-headline">{t(`signup.services_list.${item.key}`)}</p>
                        <p className="text-xs text-on-surface-variant">{t(`signup.services_list.${item.key}_desc`)}</p>
                      </div>
                      <p className="text-sm font-bold text-primary">
                        {item.key === 'cloud' ? '5,00€' : item.key === 'notes' ? '2,50€' : '3,00€'}
                        <span className="text-xs text-on-surface-variant font-normal">{t('signup.per_month')}</span>
                      </p>
                    </div>
                  </label>
                ))}
              </div>
            </section>

            <section className="pt-8 border-t border-outline-variant/15">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <p className="text-on-surface-variant text-sm font-medium">{t('signup.estimated_total')}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold font-headline text-on-surface">{calculateTotal().toFixed(2).replace('.', ',')}€</span>
                    <span className="text-on-surface-variant font-medium">{t('signup.per_month')}</span>
                  </div>
                  <p className="text-xs text-on-surface-variant mt-1 italic">{t('signup.annual_billing_note')}</p>
                </div>
                <button type="submit" className="bg-primary text-on-primary h-16 px-12 rounded-full font-headline font-bold text-lg hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-primary/20">
                  {t('signup.create_account')}
                </button>
              </div>
              <p className="mt-8 text-center text-sm text-on-surface-variant">
                {t('signup.tos_note')}
              </p>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
