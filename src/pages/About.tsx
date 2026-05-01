import PageTransition from '../components/PageTransition';

const About = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="mb-24 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-secondary-container text-on-secondary-container rounded-full">La Charte Éthique</span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface leading-[0.9] mb-8">
              La technologie avec une <span className="text-primary">conscience humaine.</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed font-medium">
              Nous ne sommes pas qu'un simple hébergeur. Nous sommes un écosystème numérique fondé sur la transparence, la présence locale et la conviction inébranlable que vos données vous appartiennent à vous seul.
            </p>
          </div>
          <div className="hidden lg:block w-48 h-48 rounded-3xl bg-gradient-to-br from-primary to-primary-container p-1 shadow-2xl rotate-3">
            <div className="w-full h-full bg-surface rounded-[1.4rem] flex items-center justify-center">
              <span className="material-symbols-outlined text-6xl text-primary">auto_awesome</span>
            </div>
          </div>
        </header>

        {/* Values Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-32">
          {/* Local Commitment */}
          <div className="md:col-span-8 bg-surface-container-low p-10 rounded-[2.5rem] flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 bg-surface-container-lowest rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-primary-container transition-colors duration-500">
                <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">Engagement local</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-lg">
                Nous hébergeons nos serveurs à proximité des communautés que nous servons. En réduisant la distance physique, nous minimisons le gaspillage énergétique et renforçons les économies locales par un investissement direct dans les infrastructures.
              </p>
            </div>
            <div className="mt-12 flex items-center gap-4">
              <div className="h-px flex-grow bg-outline-variant/20"></div>
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Origine de l'infrastructure : France</span>
            </div>
          </div>

          {/* Solidarity / Collective */}
          <div className="md:col-span-4 bg-primary p-10 rounded-[2.5rem] text-on-primary flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-on-primary text-3xl">diversity_3</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">Solidarité</h3>
              <p className="text-on-primary/80 text-lg leading-relaxed">
                Fier membre du collectif <span className="font-extrabold text-white">CHATONS</span>, nous fonctionnons sans croissance prédatrice, partageant les connaissances et les ressources à travers le réseau.
              </p>
            </div>
            <img
              alt="CHATONS collective logo"
              className="w-24 h-24 self-end opacity-20 absolute -bottom-4 -right-4 grayscale invert"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4cp5i-Xy5lTCyDJLXB6l6pEFaBWG8XGhE6EWCwTvNnO4B2_L2Aj8Rnhht65r415ybJUcyOcrr80aHb-6yPaNj9hJWJ2PidnJuXolp4DnVUZfbiUgqipQAfiYAVyMHuz_4KK7Yj5WKV-a5TiCfnSuH8R59OOKItkr0BRlqMS3j0S4-esXRD7NEqAQwMf6fWRV9ULqFQxo_CKRwZQ9TBLIm987d6fY53teoDM22bXi54d4kAec_IqXREXZydmSoWpwhU4Ze8WvXQpg"
            />
          </div>

          {/* Data Transparency */}
          <div className="md:col-span-4 bg-surface-container-high p-10 rounded-[2.5rem] flex flex-col items-start gap-6">
            <div className="w-14 h-14 bg-surface-container-lowest rounded-2xl flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-secondary text-3xl">visibility</span>
            </div>
            <h3 className="text-2xl font-bold">Transparence des données</h3>
            <p className="text-on-surface-variant text-base leading-relaxed">
              Accédez à des rapports en temps réel sur l'emplacement de vos données, qui peut y accéder (spoiler : seulement vous) et l'énergie consommée pour alimenter vos services.
            </p>
            <div className="mt-auto w-full p-4 bg-surface-container-lowest/50 rounded-xl glass-effect text-sm font-medium">
              <div className="flex justify-between mb-2"><span>Disponibilité</span><span className="text-tertiary">99.98%</span></div>
              <div className="flex justify-between"><span>Audit Confidentialité</span><span className="text-tertiary">Réussi</span></div>
            </div>
          </div>

          {/* No Tracking */}
          <div className="md:col-span-4 bg-secondary-container p-10 rounded-[2.5rem] text-on-secondary-container">
            <div className="w-14 h-14 bg-white/50 rounded-2xl flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-secondary text-3xl">gps_off</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Aucun traçage</h3>
            <p className="text-lg leading-relaxed">
              Zéro cookie. Zéro empreinte numérique. Zéro capitalisme de surveillance. Nous ne monétisons pas votre comportement ; nous fournissons un outil pour votre travail.
            </p>
          </div>

          {/* Open Source */}
          <div className="md:col-span-4 bg-tertiary-container p-10 rounded-[2.5rem] text-on-tertiary-container flex flex-col">
            <div className="w-14 h-14 bg-white/50 rounded-2xl flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-tertiary text-3xl">code</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Code open-source</h3>
            <p className="text-base leading-relaxed mb-6">
              Auditez notre infrastructure. Tout ce que nous construisons est publié sous licences FLOSS, contribuant ainsi aux biens communs qui nous soutiennent.
            </p>
            <a className="mt-auto flex items-center gap-2 font-bold hover:underline decoration-2 underline-offset-4" href="#">
              Voir les dépôts <span className="material-symbols-outlined">arrow_right_alt</span>
            </a>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-24 border-y-0 relative">
          <div className="absolute top-0 left-0 text-[15rem] leading-none font-extrabold text-outline-variant opacity-5 pointer-events-none select-none">“</div>
          <blockquote className="text-4xl md:text-6xl font-bold tracking-tight text-on-surface leading-tight text-center max-w-5xl mx-auto italic">
            L'hébergement est un acte de confiance. Nous traitons votre vie numérique avec la même révérence qu'un sanctuaire physique.
          </blockquote>
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                alt="Portrait architecte principal"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmFj-E99G40OJrROxihOu9ql0d4kdXVCoFD19CffSpC0HE-Pc6FW8Ca_hJPmnodNDwABK4speBXc8WPaCCwV0aWbqFPJl4YaEaTFCSiLsQwkecnDauPrugHDvoQj5aGo98K31DkkimB7c_249XHkOGjwaN2ETniQVLnPMA2n99kmpRjJ3D3BqLCEDgXslTHtl9ou2J6EIKpB0vBsQxiNKivQaMFABJZikjvyLurENEUHrxa9-3STgWgMKXVtaH4kMy4PEYOh7_GWI"
              />
            </div>
            <div className="text-left">
              <p className="font-bold text-on-surface">Alexandre Dubois</p>
              <p className="text-sm text-on-surface-variant font-medium">Architecte Éthique Principal, Ethereal Commons</p>
            </div>
          </div>
        </section>

        {/* Collective Section */}
        <section className="mt-32 bg-slate-950 text-white rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
            <img
              alt="Flux abstrait"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuATnobJcqNnvDdLOYybT_vwF0Kr1Ue1PpGJo-uBkowqr7D1Ii6tDztdTWNKpIgRTUZrwOybqcI3hB-qOAOgy8fpv_NuzNRyqGH33OWW5XqbKe3qmzlxx9_S-6EOH5PNiVEGBAFvkO5FGYTpzMwbqCetq3qYHEcVz5pQIp2lzu-KvsU86ahG4YO9lcBmcpDw0jI3YGCYWQTUOz-H48-yUQ4dA4i93rMhw_yPGdG_MwTGvev3s5yNZI8EpURkoLUn1Y6ePSGwI0iKmIs"
            />
          </div>
          <div className="relative z-10 md:w-3/5">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">Faire partie de quelque chose <br /><span className="text-primary-container text-opacity-80">de plus grand que la tech.</span></h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-10">
              Ethereal Commons est signataire de la <span className="text-white font-bold">Charte des CHATONS</span> (Collectif des Hébergeurs Alternatifs, Transparents, Ouverts, Neutres et Solidaires). Nous nous engageons à rester indépendants du capital-risque à grande échelle et de la surveillance étatique.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-slate-950 px-8 py-4 rounded-full font-bold hover:bg-primary-container transition-colors transform active:scale-95">Lire la Charte des CHATONS</button>
              <button className="border border-slate-700 px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-colors">Notre Stack Technique</button>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default About;
