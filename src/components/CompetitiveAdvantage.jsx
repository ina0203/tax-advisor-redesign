import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Brain, Shield, TrendingUp, Award, Sparkles, CheckCircle, Target } from 'lucide-react';

const CompetitiveAdvantage = () => {
    const advantages = [
        {
            icon: Brain,
            title: '세무사급 AI 분석',
            description: '15년 경력 세무사의 노하우를 학습한 AI가 실시간으로 절세 기회를 찾아드립니다',
            stats: '평균 연 82만원 추가 절세',
            color: 'from-purple-500 to-indigo-500',
            unique: true,
        },
        {
            icon: Zap,
            title: '98% OCR 정확도',
            description: '업계 최고 수준의 영수증 인식 기술로 수동 입력 시간을 99% 단축합니다',
            stats: '월 12시간 절약',
            color: 'from-blue-500 to-cyan-500',
            unique: true,
        },
        {
            icon: Target,
            title: '실시간 절세 알림',
            description: '공제 한도 임계값 도달 시 즉시 알림으로 놓치는 세금 혜택이 없습니다',
            stats: '평균 3.2개 공제 항목 추가 발견',
            color: 'from-green-500 to-emerald-500',
            unique: true,
        },
        {
            icon: Award,
            title: '게이미피케이션',
            description: '절약을 재미있게! 챌린지, 리워드, 레벨업 시스템으로 동기부여를 높입니다',
            stats: '사용자 리텐션율 87%',
            color: 'from-yellow-500 to-orange-500',
            unique: true,
        },
    ];

    const comparisonFeatures = [
        { feature: 'AI 자동 분류', taxAdvisor: true, others: false },
        { feature: '실시간 절세 알림', taxAdvisor: true, others: false },
        { feature: '세무사급 인사이트', taxAdvisor: true, others: false },
        { feature: '게이미피케이션', taxAdvisor: true, others: false },
        { feature: 'OCR 영수증 스캔', taxAdvisor: true, others: true },
        { feature: '예산 관리', taxAdvisor: true, others: true },
        { feature: '카드 연동', taxAdvisor: true, others: true },
    ];

    return (
        <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
                        <Sparkles className="w-4 h-4" />
                        <span>TaxAdvisor만의 차별점</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        왜 TaxAdvisor를
                        <br />
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            선택해야 할까요?
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        단순한 영수증 관리를 넘어, AI 기반 세금 최적화 솔루션을 제공합니다
                    </p>
                </motion.div>

                {/* Unique Advantages Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {advantages.map((advantage, index) => (
                        <motion.div
                            key={index}
                            className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-200 overflow-hidden group"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, y: -5 }}
                        >
                            {/* Unique Badge */}
                            {advantage.unique && (
                                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold">
                                    UNIQUE
                                </div>
                            )}

                            {/* Background Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${advantage.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                            <div className="relative">
                                <div className={`w-16 h-16 bg-gradient-to-br ${advantage.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                                    <advantage.icon className="w-8 h-8 text-white" />
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">{advantage.description}</p>

                                <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${advantage.color} bg-opacity-10 rounded-lg`}>
                                    <TrendingUp className="w-5 h-5 text-gray-700" />
                                    <span className="font-semibold text-gray-900">{advantage.stats}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Comparison Table */}
                <motion.div
                    className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        TaxAdvisor vs 일반 가계부 앱
                    </h3>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b-2 border-gray-200">
                                    <th className="text-left py-4 px-4 font-semibold text-gray-700">기능</th>
                                    <th className="text-center py-4 px-4">
                                        <div className="flex flex-col items-center">
                                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-2">
                                                <Shield className="w-6 h-6 text-white" />
                                            </div>
                                            <span className="font-bold text-gray-900">TaxAdvisor</span>
                                        </div>
                                    </th>
                                    <th className="text-center py-4 px-4">
                                        <div className="flex flex-col items-center">
                                            <div className="w-12 h-12 bg-gray-300 rounded-xl flex items-center justify-center mb-2">
                                                <span className="text-2xl">📱</span>
                                            </div>
                                            <span className="font-bold text-gray-900">일반 앱</span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonFeatures.map((item, index) => (
                                    <motion.tr
                                        key={index}
                                        className="border-b border-gray-100 hover:bg-gray-50"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                    >
                                        <td className="py-4 px-4 text-gray-700 font-medium">{item.feature}</td>
                                        <td className="py-4 px-4 text-center">
                                            {item.taxAdvisor ? (
                                                <div className="flex justify-center">
                                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                                        <CheckCircle className="w-5 h-5 text-green-600" />
                                                    </div>
                                                </div>
                                            ) : (
                                                <span className="text-gray-400">-</span>
                                            )}
                                        </td>
                                        <td className="py-4 px-4 text-center">
                                            {item.others ? (
                                                <div className="flex justify-center">
                                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                                        <CheckCircle className="w-5 h-5 text-blue-600" />
                                                    </div>
                                                </div>
                                            ) : (
                                                <span className="text-gray-400">-</span>
                                            )}
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-gray-600 mb-4">
                            TaxAdvisor는 단순 가계부가 아닌 <span className="font-bold text-gray-900">AI 기반 세금 최적화 플랫폼</span>입니다
                        </p>
                        <motion.button
                            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            차별점 직접 체험하기
                        </motion.button>
                    </div>
                </motion.div>

                {/* Bottom Stats */}
                <motion.div
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {[
                        { label: '사용자 만족도', value: '98%', icon: '⭐' },
                        { label: '평균 절세액', value: '₩82만', icon: '💰' },
                        { label: 'AI 정확도', value: '98%', icon: '🎯' },
                        { label: '시간 절약', value: '월 12시간', icon: '⏰' },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="text-3xl mb-2">{stat.icon}</div>
                            <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-600">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default CompetitiveAdvantage;
