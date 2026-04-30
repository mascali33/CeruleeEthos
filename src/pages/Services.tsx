import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    { key: 'cloud', icon: 'cloud', color: 'bg-blue-500' },
    { key: 'mail', icon: 'mail', color: 'bg-teal-500' },
    { key: 'chat', icon: 'forum', color: 'bg-indigo-500' },
    { key: 'video', icon: 'video_call', color: 'bg-purple-500' },
    { key: 'form', icon: 'assignment', color: 'bg-amber-500' },
    { key: 'dev', icon: 'code', color: 'bg-slate-800' },
  ];

  return (
    <div className="pt-32 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        <header className="max-w-3xl mb-24">
          <h1 className="font-headline text-6xl md:text-8xl font-bold text-on-surface mb-8 tracking-tighter">
            {t('services.title')}
          </h1>
          <p className="text-2xl text-on-surface-variant leading-relaxed">
            {t('services.subtitle')}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 bg-surface-container-low rounded-[3rem] hover:bg-surface-container-high transition-colors border border-outline-variant/10"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-black/5 group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined text-white text-3xl">
                  {service.icon}
                </span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4">{t(`services.list.${service.key}_title`)}</h3>
              <p className="text-on-surface-variant leading-relaxed">
                {t(`services.list.${service.key}_desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
