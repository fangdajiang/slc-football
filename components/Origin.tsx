'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Users, Award, GraduationCap } from 'lucide-react';

export default function Origin() {
  const t = useTranslations('origin');

  const founders = [
    { name: '王硕', title: '西班牙二级教练', icon: Award },
    { name: '闵栋', title: '上海足协E级教练', icon: GraduationCap },
    { name: '龚珮瑜', title: '上海足协E级教练', icon: GraduationCap }
  ];

  return (
    <section id="origin" className="py-20 bg-white">
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
          <p className="text-xl text-gray-600">{t('subtitle')}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mt-4" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Founding Context */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl p-8 mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Users className="w-6 h-6 mr-2 text-blue-600" />
              {t('context')}
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              {t('contextDesc')}
            </p>
          </motion.div>

          {/* Founders */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              创始团队 / Founding Team
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {founders.map((founder, index) => {
                const Icon = founder.icon;
                return (
                  <motion.div
                    key={founder.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-lg shadow-lg p-6 text-center"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Icon className="w-10 h-10 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{founder.name}</h4>
                    <p className="text-gray-600">{founder.title}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Coach Certificates Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid md:grid-cols-2 gap-6"
          >
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <Award className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-500">西班牙足球教练证书</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <GraduationCap className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-500">上海足协教练证书</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}