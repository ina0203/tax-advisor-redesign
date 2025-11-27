import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Briefcase, User, ChevronLeft, ChevronRight, TrendingUp, Clock, Shield, Star } from 'lucide-react';

const PersonaShowcase = () => {
    const [activePersona, setActivePersona] = useState(0);

    const personas = [
        {
            id: 1,
            type: '쇼핑몰 운영자',
            name: '김지은',
            age: 35,
            icon: ShoppingBag,
            avatar: '👩‍💼',
            color: 'from-pink-500 to-rose-500',
            bgColor: 'bg-pink-50',
            painPoints: [
                '매일 수십 개의 영수증 관리가 너무 복잡해요',
                '부가세 신고 때마다 밤샘 작업이에요',
                '어떤 비용이 공제되는지 몰라서 손해 봤어요',
            ],
            solutions: [
                'OCR로 영수증 자동 인식 및 분류',
                '부가세 자동 계산 및 신고서 생성',
                'AI가 놓친 공제 항목 실시간 알림',
            ],
            expectedSavings: '연 평균 ₩1,250,000',
            timesSaved: '월 12시간',
            testimonial: '"영수증 정리에 쓰던 시간을 이제 사업 확장에 쓸 수 있어요. 세금도 작년보다 120만원 절약했습니다!"',
            rating: 4.9,
        },
        {
            id: 2,
            type: '프리랜서',
            name: '박민수',
            age: 32,
            icon: Briefcase,
            avatar: '👨‍💻',
            color: 'from-blue-500 to-cyan-500',
            bgColor: 'bg-blue-50',
            painPoints: [
                '프로젝트별 경비 관리가 어려워요',
                '종합소득세 신고가 너무 복잡해요',
                '세무사 비용이 부담스러워요',
            ],
            solutions: [
                '프로젝트별 자동 경비 분류',
                '종합소득세 예상 금액 실시간 계산',
                'AI 세무 상담으로 비용 절감',
            ],
            expectedSavings: '연 평균 ₩820,000',
            timesSaved: '월 8시간',
            testimonial: '"세무사 없이도 종소세 신고를 완벽하게 끝냈어요. 예상보다 82만원을 더 환급받았습니다!"',
            rating: 4.8,
        },
        {
            id: 3,
            type: '직장인',
            name: '이서연',
            age: 38,
            icon: User,
            avatar: '👩‍🏫',
            color: 'from-purple-500 to-indigo-500',
            bgColor: 'bg-purple-50',
            painPoints: [
                '연말정산 때마다 뭘 준비해야 할지 몰라요',
                '공제 항목을 놓쳐서 손해 봤어요',
                '의료비, 교육비 영수증 찾기가 힘들어요',
            ],
            solutions: [
                '연말정산 필요 서류 자동 정리',
                '공제 한도 실시간 추적 및 알림',
                '카드 내역 자동 연동 및 분류',
            ],
            expectedSavings: '연 평균 ₩650,000',
            timesSaved: '월 4시간',
            testimonial: '"올해는 의료비 공제를 하나도 안 놓쳤어요. 작년보다 65만원을 더 환급받았습니다!"',
            rating: 4.9,
        },
    ];

    const nextPersona = () => {
        setActivePersona((prev) => (prev + 1) % personas.length);
    };

    const prevPersona = () => {
        setActivePersona((prev) => (prev - 1 + personas.length) % personas.length);
    };

    const currentPersona = personas[activePersona];

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
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        당신과 같은 분들이
                        <br />
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            이미 사용하고 있습니다
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        다양한 직업군의 사용자들이 TaxAdvisor로 시간과 돈을 절약하고 있습니다
                    </p>
                </motion.div>

                {/* Persona Selector */}
                <div className="flex justify-center gap-4 mb-12">
                    {personas.map((persona, index) => (
                        <motion.button
                            key={persona.id}
                            onClick={() => setActivePersona(index)}
                            className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activePersona === index
                                    ? 'bg-gradient-to-r ' + persona.color + ' text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <persona.icon className="w-5 h-5" />
                            <span className="hidden sm:inline">{persona.type}</span>
                        </motion.button>
                    ))}
                </div>

                {/* Persona Card */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentPersona.id}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.4 }}
                        className={`${currentPersona.bgColor} rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200`}
                    >
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Left: Persona Info */}
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="text-6xl">{currentPersona.avatar}</div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">{currentPersona.name}</h3>
                                        <p className="text-lg text-gray-600">{currentPersona.type}, {currentPersona.age}세</p>
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <span className="text-2xl">😰</span>
                                        이런 고민이 있으셨나요?
                                    </h4>
                                    <ul className="space-y-3">
                                        {currentPersona.painPoints.map((point, index) => (
                                            <motion.li
                                                key={index}
                                                className="flex items-start gap-3 text-gray-700"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                <span className="text-red-500 mt-1">•</span>
                                                <span>{point}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mb-8">
                                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <span className="text-2xl">✨</span>
                                        TaxAdvisor가 해결해드려요
                                    </h4>
                                    <ul className="space-y-3">
                                        {currentPersona.solutions.map((solution, index) => (
                                            <motion.li
                                                key={index}
                                                className="flex items-start gap-3 text-gray-700"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 + 0.3 }}
                                            >
                                                <Shield className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span>{solution}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Right: Results & Testimonial */}
                            <div className="flex flex-col justify-between">
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-6">실제 효과</h4>

                                    <div className="grid grid-cols-2 gap-4 mb-8">
                                        <motion.div
                                            className="bg-white rounded-xl p-6 shadow-md"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <TrendingUp className="w-8 h-8 text-green-500 mb-2" />
                                            <div className="text-2xl font-bold text-gray-900 mb-1">
                                                {currentPersona.expectedSavings}
                                            </div>
                                            <div className="text-sm text-gray-600">절세 효과</div>
                                        </motion.div>

                                        <motion.div
                                            className="bg-white rounded-xl p-6 shadow-md"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <Clock className="w-8 h-8 text-blue-500 mb-2" />
                                            <div className="text-2xl font-bold text-gray-900 mb-1">
                                                {currentPersona.timesSaved}
                                            </div>
                                            <div className="text-sm text-gray-600">시간 절약</div>
                                        </motion.div>
                                    </div>

                                    <div className="bg-white rounded-xl p-6 shadow-md">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-5 h-5 ${i < Math.floor(currentPersona.rating)
                                                                ? 'text-yellow-400 fill-yellow-400'
                                                                : 'text-gray-300'
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-sm font-semibold text-gray-700">{currentPersona.rating}</span>
                                        </div>
                                        <p className="text-gray-700 italic leading-relaxed">
                                            {currentPersona.testimonial}
                                        </p>
                                        <p className="text-sm text-gray-500 mt-3">- {currentPersona.name}</p>
                                    </div>
                                </div>

                                <motion.button
                                    className={`mt-8 w-full py-4 bg-gradient-to-r ${currentPersona.color} text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200`}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {currentPersona.type}로 시작하기
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <div className="flex justify-center gap-4 mt-8">
                    <motion.button
                        onClick={prevPersona}
                        className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl border border-gray-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-700" />
                    </motion.button>
                    <motion.button
                        onClick={nextPersona}
                        className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl border border-gray-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ChevronRight className="w-6 h-6 text-gray-700" />
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default PersonaShowcase;
