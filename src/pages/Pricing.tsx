import { useState } from 'react';

const Pricing = () => {
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

  const effectiveCapacity = mode === 'personnel' ? 1 : capacity;

  const calculateMonthly = () => {
    let perUserTotal = basePrice;
    if (addons.cloud) perUserTotal += prices.cloud;
    if (addons.notes) perUserTotal += prices.notes;
    if (addons.budget) perUserTotal += prices.budget;
    if (addons.password) perUserTotal += prices.password;
    if (addons.inventory) perUserTotal += prices.inventory;
    return (perUserTotal * effectiveCapacity).toFixed(2);
  };

  const toggleAddon = (addon: keyof typeof addons) => {
    setAddons({ ...addons, [addon]: !addons[addon] });
  };

  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <header className="mb-16 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-surface-container-low text-primary mb-6">
          <span className="material-symbols-outlined text-sm">payments</span>
          <span className="font-label text-xs font-bold tracking-widest uppercase">Estimations Transparentes</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-on-background mb-6 leading-tight">
          Hébergement éthique, <br /><span className="text-primary">adapté à votre échelle.</span>
        </h1>
        <p className="text-lg text-on-surface-variant leading-relaxed">
          Configurez votre jardin numérique avec précision. Notre suite collaborative évolue avec votre collectif, garantissant la souveraineté de vos données et la prévisibilité de votre budget.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <section className="lg:col-span-7 space-y-8">
          <div className="bg-surface-container-low p-2 rounded-xl inline-flex w-full md:w-auto">
            <button
              onClick={() => setMode('personnel')}
              className={`flex-1 md:flex-none px-8 py-3 rounded-lg text-sm font-bold transition-all ${mode === 'personnel' ? 'bg-surface-container-lowest text-on-surface shadow-sm' : 'text-on-surface-variant hover:text-primary'}`}
            >
              Personnel
            </button>
            <button
              onClick={() => setMode('professionnel')}
              className={`flex-1 md:flex-none px-8 py-3 rounded-lg text-sm font-bold transition-all ${mode === 'professionnel' ? 'bg-surface-container-lowest text-on-surface shadow-sm' : 'text-on-surface-variant hover:text-primary'}`}
            >
              Professionnel
            </button>
          </div>

          <div className="bg-surface-container-lowest p-8 md:p-10 rounded-[2rem] shadow-xl shadow-on-surface/5">
            {mode === 'professionnel' && (
              <div className="mb-12">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-on-background">Capacité</h3>
                    <p className="text-sm text-on-surface-variant">Nombre de collaborateurs actifs</p>
                  </div>
                  <div className="text-right">
                    <span className="text-4xl font-extrabold text-primary">{capacity}</span>
                    <span className="text-on-surface-variant font-medium ml-1">Utilisateurs</span>
                  </div>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={capacity}
                  onChange={(e) => setCapacity(parseInt(e.target.value))}
                  className="w-full h-3 bg-surface-container-high rounded-full appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between mt-4 text-xs font-bold text-outline-variant uppercase tracking-widest">
                  <span>1 Utilisateur</span>
                  <span>100+ Utilisateurs</span>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between p-6 rounded-2xl bg-primary/5 border border-primary/10 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-on-primary shadow-lg shadow-primary/20">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-background">Service Mail</h4>
                  <p className="text-xs text-on-surface-variant">Email souverain avec domaine personnalisé</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-primary-container text-on-primary-container text-[10px] font-bold uppercase tracking-wider">Inclus</span>
            </div>

            <h3 className="text-xl font-bold text-on-background mb-6">Modules Complémentaires</h3>
            <div className="space-y-4">
              {[
                { key: 'cloud', name: 'Cloud (Nextcloud)', desc: '2To de stockage sécurisé distribué', price: '2.50' },
                { key: 'notes', name: 'Notes & Collaboratif', desc: 'Édition markdown en temps réel', price: '1.20' },
                { key: 'budget', name: 'Gestion Budgétaire', desc: 'Finances collectives intégrées', price: '3.00' },
                { key: 'password', name: 'Gestionnaire de mots de passe', desc: 'Organisation partagée Vaultwarden', price: '0.80' },
                { key: 'inventory', name: 'Gestion d\'inventaire', desc: 'Suivi d\'actifs pour coopératives', price: '2.20' },
              ].map((addon) => (
                <label
                  key={addon.key}
                  className="flex items-center justify-between p-5 rounded-2xl bg-surface-container-low cursor-pointer hover:bg-surface-container-high transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={addons[addon.key as keyof typeof addons]}
                      onChange={() => toggleAddon(addon.key as keyof typeof addons)}
                    />
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${addons[addon.key as keyof typeof addons] ? 'border-primary bg-primary' : 'border-outline-variant bg-transparent'}`}>
                      {addons[addon.key as keyof typeof addons] && <span className="material-symbols-outlined text-xs text-on-primary font-bold">check</span>}
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-on-background group-hover:text-primary transition-colors">{addon.name}</h5>
                      <p className="text-xs text-on-surface-variant">{addon.desc}</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-on-background">€{addon.price}<span className="text-[10px] text-on-surface-variant ml-1">/util.</span></span>
                </label>
              ))}
            </div>
          </div>
        </section>

        <aside className="lg:col-span-5 lg:sticky lg:top-32">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-secondary opacity-10 blur-3xl rounded-[3rem]"></div>
            <div className="relative bg-white/60 backdrop-blur-3xl p-10 rounded-[2.5rem] border border-white/40 shadow-2xl shadow-primary/5">
              <div className="mb-8 pb-8 border-b border-outline-variant/10">
                <h2 className="text-2xl font-bold text-on-background mb-1">Votre Configuration</h2>
                <p className="text-sm text-on-surface-variant">Facturé mensuellement. Annulable à tout moment.</p>
              </div>
              <div className="space-y-6 mb-10">
                <div className="flex justify-between items-center">
                  <span className="text-on-surface font-medium">Licence Standard ({effectiveCapacity} util.)</span>
                  <span className="text-on-background font-bold">€{(effectiveCapacity * basePrice).toFixed(2)}</span>
                </div>
                {Object.entries(addons).map(([key, active]) => active && (
                  <div key={key} className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-on-surface font-medium">Option {key.charAt(0).toUpperCase() + key.slice(1)}</span>
                      <span className="text-[10px] bg-secondary-container text-on-secondary-container px-1.5 py-0.5 rounded font-bold uppercase tracking-tighter">Actif</span>
                    </div>
                    <span className="text-on-background font-bold">€{(effectiveCapacity * prices[key as keyof typeof prices]).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="bg-on-background p-8 rounded-3xl text-white mb-8">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-outline-variant text-sm font-medium">Investissement Mensuel</span>
                  <span className="material-symbols-outlined text-primary-container">info</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold tracking-tighter">€{calculateMonthly()}</span>
                  <span className="text-outline-variant text-lg">/mois</span>
                </div>
              </div>
              <button className="w-full bg-primary text-on-primary py-5 rounded-full text-lg font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                Démarrer votre essai gratuit
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <div className="mt-8 bg-surface/40 backdrop-blur-sm rounded-lg p-4 flex items-center gap-4 border border-outline-variant/10">
                <div className="w-10 h-10 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container">
                  <span className="material-symbols-outlined text-xl">eco</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Impact Environnemental</p>
                  <p className="text-sm font-bold text-on-background">Hébergement 100% Énergies Renouvelables</p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Pricing;
