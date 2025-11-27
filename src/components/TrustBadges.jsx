import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Award, CheckCircle, Users, TrendingUp, Star, Building } from 'lucide-react';

const TrustBadges = () => {
    const certifications = [
        {
            icon: Shield,
            title: 'SSL 암호화',
            description: '256-bit SSL 암호화로 데이터 전송 보호',
            color: 'from-green-500 to-emerald-500',
        },
        {
            icon: Lock,
            title: '개인정보 비식별 처리',
            description: 'GDPR 및 개인정보보호법 완벽 준수',
            color: 'from-blue-500 to-cyan-500',
        },
        {
            icon: Award,
            title: '금융보안원 인증',
            description: '금융 데이터 보안 인증 획득',
            color: 'from-purple-500 to-indigo-500',
        },
        {
            icon: CheckCircle,
            title: 'ISO 27001 준수',
            description: '정보보안 국제 표준 인증',
            color: 'from-orange-500 to-red-500',
        },
    ];

    const trustStats = [
        { icon: Users, value: '15,234+', label: '활성 사용자' },
        { icon: TrendingUp, value: '₩125억+', label: '누적 절세액' },
        { icon: Star, value: '4.9/5.0', label: '평균 평점' },
        { icon: Building, value: '50+', label: '제휴 금융사' },
    ];

    const partners = [
        { name: '신한은행', logo: '🏦' },
        { name: 'KB국민은행', logo: '🏦' },
        { name: '카카오뱅크', logo: '🏦' },
        { name: '토스뱅크', logo: '🏦' },
        { name: '신한카드', logo: '💳' },
        { name: '삼성카드', logo: '💳' },
        { name: '현대카드', logo: '💳' },
        { name: 'BC카드', logo: '💳' },
    ];

    return (
        <div className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            안전하고 신뢰할 수 있는
                        </span>
                        <br />
                        세금 관리 플랫폼
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        금융 데이터 보안은 우리의 최우선 과제입니다
                    </p>
                </motion.div>

                {/* Security Certifications */}
                <div className="grid md:grid-cols-4 gap-6 mb-16">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                                <cert.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
                            <p className="text-sm text-gray-600">{cert.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Statistics */}
                <motion.div
                    className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 mb-16"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        숫자로 보는 신뢰
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {trustStats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <stat.icon className="w-12 h-12 mx-auto mb-3 text-blue-600" />
                                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-600">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Partner Logos */}
                <motion.div
                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        신뢰할 수 있는 파트너사
                    </h3>
                    <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
                        {partners.map((partner, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                <div className="text-3xl mb-2">{partner.logo}</div>
                                <div className="text-xs text-gray-600 text-center">{partner.name}</div>
                            </motion.div>
                        ))}
                    </div>
                    <p className="text-center text-gray-600 mt-8">
                        그 외 40여 개 금융기관과 제휴 중
                    </p>
                </motion.div>

                {/* Security Promise */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="inline-flex flex-col md:flex-row items-center gap-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 shadow-2xl">
                        <Shield className="w-16 h-16" />
                        <div className="text-left">
                            <h4 className="text-2xl font-bold mb-2">100% 보안 보장</h4>
                            <p className="text-blue-100">
                                귀하의 금융 데이터는 은행급 보안으로 보호됩니다.
                                어떠한 경우에도 제3자와 공유되지 않습니다.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default TrustBadges;
