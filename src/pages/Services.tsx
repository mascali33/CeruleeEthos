import { PRODUCTS, FEATURED_SERVICES } from '../data/products';

const Services = () => {
  const nextcloud = PRODUCTS.find(p => p.id === 'cloud');
  const mastodon = FEATURED_SERVICES.find(s => s.id === 'mastodon');
  const peertube = FEATURED_SERVICES.find(s => s.id === 'peertube');
  const matrix = FEATURED_SERVICES.find(s => s.id === 'matrix');
  const etherpad = PRODUCTS.find(p => p.id === 'notes');
  const gitea = FEATURED_SERVICES.find(s => s.id === 'gitea');

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <header className="mb-20">
        <div className="max-w-3xl">
          <span className="inline-block glass-pill px-4 py-1 rounded-sm text-primary font-label text-[10px] uppercase tracking-widest mb-6">Collectif d'hébergement éthique</span>
          <h1 className="text-5xl md:text-7xl font-extrabold font-headline text-on-surface tracking-tighter mb-8">
            Le Jardin Transparent <br /><span className="text-primary italic">des Outils</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-10 max-w-2xl">
            Découvrez une sélection rigoureuse d'outils collaboratifs éthiques et respectueux de votre vie privée. Sans pistage, sans exploitation de données, juste une liberté numérique pure alimentée par des énergies renouvelables.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="glass-pill px-5 py-2 rounded-lg flex items-center gap-3">
              <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
              <span className="text-sm font-medium">100% Solaire</span>
            </div>
            <div className="glass-pill px-5 py-2 rounded-lg flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
              <span className="text-sm font-medium">Chiffrement de bout en bout</span>
            </div>
          </div>
        </div>
      </header>

      {/* Bento Grid Services */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Nextcloud - Featured Large */}
        {nextcloud && (
          <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-low rounded-3xl p-8 md:p-12 transition-all duration-500 hover:bg-surface-container-high">
            <div className="flex flex-col h-full justify-between relative z-10">
              <div>
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-primary text-3xl">{nextcloud.icon}</span>
                </div>
                <h3 className="text-3xl font-bold font-headline mb-4">{nextcloud.name}</h3>
                <p className="text-on-surface-variant text-lg max-w-md mb-8">{nextcloud.description}</p>
                <div className="flex gap-2 mb-8">
                  {nextcloud.tags?.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-surface-container-lowest rounded-full text-xs font-semibold text-primary">{tag}</span>
                  ))}
                </div>
              </div>
              <a className="inline-flex items-center gap-2 text-primary font-bold group-hover:translate-x-2 transition-transform" href="#">
                En savoir plus <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
          </div>
        )}

        {/* Mastodon */}
        {mastodon && (
          <div className="md:col-span-4 bg-secondary-container rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/10">
            <div className="bg-secondary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-secondary text-2xl">{mastodon.icon}</span>
            </div>
            <h3 className="text-2xl font-bold font-headline mb-3 text-on-secondary-container">{mastodon.name}</h3>
            <p className="text-on-secondary-container/80 text-sm mb-6 leading-relaxed">{mastodon.description}</p>
            <a className="text-secondary font-bold text-sm inline-flex items-center gap-1 hover:underline underline-offset-4" href={mastodon.link}>
              Rejoindre le fédéré <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </div>
        )}

        {/* PeerTube */}
        {peertube && (
          <div className="md:col-span-4 bg-surface-container-lowest rounded-3xl p-8 transition-all duration-500 hover:bg-surface-container-low group">
            <div className="aspect-video w-full mb-6 rounded-2xl overflow-hidden bg-surface-container">
              <img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src={peertube.image} alt={peertube.name} />
            </div>
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-error">{peertube.icon}</span>
              <h3 className="text-xl font-bold font-headline">{peertube.name}</h3>
            </div>
            <p className="text-on-surface-variant text-sm mb-6">{peertube.description}</p>
            <a className="text-primary font-bold text-sm" href={peertube.link}>En savoir plus</a>
          </div>
        )}

        {/* Matrix */}
        {matrix && (
          <div className="md:col-span-4 bg-surface-container-low rounded-3xl p-8 transition-all duration-500 hover:translate-y-[-4px]">
            <div className="bg-tertiary-container w-12 h-12 rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-on-tertiary-container text-xl">{matrix.icon}</span>
            </div>
            <h3 className="text-xl font-bold font-headline mb-3">{matrix.name}</h3>
            <p className="text-on-surface-variant text-sm mb-6">{matrix.description}</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-tertiary"></div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-tertiary">{matrix.tags?.[0]}</span>
            </div>
          </div>
        )}

        {/* Etherpad (Notes) */}
        {etherpad && (
          <div className="md:col-span-4 group bg-surface-container-lowest rounded-3xl p-8 transition-all duration-500 hover:bg-white overflow-hidden relative">
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-on-surface-variant">{etherpad.icon}</span>
                <h3 className="text-xl font-bold font-headline">{etherpad.name.includes('&') ? 'Etherpad' : etherpad.name}</h3>
              </div>
              <p className="text-on-surface-variant text-sm mb-6">{etherpad.description}</p>
              <a className="text-primary font-bold text-sm border-b-2 border-primary/20 hover:border-primary transition-all" href="#">Commencer à écrire</a>
            </div>
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-6xl">article</span>
            </div>
          </div>
        )}

        {/* Gitea */}
        {gitea && (
          <div className="md:col-span-6 bg-surface-container-lowest rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3">
              <img className="rounded-2xl shadow-lg" src={gitea.image} alt={gitea.name} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold font-headline mb-2">{gitea.name}</h3>
              <p className="text-on-surface-variant text-sm mb-4">{gitea.description}</p>
              <a className="text-primary font-bold text-sm" href="#">Explorer le dépôt</a>
            </div>
          </div>
        )}

        <div className="md:col-span-6 bg-primary-container rounded-3xl p-8 flex items-center justify-between group cursor-pointer">
          <div>
            <h3 className="text-2xl font-bold font-headline text-on-primary-container mb-2">Besoin d'une offre sur mesure ?</h3>
            <p className="text-on-primary-container/80 text-sm">Nous proposons des solutions adaptées aux associations et collectifs.</p>
          </div>
          <div className="bg-on-primary-container text-primary-container w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined">support_agent</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
