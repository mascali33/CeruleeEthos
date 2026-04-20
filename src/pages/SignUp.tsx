import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [pack, setPack] = useState({
    cloud: true,
    notes: false,
    budget: false,
    mail: false,
  });

  const packPrices = {
    cloud: 5.0,
    notes: 2.5,
    budget: 3.0,
    mail: 4.0,
  };

  const calculateTotal = () => {
    let total = 0;
    if (pack.cloud) total += packPrices.cloud;
    if (pack.notes) total += packPrices.notes;
    if (pack.budget) total += packPrices.budget;
    if (pack.mail) total += packPrices.mail;
    return total.toFixed(2);
  };

  const togglePack = (item: keyof typeof pack) => {
    setPack({ ...pack, [item]: !pack[item] });
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
              <div className="inline-flex p-1 bg-surface-container-high rounded-full w-full sm:w-auto">
                <button type="button" className="px-8 py-3 rounded-full bg-surface-container-lowest text-primary font-bold shadow-sm transition-all duration-300">Personnel</button>
                <button type="button" className="px-8 py-3 rounded-full text-on-surface-variant hover:text-on-surface transition-all duration-300">Professionnel</button>
              </div>
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
                {[
                  { key: 'cloud', icon: 'cloud', name: 'Stockage Cloud', desc: '50 Go d\'espace sécurisé', price: '5,00€', color: 'text-primary' },
                  { key: 'notes', icon: 'edit_note', name: 'Notes Partagées', desc: 'Collaboration en temps réel', price: '2,50€', color: 'text-secondary' },
                  { key: 'budget', icon: 'account_balance_wallet', name: 'Gestion Budget', desc: 'Outils financiers éthiques', price: '3,00€', color: 'text-tertiary' },
                  { key: 'mail', icon: 'mail', name: 'Email Chiffré', desc: 'Respect total de la vie privée', price: '4,00€', color: 'text-on-primary-fixed-variant' },
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
                        <p className="font-bold font-headline">{item.name}</p>
                        <p className="text-xs text-on-surface-variant">{item.desc}</p>
                      </div>
                      <p className="text-sm font-bold text-primary">{item.price} <span className="text-xs text-on-surface-variant font-normal">/ mois</span></p>
                    </div>
                  </label>
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
