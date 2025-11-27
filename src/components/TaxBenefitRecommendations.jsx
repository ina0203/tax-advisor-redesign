import React from 'react';
import { motion } from 'framer-motion';
import {
    Sparkles, Pill, GraduationCap, Home, Heart, Shield, Car,
    Lightbulb, Laptop
} from 'lucide-react';

const TaxBenefitRecommendations = ({ userType = 'individual' }) => {
    // Individual Tax Benefits Data
    const individualBenefits = [
        {
            id: 1,
            category: '의료비 공제',
            icon: Pill,
            iconBg: 'bg-red-100',
            iconColor: 'text-red-600',
            priority: 'HIGH',
            priorityColor: 'bg-red-100 text-red-700',
            currentAmount: 890000,
            threshold: 1000000,
            additionalNeeded: 110000,
            potentialSaving: 130000,
            description: '현재 89만원 지출. 11만원 추가 시',
            savingText: '13만원 절세',
            actions: [
                { label: '병원 예약', primary: true },
                { label: '상세보기', primary: false }
            ]
        },
        {
            id: 2,
            category: '교육비 공제',
            icon: GraduationCap,
            iconBg: 'bg-blue-100',
            iconColor: 'text-blue-600',
            priority: 'MEDIUM',
            priorityColor: 'bg-amber-100 text-amber-700',
            maxDeduction: 3000000,
            currentUsage: 1500000,
            additionalPossible: 1500000,
            potentialSaving: 225000,
            description: '자녀 교육비 150만원 추가 시',
            savingText: '22.5만원 절세',
            actions: [
                { label: '영수증 수집', primary: true },
                { label: '상세보기', primary: false }
            ]
        },
        {
            id: 3,
            category: '주택자금 공제',
            icon: Home,
            iconBg: 'bg-green-100',
            iconColor: 'text-green-600',
            priority: 'ACTIVE',
            priorityColor: 'bg-green-100 text-green-700',
            annualInterest: 2400000,
            deductionRate: 0.4,
            potentialSaving: 960000,
            description: '연 240만원 이자 납입 중.',
            savingText: '96만원 소득공제',
            actions: [
                { label: '증명서 발급', primary: true },
                { label: '상세보기', primary: false }
            ]
        },
        {
            id: 4,
            category: '기부금 공제',
            icon: Heart,
            iconBg: 'bg-purple-100',
            iconColor: 'text-purple-600',
            priority: 'NEW',
            priorityColor: 'bg-blue-100 text-blue-700',
            recommendedAmount: 300000,
            potentialSaving: 45000,
            description: '연말 기부 30만원 시',
            savingText: '4.5만원 세액공제',
            bonus: '+ 사회공헌',
            actions: [
                { label: '기부하기', primary: true },
                { label: '상세보기', primary: false }
            ]
        }
    ];

    // Business Tax Benefits Data
    const businessBenefits = [
        {
            id: 1,
            category: '노란우산공제',
            icon: Shield,
            iconBg: 'bg-amber-100',
            iconColor: 'text-amber-600',
            priority: 'CRITICAL',
            priorityColor: 'bg-red-100 text-red-700',
            monthlyContribution: 500000,
            annualDeduction: 5000000,
            potentialSaving: 1650000,
            description: '월 50만원 납입 시 연',
            savingText: '165만원 절세',
            detail: '(소득공제 500만원)',
            actions: [
                { label: '가입 신청', primary: true },
                { label: '상세보기', primary: false }
            ]
        },
        {
            id: 2,
            category: '업무용 승용차',
            icon: Car,
            iconBg: 'bg-blue-100',
            iconColor: 'text-blue-600',
            priority: 'HIGH',
            priorityColor: 'bg-amber-100 text-amber-700',
            maxDeduction: 15000000,
            potentialSaving: 4950000,
            description: '운행일지 작성으로 연 1,500만원 한도 비용인정.',
            savingText: '495만원 절세',
            actions: [
                { label: '앱 설치', primary: true },
                { label: '상세보기', primary: false }
            ]
        },
        {
            id: 3,
            category: '연구개발비',
            icon: Lightbulb,
            iconBg: 'bg-purple-100',
            iconColor: 'text-purple-600',
            priority: 'ELIGIBLE',
            priorityColor: 'bg-green-100 text-green-700',
            investmentAmount: 10000000,
            taxCreditRate: 0.25,
            potentialSaving: 2500000,
            description: 'R&D 투자 1,000만원 시',
            savingText: '250만원 세액공제',
            detail: '(25%)',
            actions: [
                { label: '비용 분류', primary: true },
                { label: '상세보기', primary: false }
            ]
        },
        {
            id: 4,
            category: '장비 감가상각',
            icon: Laptop,
            iconBg: 'bg-emerald-100',
            iconColor: 'text-emerald-600',
            priority: 'OPTIMIZE',
            priorityColor: 'bg-blue-100 text-blue-700',
            description: '즉시상각 적용으로',
            savingText: '올해 전액 비용처리',
            detail: '가능',
            actions: [
                { label: '계산하기', primary: true },
                { label: '상세보기', primary: false }
            ]
        }
    ];

    const benefits = userType === 'individual' ? individualBenefits : businessBenefits;

    return (
        <motion.div
            className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border-2 border-indigo-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        AI 맞춤 세금 혜택 추천
                    </h3>
                    <p className="text-sm text-slate-600">
                        {userType === 'individual' ? '개인 맞춤형' : '사업자 맞춤형'} 절세 전략을 분석했습니다
                    </p>
                </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                    <motion.div
                        key={benefit.id}
                        className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border border-indigo-100"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        whileHover={{ y: -4 }}
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 ${benefit.iconBg} rounded-lg flex items-center justify-center`}>
                                    <benefit.icon className={`w-5 h-5 ${benefit.iconColor}`} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">{benefit.category}</h4>
                                    <p className="text-xs text-slate-500">
                                        {benefit.priority === 'HIGH' && '임계값 근접'}
                                        {benefit.priority === 'MEDIUM' && '추가 가능'}
                                        {benefit.priority === 'ACTIVE' && '이자 납입'}
                                        {benefit.priority === 'NEW' && '추천'}
                                        {benefit.priority === 'CRITICAL' && '필수 가입'}
                                        {benefit.priority === 'ELIGIBLE' && '세액공제'}
                                        {benefit.priority === 'OPTIMIZE' && '최적화'}
                                    </p>
                                </div>
                            </div>
                            <span className={`px-3 py-1 ${benefit.priorityColor} text-xs font-bold rounded-full`}>
                                {benefit.priority}
                            </span>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-slate-700 mb-3">
                            {benefit.description}{' '}
                            <span className="font-bold text-indigo-600">{benefit.savingText}</span>
                            {benefit.detail && ` ${benefit.detail}`}
                            {benefit.bonus && (
                                <span className="text-emerald-600"> {benefit.bonus}</span>
                            )}
                        </p>

                        {/* Actions */}
                        <div className="flex gap-2">
                            {benefit.actions.map((action, idx) => (
                                <button
                                    key={idx}
                                    className={`${action.primary
                                            ? 'flex-1 px-4 py-2 bg-indigo-500 text-white rounded-lg text-sm font-semibold hover:bg-indigo-600 transition'
                                            : 'px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-200 transition'
                                        }`}
                                >
                                    {action.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Summary */}
            <motion.div
                className="mt-6 bg-white rounded-xl p-6 border-2 border-indigo-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                <div className="flex items-center justify-between">
                    <div>
                        <h4 className="font-bold text-lg mb-1">총 절세 가능 금액</h4>
                        <p className="text-sm text-slate-600">
                            위 추천사항을 모두 적용할 경우
                        </p>
                    </div>
                    <div className="text-right">
                        <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            {userType === 'individual' ? '₩1,360,500' : '₩7,095,000'}
                        </div>
                        <p className="text-sm text-emerald-600 font-semibold">연간 절세액</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default TaxBenefitRecommendations;
