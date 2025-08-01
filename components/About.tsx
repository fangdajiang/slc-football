'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Heart, Shield, Target, Trophy } from 'lucide-react';

export default function About() {
  const t = useTranslations('about');

  const values = [
    { icon: Shield, label: t('values.brave'), color: 'text-blue-600' },
    { icon: Target, label: t('values.independent'), color: 'text-green-600' },
    { icon: Trophy, label: t('values.confident'), color: 'text-yellow-600' },
    { icon: Heart, label: t('values.loving'), color: 'text-red-600' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Team Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('teamName')}</h3>
              <p className="text-gray-700">{t('teamNameValue')}</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-3 mb-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">{t('founded')}</h3>
              </div>
              <p className="text-gray-700">{t('foundedValue')}</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-3 mb-2">
                <MapPin className="w-5 h-5 text-red-600" />
                <h3 className="text-xl font-semibold text-gray-900">{t('homeField')}</h3>
              </div>
              <p className="text-gray-700 font-medium">{t('homeFieldValue')}</p>
              <p className="text-gray-600 mt-2">{t('homeFieldDesc')}</p>
            </motion.div>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center"
          >
            <div className="w-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                培养特质 / Core Values
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <motion.div
                      key={value.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer"
                    >
                      <Icon className={`w-12 h-12 mx-auto mb-3 ${value.color}`} />
                      <p className="font-semibold text-gray-900">{value.label}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Team Photo Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <p className="text-blue-600 text-2xl font-semibold">Team Photo</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}