import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Star, TrendingUp, Shield, Zap } from 'lucide-react';

const LoanRecommendations = ({ userType = 'individual' }) => {
    // Individual Loan Products
    const individualLoans = [
        {
            id: 1,
            name: '신용대출',
            bank: '국민은행',
            eligibilityScore: 92,
            maxAmount: 50000000,
            interestRate: { min: 3.5, max: 6.8 },
            monthlyPayment: 450000,
            approvalTime: '1-2 영업일',
            features: ['한도 높음', '빠른 승인', '무담보'],
            recommended: true,
            recommendationReason: '신용점수 우수, 안정적 소득'
        },
        {
            id: 2,
            name: '주택담보대출',
            bank: '우리은행',
            eligibilityScore: 75,
            maxAmount: 300000000,
            interestRate: { min: 2.8, max: 4.5 },
            monthlyPayment: 1200000,
            approvalTime: '3-5 영업일',
            features: ['저금리', '장기 상환', '고액 한도'],
            recommended: false,
            recommendationReason: '주택 보유, 저금리 혜택'
        },
        {
            id: 3,
            name: '전세자금대출',
            bank: '신한은행',
            eligibilityScore: 85,
            maxAmount: 200000000,
            interestRate: { min: 2.1, max: 3.8 },
            monthlyPayment: 800000,
            approvalTime: '2-3 영업일',
            features: ['정부지원', '저금리', '장기대출'],
            recommended: false,
            recommendationReason: '무주택자 우대금리 적용'
        }
    ];

    // Business Loan Products
    const businessLoans = [
        {
            id: 1,
            name: '사업자 신용대출',
            bank: '기업은행',
            eligibilityScore: 88,
            maxAmount: 100000000,
            interestRate: { min: 4.2, max: 7.5 },
            monthlyPayment: 900000,
            approvalTime: '2-3 영업일',
            features: ['무담보', '운영자금', '빠른 승인'],
            recommended: true,
            recommendationReason: '매출 안정, 신용 양호'
        },
        {
            id: 2,
            name: '정책자금 융자',
            bank: '중소벤처기업진흥공단',
            eligibilityScore: 95,
            maxAmount: 200000000,
            interestRate: { min: 2.0, max: 3.5 },
            monthlyPayment: 800000,
            approvalTime: '7-14 영업일',
            features: ['초저금리', '거치기간', '정부지원'],
            recommended: true,
            recommendationReason: '정책자금 대상, 최저금리'
        },
        {
            id: 3,
            name: '설비자금대출',
            bank: '산업은행',
            eligibilityScore: 82,
            maxAmount: 150000000,
            interestRate: { min: 3.8, max: 6.2 },
            monthlyPayment: 950000,
            approvalTime: '5-7 영업일',
            features: ['장비구매', '장기상환', '우대금리'],
            recommended: false,
            recommendationReason: '설비투자 계획 시 유리'
        }
    ];

    const loans = userType === 'individual' ? individualLoans : businessLoans;
    const eligibilityData = {
        individual: {
            score: 92,
            creditScore: '750+',
            debtRatio: '35%',
            incomeStability: '안정'
        },
        business: {
            score: 88,
            creditScore: '680+',
            debtRatio: '42%',
            incomeStability: '양호'
        }
    };

    const currentData = userType === 'individual' ? eligibilityData.individual : eligibilityData.business;

    return (
        <motion.div
            className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-emerald-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
        >
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                    <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                        맞춤 대출 추천
                    </h3>
                    <p className="text-sm text-slate-600">
                        현재 상황에 최적화된 대출 상품을 분석했습니다
                    </p>
                </div>
            </div>

            {/* Eligibility Score */}
            <motion.div
                className="bg-white rounded-xl p-6 mb-6 shadow-sm"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
            >
                <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-lg">대출 자격 점수</h4>
                    <div className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-emerald-600" />
                        <span className="text-3xl font-bold text-emerald-600">{currentData.score}/100</span>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="h-3 bg-slate-100 rounded-full overflow-hidden mb-4">
                    <motion.div
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${currentData.score}%` }}
                        transition={{ duration: 1, delay: 0.6 }}
                    />
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-emerald-50 rounded-lg p-3">
                        <div className="text-2xl font-bold text-emerald-600">{currentData.creditScore}</div>
                        <div className="text-xs text-slate-500 mt-1">신용점수</div>
                    </div>
                    <div className="bg-emerald-50 rounded-lg p-3">
                        <div className="text-2xl font-bold text-emerald-600">{currentData.debtRatio}</div>
                        <div className="text-xs text-slate-500 mt-1">부채비율</div>
                    </div>
                    <div className="bg-emerald-50 rounded-lg p-3">
                        <div className="text-2xl font-bold text-emerald-600">{currentData.incomeStability}</div>
                        <div className="text-xs text-slate-500 mt-1">소득 안정성</div>
                    </div>
                </div>
            </motion.div>

            {/* Loan Products Grid */}
            <div className="grid md:grid-cols-2 gap-4">
                {loans.map((loan, index) => (
                    <motion.div
                        key={loan.id}
                        className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all ${loan.recommended ? 'border-2 border-emerald-200 ring-2 ring-emerald-100' : 'border border-slate-200'
                            }`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index + 0.7 }}
                        whileHover={{ y: -4 }}
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <h4 className="font-bold text-lg">{loan.name}</h4>
                                    {loan.recommended && (
                                        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full flex items-center gap-1">
                                            <Zap className="w-3 h-3" />
                                            추천
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm text-slate-500">{loan.bank}</p>
                            </div>
                            <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg">
                                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                <span className="text-sm font-bold text-amber-700">{loan.eligibilityScore}%</span>
                            </div>
                        </div>

                        {/* Loan Details */}
                        <div className="space-y-3 mb-4">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-slate-600">최대 한도</span>
                                <span className="font-bold text-slate-900">
                                    {(loan.maxAmount / 10000).toLocaleString()}만원
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-slate-600">금리</span>
                                <span className="font-bold text-emerald-600">
                                    {loan.interestRate.min}% ~ {loan.interestRate.max}%
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-slate-600">월 상환액 (예상)</span>
                                <span className="font-bold text-slate-900">
                                    {(loan.monthlyPayment / 10000).toLocaleString()}만원
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-slate-600">승인 기간</span>
                                <span className="text-sm font-semibold text-slate-700">{loan.approvalTime}</span>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {loan.features.map((feature, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full"
                                >
                                    {feature}
                                </span>
                            ))}
                        </div>

                        {/* Recommendation Reason */}
                        <div className="bg-emerald-50 rounded-lg p-3 mb-4">
                            <div className="flex items-start gap-2">
                                <Shield className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                                <p className="text-xs text-emerald-800">
                                    <span className="font-semibold">추천 이유:</span> {loan.recommendationReason}
                                </p>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2">
                            <button className="flex-1 px-4 py-2.5 bg-emerald-500 text-white rounded-lg text-sm font-semibold hover:bg-emerald-600 transition shadow-sm hover:shadow-md">
                                신청하기
                            </button>
                            <button className="px-4 py-2.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-200 transition">
                                비교
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Loan Calculator CTA */}
            <motion.div
                className="mt-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl p-6 text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                <div className="flex items-center justify-between">
                    <div>
                        <h4 className="font-bold text-lg mb-1">대출 상환 계산기</h4>
                        <p className="text-sm text-emerald-50">
                            월 상환액과 총 이자를 미리 계산해보세요
                        </p>
                    </div>
                    <button className="px-6 py-3 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 transition shadow-lg">
                        계산하기
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default LoanRecommendations;
