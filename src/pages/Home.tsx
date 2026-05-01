import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const Home = () => {
  return (
    <PageTransition>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-[921px] flex items-center px-8 lg:px-24">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full mb-8"
              >
                <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                <span className="text-xs font-label font-bold tracking-widest text-primary uppercase">Hébergement 100% Neutre en Carbone</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-headline text-6xl lg:text-8xl font-extrabold tracking-tighter text-on-surface leading-[0.9] mb-8"
              >
                Souveraineté numérique <br /><span className="text-primary">pour tous.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-on-surface-variant leading-relaxed max-w-xl mb-12 font-medium"
              >
                Libérez vos données des géants de la tech. Ethereal Commons fournit un hébergement éthique, open-source et transparent, géré par un collectif qui vous place au premier plan.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <Link to="/pricing" className="bg-primary text-on-primary px-10 py-5 rounded-full font-headline font-extrabold text-lg shadow-2xl shadow-primary/20 hover:opacity-90 transition-opacity flex items-center justify-center gap-3">
                  Voir nos plans <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <Link to="/about" className="bg-surface-container-high text-on-surface px-10 py-5 rounded-full font-headline font-bold text-lg hover:bg-surface-container-highest transition-colors flex items-center justify-center">
                  Notre Manifeste
                </Link>
              </motion.div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="relative z-10 glass-card p-4 rounded-[2.5rem] shadow-2xl shadow-primary/10 border border-white/40"
              >
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY3yp2Dh07uKdvLvGQV6TsL7NA-I4BggkDui23oiLmGzuA4qG4tHcqi6UrpFCDyxA4xxy6I5YOqFNUCq9LvkSQPtBxxRQutcVzSuZuCvzFetTL4yH-EzCxVQs7KR7LQPCk5ndA6VAo-xmydmOvz_AJ02oywibPim790SmBH-ouZFQBff6Wib8jJSjfy-6lqX-FOXh0Mg65nJMGmIHl9FE0gngWB41fvlkKyACHDPqkNuoPs2Lau0zTyO0deaF9ztrxc3YeiPuR6wg"
                  alt="Serveur moderne minimaliste"
                  className="rounded-[2rem] w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-10 -left-10 glass-card p-6 rounded-2xl shadow-xl border border-white/50 max-w-[200px]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-3 h-3 rounded-full bg-tertiary"></span>
                    <span className="text-xs font-bold text-on-surface">Uptime: 99.9%</span>
                  </div>
                  <p className="text-[10px] text-on-surface-variant leading-tight">Vérifié via preuve d'état publique sur blockchain.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Transparency Pills */}
        <section className="py-12 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8 flex flex-wrap justify-center gap-6">
            {[
              { icon: 'location_on', text: 'Hébergé à Grenoble, FR' },
              { icon: 'bolt', text: '100% Énergie Renouvelable' },
              { icon: 'group', text: 'Propriété Coopérative' },
            ].map((pill, i) => (
              <div key={i} className="flex items-center gap-3 bg-surface/40 backdrop-blur-md px-5 py-2.5 rounded-full border border-outline-variant/15">
                <span className="material-symbols-outlined text-primary text-lg">{pill.icon}</span>
                <span className="text-sm font-medium text-on-surface">{pill.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Features Bento Grid */}
        <section className="py-32 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 max-w-2xl">
              <h2 className="font-headline text-4xl font-bold text-on-surface mb-6">Conçu pour la Transparence</h2>
              <p className="text-lg text-on-surface-variant">Nous n'hébergeons pas seulement vos données ; nous protégeons votre libre arbitre. Notre architecture est ouverte, éthique et bâtie sur des valeurs partagées.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8 bg-surface-container-low rounded-[2.5rem] p-12 relative overflow-hidden group">
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-4xl text-primary mb-6">lock</span>
                  <h3 className="font-headline text-3xl font-bold mb-4">Confidentialité Radicale</h3>
                  <p className="text-lg text-on-surface-variant max-w-md">Pas de traqueurs, pas de récolte de données, pas de télémétrie cachée. Vos données restent les vôtres, régies par la charte éthique stricte du collectif CHATONS.</p>
                </div>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkQgPokEjNTEW8oo80ew_vAD_2-N_68ekW5Od2B7uAW2w2hY4TP4cIvafiNhlZbkH7R39uzgPEbXzEj0V8Ow89xphG0bf3-nhqEnFZoyxo0PV_txph0EfOFyZ3Ak4FwkdoOhnsYipEG6TIhtPrUMZFPpUS8ADOsKQ0GJKsiFA8-I1GhUlSIfMLAahOzhNLMz1drbuSvjh-R2KZjzbhxWeBZax9CMLMUVo8J_RSNjaTiRtw2oxuH6l41S_agkUPNcPJvQ5TtbY7dKM"
                  alt="Visuel de données chiffrées"
                  className="absolute right-0 bottom-0 w-1/2 h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity"
                />
              </div>
              <div className="md:col-span-4 bg-secondary text-on-secondary rounded-[2.5rem] p-12 flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-4xl mb-6">terminal</span>
                  <h3 className="font-headline text-2xl font-bold mb-4">100% Open Source</h3>
                </div>
                <p className="text-on-secondary/80">Chaque ligne de code alimentant notre infrastructure est auditable et libre. Aucun enfermement propriétaire, jamais.</p>
              </div>
              <div className="md:col-span-4 bg-primary text-on-primary rounded-[2.5rem] p-12 flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-4xl mb-6">distance</span>
                  <h3 className="font-headline text-2xl font-bold mb-4">Local First</h3>
                </div>
                <p className="text-on-primary/80">Nous hébergeons vos services sur des serveurs situés physiquement près de votre communauté, réduisant la latence et l'impact environnemental.</p>
              </div>
              <div className="md:col-span-8 bg-surface-container-highest rounded-[2.5rem] p-12 flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                  <span className="material-symbols-outlined text-4xl text-secondary mb-6">volunteer_activism</span>
                  <h3 className="font-headline text-2xl font-bold mb-4">Soutien Communautaire</h3>
                  <p className="text-on-surface-variant">De vrais humains qui soutiennent de vraies personnes. Notre forum de support est un lieu d'apprentissage et d'entraide mutuelle.</p>
                </div>
                <div className="flex-1 w-full bg-surface-container-lowest rounded-3xl p-6 shadow-sm border border-outline-variant/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-secondary-container"></div>
                    <div>
                      <div className="h-2 w-24 bg-secondary-container rounded-full mb-2"></div>
                      <div className="h-2 w-16 bg-surface-container-high rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-surface-container-high rounded-full"></div>
                    <div className="h-2 w-5/6 bg-surface-container-high rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-32 bg-slate-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <h2 className="font-headline text-4xl font-bold text-center mb-24">Le Chemin vers la Souveraineté</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative">
              <div className="hidden lg:block absolute top-12 left-1/4 right-1/4 h-0.5 border-t-2 border-primary/20 border-dashed"></div>
              {[
                { id: '01', icon: 'person_add', title: 'Rejoignez les Communs', desc: 'Créez un compte et choisissez votre niveau d\'adhésion. Nous sommes une association à but non lucratif ; vos cotisations vont directement à la maintenance.' },
                { id: '02', icon: 'grid_view', title: 'Déployez vos Services', desc: 'Déploiement en un clic pour les alternatives éthiques aux Big Tech : Nextcloud, Mastodon, Peertube, et plus encore.' },
                { id: '03', icon: 'public', title: 'Possédez votre Identité', desc: 'Connectez votre domaine personnalisé et commencez à partager votre contenu sans le bagage du capitalisme de surveillance.' },
              ].map((step) => (
                <div key={step.id} className="relative group">
                  <div className="w-24 h-24 rounded-[2rem] bg-white shadow-xl shadow-primary/5 flex items-center justify-center mb-10 group-hover:-translate-y-2 transition-transform">
                    <span className="material-symbols-outlined text-4xl text-primary">{step.icon}</span>
                  </div>
                  <h4 className="font-headline text-xl font-bold mb-4">{step.id}. {step.title}</h4>
                  <p className="text-on-surface-variant">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-8">
          <div className="max-w-7xl mx-auto bg-primary rounded-[3rem] p-16 md:p-24 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dim opacity-50"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-headline text-4xl md:text-6xl font-bold text-on-primary mb-8 tracking-tight">Prêt à quitter les boîtes noires ?</h2>
              <p className="text-xl text-on-primary/80 mb-12 leading-relaxed">Rejoignez Ethereal Commons aujourd'hui et soutenez un web décentralisé et éthique pour tous.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link to="/signup" className="bg-surface-container-lowest text-primary px-10 py-5 rounded-full font-headline font-extrabold text-lg shadow-2xl hover:scale-105 transition-transform">
                  Commencer l'Essai Gratuit
                </Link>
                <Link to="/about" className="bg-transparent border-2 border-on-primary text-on-primary px-10 py-5 rounded-full font-headline font-bold text-lg hover:bg-white/10 transition-colors">
                  Lire Notre Manifeste
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;
