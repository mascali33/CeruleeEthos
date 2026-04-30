import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-32 px-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <h1 className="font-headline text-6xl font-bold text-on-surface mb-8">
            {t('about.title')}
          </h1>
          <p className="text-2xl text-primary font-medium mb-12 italic">
            {t('about.subtitle')}
          </p>
          <div className="prose prose-xl text-on-surface-variant max-w-none">
            <p className="leading-relaxed">
              {t('about.intro')}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16 border-t border-outline-variant/20">
          {[
            {
              title: t('about.values.sovereignty_title'),
              desc: t('about.values.sovereignty_desc'),
              icon: 'shield_person'
            },
            {
              title: t('about.values.cooperation_title'),
              desc: t('about.values.cooperation_desc'),
              icon: 'diversity_3'
            },
            {
              title: t('about.values.frugality_title'),
              desc: t('about.values.frugality_desc'),
              icon: 'eco'
            }
          ].map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="space-y-4"
            >
              <span className="material-symbols-outlined text-4xl text-primary">
                {value.icon}
              </span>
              <h3 className="font-headline text-2xl font-bold text-on-surface">
                {value.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
