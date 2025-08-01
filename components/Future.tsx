'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Target, Rocket, Handshake, ChevronRight } from 'lucide-react';

export default function Future() {
  const t = useTranslations('future');

  const goals = [
    {
      icon: Target,
      title: t('shortTerm'),
      description: t('shortTermDesc'),
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Rocket,
      title: t('longTerm'),
      description: t('longTermDesc'),
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Handshake,
      title: t('cooperation'),
      description: t('cooperationDesc'),
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="future" className="py-20 bg-gray-50">
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

        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {goals.map((goal, index) => {
              const Icon = goal.icon;
              return (
                <motion.div
                  key={goal.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="md:flex">
                    <div className={`md:w-1/3 p-8 bg-gradient-to-br ${goal.color} flex items-center justify-center`}>
                      <div className="text-center">
                        <Icon className="w-20 h-20 text-white mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-white">{goal.title}</h3>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-8 flex items-center">
                      <div>
                        <p className="text-gray-700 leading-relaxed text-lg mb-4">
                          {goal.description}
                        </p>
                        <motion.button
                          whileHover={{ x: 5 }}
                          className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                        >
                          了解更多 <ChevronRight className="w-4 h-4 ml-1" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Partnership Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              合作伙伴 / Partners
            </h3>
            <div className="flex justify-center items-center space-x-8">
              <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Logo 1</span>
              </div>
              <div className="text-4xl font-bold text-gray-400">+</div>
              <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Logo 2</span>
              </div>
              <div className="text-4xl font-bold text-gray-400">=</div>
              <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-red-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-bold">2025</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}