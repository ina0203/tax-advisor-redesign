import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Crown, Zap, Building, ArrowRight, Sparkles } from 'lucide-react';

const PricingPlans = ({ onSelectPlan }) => {
    const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'annual'

    const plans = [
        {
            id: 'free',
            name: '무료',
            price: 0,
            annualPrice: 0,
            description: '개인 사용자를 위한 기본 기능',
            icon: Zap,
            color: 'from-gray-500 to-gray-600',
            popular: false,
            features: [
                { name: '월 50개 영수증 등록', included: true },
                { name: '수동 카테고리 분류', included: true },
                { name: '기본 예산 관리', included: true },
                { name: '월간 리포트', included: true },
                { name: 'AI 자동 분류', included: false },
                { name: '세금 예측', included: false },
                { name: 'OCR 영수증 스캔', included: false },
                { name: '실시간 절세 알림', included: false },
                { name: '전문가 상담', included: false },
            ],
            cta: '무료로 시작하기',
        },
        {
            id: 'premium',
            name: '프리미엄',
            price: 9900,
            annualPrice: 7920, // 20% discount
            description: '개인 및 프리랜서를 위한 완벽한 솔루션',
            icon: Crown,
            color: 'from-blue-500 to-purple-600',
            popular: true,
            features: [
                { name: '무제한 영수증 등록', included: true },
                { name: 'AI 자동 분류 (98% 정확도)', included: true },
                { name: '고급 예산 관리', included: true },
                { name: '실시간 세금 예측', included: true },
                { name: 'OCR 영수증 스캔', included: true },
                { name: '실시간 절세 알림', included: true },
                { name: '세무사급 AI 인사이트', included: true },
                { name: '카드/계좌 자동 연동', included: true },
                { name: '우선 고객 지원', included: true },
            ],
            cta: '프리미엄 시작하기',
            badge: '가장 인기',
        },
        {
            id: 'business',
            name: '비즈니스',
            price: 29900,
            annualPrice: 23920, // 20% discount
            description: '소상공인 및 사업자를 위한 프로 솔루션',
            icon: Building,
            color: 'from-purple-600 to-pink-600',
            popular: false,
            features: [
                { name: '프리미엄의 모든 기능', included: true },
                { name: '다중 사용자 (최대 5명)', included: true },
                { name: '세무사 협업 기능', included: true },
                { name: '부가세 자동 신고', included: true },
                { name: '종합소득세 자동 계산', included: true },
                { name: 'API 연동', included: true },
                { name: '맞춤형 리포트', included: true },
                { name: '전담 고객 매니저', included: true },
                { name: '우선 전화 지원', included: true },
            ],
            cta: '비즈니스 시작하기',
        },
    ];

    const formatPrice = (price, annual) => {
        if (price === 0) return '무료';
        const displayPrice = billingCycle === 'annual' ? annual : price;
        return `₩${displayPrice.toLocaleString()}`;
    };

    return (
        <div className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        당신에게 맞는
                        <br />
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            플랜을 선택하세요
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                        언제든지 업그레이드 또는 다운그레이드 가능합니다
                    </p>

                    {/* Billing Toggle */}
                    <div className="inline-flex items-center gap-4 bg-gray-100 rounded-full p-1">
                        <button
                            onClick={() => setBillingCycle('monthly')}
                            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${billingCycle === 'monthly'
                                    ? 'bg-white text-gray-900 shadow-md'
                                    : 'text-gray-600'
                                }`}
                        >
                            월간 결제
                        </button>
                        <button
                            onClick={() => setBillingCycle('annual')}
                            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${billingCycle === 'annual'
                                    ? 'bg-white text-gray-900 shadow-md'
                                    : 'text-gray-600'
                                }`}
                        >
                            연간 결제
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                                20% 할인
                            </span>
                        </button>
                    </div>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.id}
                            className={`relative bg-white rounded-2xl shadow-xl border-2 overflow-hidden ${plan.popular ? 'border-blue-500 scale-105' : 'border-gray-200'
                                }`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg flex items-center gap-1">
                                    <Sparkles className="w-4 h-4" />
                                    {plan.badge}
                                </div>
                            )}

                            <div className="p-8">
                                {/* Plan Header */}
                                <div className="mb-6">
                                    <div className={`w-14 h-14 bg-gradient-to-br ${plan.color} rounded-xl flex items-center justify-center mb-4`}>
                                        <plan.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                    <p className="text-gray-600 text-sm">{plan.description}</p>
                                </div>

                                {/* Price */}
                                <div className="mb-6">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-bold text-gray-900">
                                            {formatPrice(plan.price, plan.annualPrice)}
                                        </span>
                                        {plan.price > 0 && (
                                            <span className="text-gray-600">/ {billingCycle === 'monthly' ? '월' : '월'}</span>
                                        )}
                                    </div>
                                    {billingCycle === 'annual' && plan.price > 0 && (
                                        <p className="text-sm text-green-600 mt-1">
                                            연간 ₩{((plan.price - plan.annualPrice) * 12).toLocaleString()} 절약
                                        </p>
                                    )}
                                </div>

                                {/* CTA Button */}
                                <motion.button
                                    onClick={() => onSelectPlan && onSelectPlan(plan.id)}
                                    className={`w-full py-3 rounded-xl font-semibold mb-6 transition-all duration-200 flex items-center justify-center gap-2 ${plan.popular
                                            ? `bg-gradient-to-r ${plan.color} text-white shadow-lg hover:shadow-xl`
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {plan.cta}
                                    <ArrowRight className="w-5 h-5" />
                                </motion.button>

                                {/* Features List */}
                                <div className="space-y-3">
                                    {plan.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            {feature.included ? (
                                                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            ) : (
                                                <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                                            )}
                                            <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                                                {feature.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Feature Comparison Table (Desktop) */}
                <motion.div
                    className="hidden lg:block bg-white rounded-2xl shadow-xl p-8 border border-gray-200"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">상세 기능 비교</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b-2 border-gray-200">
                                    <th className="text-left py-4 px-4 font-semibold text-gray-900">기능</th>
                                    {plans.map(plan => (
                                        <th key={plan.id} className="text-center py-4 px-4 font-semibold text-gray-900">
                                            {plan.name}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {plans[1].features.map((_, idx) => (
                                    <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="py-3 px-4 text-gray-700">{plans[0].features[idx].name}</td>
                                        {plans.map(plan => (
                                            <td key={plan.id} className="py-3 px-4 text-center">
                                                {plan.features[idx].included ? (
                                                    <Check className="w-5 h-5 text-green-500 mx-auto" />
                                                ) : (
                                                    <X className="w-5 h-5 text-gray-300 mx-auto" />
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* Trust Section */}
                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <p className="text-gray-600 mb-4">
                        ✓ 신용카드 등록 없이 무료 체험 가능 &nbsp;&nbsp; ✓ 언제든지 취소 가능 &nbsp;&nbsp; ✓ 환불 보장 (14일)
                    </p>
                    <p className="text-sm text-gray-500">
                        모든 플랜에는 SSL 암호화 및 금융보안원 인증이 포함됩니다
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default PricingPlans;
