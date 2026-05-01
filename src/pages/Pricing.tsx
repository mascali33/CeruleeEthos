import { useState } from 'react';
import { PRODUCTS } from '../data/products';

const Pricing = () => {
  const [mode, setMode] = useState<'personnel' | 'professionnel'>('professionnel');
  const [capacity, setCapacity] = useState(24);

  const baseProduct = PRODUCTS.find(p => p.isBase) || PRODUCTS[0];
  const addonProducts = PRODUCTS.filter(p => p.isAddon);

  const [addons, setAddons] = useState<Record<string, boolean>>({
    cloud: true,
    password: true,
    ...Object.fromEntries(addonProducts.map(p => [p.id, p.id === 'cloud' || p.id === 'password']))
  });

  const [addonQuantities, setAddonQuantities] = useState<Record<string, number>>(
    Object.fromEntries(addonProducts.filter(p => p.allowsCustomQuantity).map(p => [p.id, 5]))
  );

  const effectiveCapacity = mode === 'personnel' ? 1 : capacity;

  const calculateMonthly = () => {
    let total = baseProduct.price * effectiveCapacity;
    addonProducts.forEach(addon => {
      if (addons[addon.id]) {
        if (addon.allowsCustomQuantity && mode === 'professionnel') {
          total += addon.price * (addonQuantities[addon.id] || 1);
        } else {
          total += addon.price * effectiveCapacity;
        }
      }
    });
    return total.toFixed(2);
  };

  const toggleAddon = (addonId: string) => {
    setAddons({ ...addons, [addonId]: !addons[addonId] });
  };

  const updateQuantity = (addonId: string, val: number) => {
    setAddonQuantities({ ...addonQuantities, [addonId]: Math.max(1, val) });
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
                  <span className="material-symbols-outlined">{baseProduct.icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-background">{baseProduct.name}</h4>
                  <p className="text-xs text-on-surface-variant">{baseProduct.shortDescription}</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="px-3 py-1 rounded-full bg-primary-container text-on-primary-container text-[10px] font-bold uppercase tracking-wider">Inclus</span>
                <span className="text-[10px] font-bold text-primary">€{baseProduct.price.toFixed(2)}/util.</span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-on-background mb-6">Modules Complémentaires</h3>
            <div className="space-y-4">
              {addonProducts.map((addon) => (
                <div
                  key={addon.id}
                  onClick={() => toggleAddon(addon.id)}
                  className={`flex items-center justify-between p-5 rounded-2xl cursor-pointer transition-all border-2 ${addons[addon.id] ? 'bg-surface-container-low border-primary/20 shadow-sm' : 'bg-surface-container-low/50 border-transparent hover:bg-surface-container-low hover:border-outline-variant/10 group'}`}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${addons[addon.id] ? 'border-primary bg-primary' : 'border-outline-variant bg-transparent'}`}>
                      {addons[addon.id] && <span className="material-symbols-outlined text-xs text-on-primary font-bold">check</span>}
                    </div>
                    <div>
                      <h5 className={`font-bold text-sm transition-colors ${addons[addon.id] ? 'text-primary' : 'text-on-background group-hover:text-primary'}`}>{addon.name}</h5>
                      <p className="text-xs text-on-surface-variant">{addon.shortDescription}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6" onClick={(e) => e.stopPropagation()}>
                    {addon.allowsCustomQuantity && addons[addon.id] && mode === 'professionnel' && (
                      <div className="flex items-center gap-2 bg-surface-container-highest/50 p-1 rounded-lg border border-outline-variant/10">
                        <button
                          onClick={() => updateQuantity(addon.id, (addonQuantities[addon.id] || 1) - 1)}
                          className="w-7 h-7 rounded-md bg-surface-container-low flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors text-on-surface-variant"
                        >
                          <span className="material-symbols-outlined text-xs">remove</span>
                        </button>
                        <div className="flex flex-col items-center px-2 min-w-[2.5rem]">
                          <span className="text-[14px] font-bold text-on-background leading-none">{(addonQuantities[addon.id] || 1)}</span>
                          <span className="text-[8px] font-bold uppercase tracking-tighter text-outline-variant">{addon.quantityLabel || 'Qté'}</span>
                        </div>
                        <button
                          onClick={() => updateQuantity(addon.id, (addonQuantities[addon.id] || 1) + 1)}
                          className="w-7 h-7 rounded-md bg-surface-container-low flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors text-on-surface-variant"
                        >
                          <span className="material-symbols-outlined text-xs">add</span>
                        </button>
                      </div>
                    )}
                    <div className="text-right">
                      <span className="text-sm font-bold text-on-background block">€{addon.price.toFixed(2)}</span>
                      <span className="text-[10px] text-on-surface-variant font-medium tracking-tight">{addon.allowsCustomQuantity && mode === 'professionnel' ? '/unité' : '/util.'}</span>
                    </div>
                  </div>
                </div>
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
                  <span className="text-on-surface font-medium">{baseProduct.name} ({effectiveCapacity} util.)</span>
                  <span className="text-on-background font-bold">€{(effectiveCapacity * baseProduct.price).toFixed(2)}</span>
                </div>
                {addonProducts.map((addon) => addons[addon.id] && (
                  <div key={addon.id} className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-on-surface font-medium">
                        {addon.name} {addon.allowsCustomQuantity && mode === 'professionnel' ? `(${addonQuantities[addon.id] || 1} ${addon.quantityLabel || 'unité'})` : `(${effectiveCapacity} util.)`}
                      </span>
                      <span className="text-[10px] bg-secondary-container text-on-secondary-container px-1.5 py-0.5 rounded font-bold uppercase tracking-tighter">Add-On</span>
                    </div>
                    <span className="text-on-background font-bold">
                      €{(addon.allowsCustomQuantity && mode === 'professionnel' ? (addonQuantities[addon.id] || 1) * addon.price : effectiveCapacity * addon.price).toFixed(2)}
                    </span>
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
