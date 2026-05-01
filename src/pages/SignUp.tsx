import { useState } from 'react';
import { PRICING_DATA } from '../data/products';
import PageTransition from '../components/PageTransition';

const SignUp = () => {
  const [mode, setMode] = useState<'personnel' | 'professionnel'>('personnel');
  const [capacity, setCapacity] = useState(1);
  const [pack, setPack] = useState<Record<string, boolean>>({});
  const [addonQuantities, setAddonQuantities] = useState<Record<string, number>>({});

  const { baseProduct, addonProducts } = PRICING_DATA;

  const togglePack = (id: string) => {
    setPack(prev => ({ ...prev, [id]: !prev[id] }));
    if (!pack[id]) {
      setAddonQuantities(prev => ({ ...prev, [id]: 1 }));
    }
  };

  const updateQuantity = (id: string, val: number) => {
    const newVal = Math.max(1, Math.min(val, capacity));
    setAddonQuantities(prev => ({ ...prev, [id]: newVal }));
  };

  const calculateTotal = () => {
    const effectiveCapacity = mode === 'personnel' ? 1 : capacity;
    let total = effectiveCapacity * baseProduct.price;

    addonProducts.forEach(item => {
      if (pack[item.id]) {
        if (item.allowsCustomQuantity && mode === 'professionnel') {
          total += (addonQuantities[item.id] || 1) * item.price;
        } else {
          total += effectiveCapacity * item.price;
        }
      }
    });

    return total.toFixed(2);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-surface-container-lowest flex flex-col lg:flex-row">
        {/* Left Side - Visual Branding */}
        <div className="lg:w-1/3 bg-primary p-12 flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-on-primary mb-12">
              <span className="material-symbols-outlined text-4xl">cloud_done</span>
              <span className="text-2xl font-black font-headline tracking-tighter">Ethereal Commons</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white font-headline leading-tight mb-8">
              Reprenez le contrôle <br />de votre <span className="text-primary-container">vie numérique.</span>
            </h1>
            <ul className="space-y-6">
              {[
                { icon: 'lock', text: 'Zéro pistage, 100% respect de la vie privée' },
                { icon: 'bolt', text: 'Hébergement écologique et local' },
                { icon: 'diversity_3', text: 'Propriété collective et solidaire' },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-on-primary/90 font-medium">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">{item.icon}</span>
                  </div>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <p className="text-on-primary text-sm italic font-medium leading-relaxed">
              "En rejoignant Ethereal Commons, vous ne consommez pas un service, vous soutenez un bien commun numérique."
            </p>
          </div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary-container rounded-full blur-3xl opacity-20"></div>
          <div className="absolute top-1/2 -right-32 w-64 h-64 bg-secondary-container rounded-full blur-3xl opacity-20"></div>
        </div>

        {/* Right Side - Form */}
        <div className="flex-1 p-8 md:p-16 lg:p-24 overflow-y-auto">
          <div className="max-w-2xl mx-auto">
            <header className="mb-12">
              <h2 className="text-3xl font-headline font-bold text-on-surface mb-2 tracking-tight">Démarrer votre essai gratuit</h2>
              <p className="text-on-surface-variant font-medium">Prêt en moins de 2 minutes. Aucun engagement requis.</p>
            </header>

            <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
              <section>
                <div className="flex p-1.5 bg-surface-container-high rounded-2xl mb-8 w-fit">
                  <button
                    type="button"
                    onClick={() => { setMode('personnel'); setCapacity(1); }}
                    className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${mode === 'personnel' ? 'bg-surface-container-lowest text-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
                  >
                    Individuel
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
    </PageTransition>
  );
};

export default SignUp;
