import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '../data/products';

const SignUp = () => {
  const [searchParams] = useSearchParams();

  const [mode, setMode] = useState<'personnel' | 'professionnel'>((searchParams.get('mode') as any) || 'personnel');
  const [capacity, setCapacity] = useState(parseInt(searchParams.get('capacity') || '24'));

  const baseProduct = PRODUCTS.find(p => p.isBase) || PRODUCTS[0];
  const addonProducts = PRODUCTS.filter(p => p.isAddon);

  const initialAddons = searchParams.get('addons')?.split(',') || ['cloud'];
  const [pack, setPack] = useState<Record<string, boolean>>({
    ...Object.fromEntries(addonProducts.map(p => [p.id, initialAddons.includes(p.id)]))
  });

  const initialQuantities = Object.fromEntries(
    (searchParams.get('quantities')?.split(',') || [])
      .map(q => q.split(':'))
      .filter(([id]) => id)
      .map(([id, val]) => [id, parseInt(val)])
  );

  const [addonQuantities, setAddonQuantities] = useState<Record<string, number>>({
    ...Object.fromEntries(addonProducts.filter(p => p.allowsCustomQuantity).map(p => [p.id, 5])),
    ...initialQuantities
  });

  const effectiveCapacity = mode === 'personnel' ? 1 : capacity;

  // Validation: Addon licenses cannot exceed base product capacity
  useEffect(() => {
    if (mode === 'professionnel') {
      const updatedQuantities = { ...addonQuantities };
      let changed = false;
      Object.keys(updatedQuantities).forEach(id => {
        if (updatedQuantities[id] > capacity) {
          updatedQuantities[id] = capacity;
          changed = true;
        }
      });
      if (changed) {
        setAddonQuantities(updatedQuantities);
      }
    }
  }, [capacity, mode]);

  const calculateTotal = () => {
    let total = baseProduct.price * effectiveCapacity;
    addonProducts.forEach(addon => {
      if (pack[addon.id]) {
        if (addon.allowsCustomQuantity && mode === 'professionnel') {
          total += addon.price * (addonQuantities[addon.id] || 1);
        } else {
          total += addon.price * effectiveCapacity;
        }
      }
    });
    return total.toFixed(2);
  };

  const togglePack = (addonId: string) => {
    setPack({ ...pack, [addonId]: !pack[addonId] });
  };

  const updateQuantity = (addonId: string, val: number) => {
    const maxVal = mode === 'professionnel' ? capacity : 1;
    setAddonQuantities({
      ...addonQuantities,
      [addonId]: Math.min(maxVal, Math.max(1, isNaN(val) ? 1 : val))
    });
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative bg-surface font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden">
      {/* Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary-container/20 to-transparent -z-10 pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-container/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      {/* Left Branding Side */}
      <div className="lg:w-2/5 p-8 lg:p-16 flex flex-col justify-between items-start">
        <div>
          <Link to="/" className="text-xl font-bold text-teal-700 tracking-tighter font-headline mb-12 block">
            Ethereal Commons
          </Link>
          <h1 className="text-5xl lg:text-6xl font-extrabold font-headline text-on-surface tracking-tight mb-6">
            Rejoignez le <span className="text-primary italic">jardin transparent.</span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-md leading-relaxed">
            Une technologie éthique, gérée par la communauté, pour des esprits libres. Créez votre espace aujourd'hui.
          </p>
        </div>
        <div className="hidden lg:block">
          <div className="glass-panel p-6 rounded-xl border border-outline-variant/15 flex items-center gap-4 bg-white/70 backdrop-blur-xl">
            <div className="w-12 h-12 bg-tertiary-container rounded-full flex items-center justify-center text-on-tertiary-container">
              <span className="material-symbols-outlined">energy_savings_leaf</span>
            </div>
            <div>
              <p className="font-headline font-bold text-sm">Énergie 100% renouvelable</p>
              <p className="text-xs text-on-surface-variant">Serveurs alimentés localement en Europe.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="lg:w-3/5 p-4 lg:p-12">
        <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-xl border border-outline-variant/15 rounded-[2rem] shadow-xl shadow-teal-900/5 p-8 lg:p-12">
          <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
            <section>
              <label className="block font-headline font-bold text-sm mb-4 uppercase tracking-wider text-on-surface-variant">Type de compte</label>
              <div className="inline-flex p-1 bg-surface-container-high rounded-full w-full sm:w-auto mb-8">
                <button
                  type="button"
                  onClick={() => setMode('personnel')}
                  className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${mode === 'personnel' ? 'bg-surface-container-lowest text-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
                >
                  Personnel
                </button>
                <button
                  type="button"
                  onClick={() => setMode('professionnel')}
                  className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${mode === 'professionnel' ? 'bg-surface-container-lowest text-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
                >
                  Professionnel
                </button>
              </div>

              {mode === 'professionnel' && (
                <div className="bg-surface-container-low p-6 rounded-2xl animate-in fade-in slide-in-from-top-4 duration-500">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <h3 className="font-headline font-bold text-on-surface">Capacité</h3>
                      <p className="text-xs text-on-surface-variant">Nombre de collaborateurs</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-extrabold text-primary">{capacity}</span>
                      <span className="text-on-surface-variant text-xs font-medium ml-1">Utilisateurs</span>
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
                <label className="block font-headline font-semibold text-sm px-2" htmlFor="name">Nom complet</label>
                <input id="name" type="text" placeholder="Jean Dupont" className="w-full h-14 px-6 bg-surface-container-highest border-0 rounded-xl focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all" />
              </div>
              <div className="space-y-2">
                <label className="block font-headline font-semibold text-sm px-2" htmlFor="email">Adresse Email</label>
                <input id="email" type="email" placeholder="jean@exemple.com" className="w-full h-14 px-6 bg-surface-container-highest border-0 rounded-xl focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="block font-headline font-semibold text-sm px-2" htmlFor="password">Mot de passe</label>
                <input id="password" type="password" placeholder="••••••••" className="w-full h-14 px-6 bg-surface-container-highest border-0 rounded-xl focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all" />
              </div>
            </section>

            <section>
              <header className="mb-6">
                <h2 className="text-2xl font-headline font-bold tracking-tight">Configurez votre pack</h2>
                <p className="text-on-surface-variant text-sm">Sélectionnez les services essentiels à votre écosystème.</p>
              </header>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Base Product - Always Included */}
                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 flex flex-col gap-3 relative">
                  <div className="flex justify-between items-start">
                    <span className="material-symbols-outlined text-on-primary-fixed-variant">{baseProduct.icon}</span>
                    <span className="px-2 py-0.5 rounded-full bg-primary-container text-on-primary-container text-[10px] font-bold uppercase tracking-wider">Inclus</span>
                  </div>
                  <div>
                    <p className="font-bold font-headline">{baseProduct.name} (Base)</p>
                    <p className="text-xs text-on-surface-variant">{baseProduct.shortDescription}</p>
                  </div>
                  <p className="text-sm font-bold text-primary">{baseProduct.price.toFixed(2).replace('.', ',')}€ <span className="text-xs text-on-surface-variant font-normal">/ mois / util.</span></p>
                </div>

                {addonProducts.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => togglePack(item.id)}
                    className={`p-6 rounded-2xl border transition-all flex flex-col gap-3 cursor-pointer ${pack[item.id] ? 'bg-surface-container-lowest border-primary shadow-sm' : 'bg-surface-container-low border-transparent hover:border-outline-variant/20'}`}
                  >
                    <div className="flex justify-between items-start">
                      <span className={`material-symbols-outlined ${item.color || 'text-primary'}`}>{item.icon}</span>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${pack[item.id] ? 'bg-primary border-primary' : 'border-outline-variant'}`}>
                        {pack[item.id] && <span className="material-symbols-outlined text-[14px] text-white">check</span>}
                      </div>
                    </div>
                    <div>
                      <p className="font-bold font-headline">{item.name}</p>
                      <p className="text-xs text-on-surface-variant">{item.shortDescription}</p>
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-2" onClick={(e) => e.stopPropagation()}>
                      <div className="flex flex-col">
                        <p className="text-sm font-bold text-primary">{item.price.toFixed(2).replace('.', ',')}€</p>
                        <p className="text-[10px] text-on-surface-variant font-medium tracking-tight">{item.allowsCustomQuantity && mode === 'professionnel' ? '/ unité' : '/ mois'}</p>
                      </div>

                      {item.allowsCustomQuantity && pack[item.id] && mode === 'professionnel' && (
                        <div className="flex items-center gap-2 bg-surface-container-highest/50 p-0.5 rounded-lg border border-outline-variant/10">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, (addonQuantities[item.id] || 1) - 1)}
                            className="w-6 h-6 rounded bg-surface-container-low flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors text-on-surface-variant"
                          >
                            <span className="material-symbols-outlined text-[14px]">remove</span>
                          </button>
                          <div className="flex flex-col items-center px-1 min-w-[1.5rem]">
                            <input
                              type="number"
                              min="1"
                              max={capacity}
                              value={addonQuantities[item.id] || 1}
                              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                              className="w-8 bg-transparent text-center font-bold text-[12px] text-on-background border-0 focus:ring-0 p-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            />
                            <span className="text-[7px] font-bold uppercase tracking-tighter text-outline-variant leading-none">{item.quantityLabel || 'Qté'}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, (addonQuantities[item.id] || 1) + 1)}
                            className="w-6 h-6 rounded bg-surface-container-low flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors text-on-surface-variant"
                          >
                            <span className="material-symbols-outlined text-[14px]">add</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="pt-8 border-t border-outline-variant/15">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <p className="text-on-surface-variant text-sm font-medium">Récapitulatif estimé</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold font-headline text-on-surface">{calculateTotal().replace('.', ',')}€</span>
                    <span className="text-on-surface-variant font-medium">/ mois</span>
                  </div>
                  <p className="text-xs text-on-surface-variant mt-1 italic">* Facturé annuellement ou mensuellement</p>
                </div>
                <button type="submit" className="bg-primary text-on-primary h-16 px-12 rounded-full font-headline font-bold text-lg hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-primary/20">
                  Créer mon compte
                </button>
              </div>
              <p className="mt-8 text-center text-sm text-on-surface-variant">
                En vous inscrivant, vous acceptez notre <a className="text-primary hover:underline underline-offset-4" href="#">Charte éthique</a> et notre <a className="text-primary hover:underline underline-offset-4" href="#">Politique de confidentialité</a>.
              </p>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
