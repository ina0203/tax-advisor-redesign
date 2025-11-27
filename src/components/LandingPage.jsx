import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from './HeroSection';
import PersonaShowcase from './PersonaShowcase';
import CompetitiveAdvantage from './CompetitiveAdvantage';
import FeatureRoadmap from './FeatureRoadmap';
import PricingPlans from './PricingPlans';
import TrustBadges from './TrustBadges';
import CommunityForum from './CommunityForum';
import FeedbackForm from './FeedbackForm';
import { MessageCircle, X, ChevronDown } from 'lucide-react';

const LandingPage = ({ onGetStarted }) => {
    const [showFeedbackModal, setShowFeedbackModal] = useState(false);
    const [showFAQ, setShowFAQ] = useState(false);

    const faqs = [
        {
            question: 'TaxAdvisor는 무료인가요?',
            answer: '기본 기능은 무료로 사용하실 수 있습니다. 월 50개까지 영수증 등록, 수동 분류, 기본 예산 관리 기능을 제공합니다. AI 자동 분류, 세금 예측, OCR 스캔 등 고급 기능은 프리미엄 플랜(월 9,900원)에서 이용 가능합니다.',
        },
        {
            question: '내 금융 데이터는 안전한가요?',
            answer: '네, 100% 안전합니다. 256-bit SSL 암호화로 모든 데이터를 보호하며, 금융보안원 인증 및 ISO 27001 국제 표준을 준수합니다. 귀하의 데이터는 어떠한 경우에도 제3자와 공유되지 않습니다.',
        },
        {
            question: '어떤 은행/카드사와 연동되나요?',
            answer: '신한, KB국민, 우리, 하나, NH농협, 카카오뱅크, 토스뱅크 등 주요 은행과 신한카드, 삼성카드, 현대카드, BC카드 등 50개 이상의 금융기관과 연동됩니다.',
        },
        {
            question: 'OCR 영수증 인식은 얼마나 정확한가요?',
            answer: '업계 최고 수준인 98%의 정확도를 자랑합니다. 명확하게 촬영된 영수증은 거의 100% 정확하게 인식하며, 인식이 잘못된 경우 쉽게 수정할 수 있습니다.',
        },
        {
            question: '프리랜서도 사용할 수 있나요?',
            answer: '물론입니다! TaxAdvisor는 개인, 프리랜서, 소상공인 모두를 위한 서비스입니다. 프리랜서의 경우 프로젝트별 경비 관리, 종합소득세 예측, 경비 증빙 자동 정리 등의 기능이 특히 유용합니다.',
        },
        {
            question: '언제든지 취소할 수 있나요?',
            answer: '네, 언제든지 취소 가능합니다. 위약금이나 추가 비용 없이 즉시 취소하실 수 있으며, 14일 이내 환불도 보장됩니다.',
        },
        {
            question: '세무사 상담도 받을 수 있나요?',
            answer: '프리미엄 플랜 이상에서는 AI 세무 상담을 무제한 이용하실 수 있습니다. 비즈니스 플랜에서는 전문 세무사와의 1:1 실시간 채팅 상담도 제공됩니다 (Q1 2026 출시 예정).',
        },
        {
            question: '모바일 앱도 있나요?',
            answer: '현재는 웹 버전을 제공하고 있으며, 모바일 브라우저에서도 완벽하게 작동합니다. iOS/Android 네이티브 앱은 2026년 상반기 출시 예정입니다.',
        },
    ];

    const [expandedFAQ, setExpandedFAQ] = useState(null);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection onGetStarted={onGetStarted} />

            {/* Persona Showcase */}
            <PersonaShowcase />

            {/* Competitive Advantage */}
            <CompetitiveAdvantage />

            {/* Feature Roadmap */}
            <FeatureRoadmap />

            {/* Pricing Plans */}
            <PricingPlans onSelectPlan={onGetStarted} />

            {/* Trust Badges */}
            <TrustBadges />

            {/* Community Preview */}
            <CommunityForum />

            {/* FAQ Section */}
            <div className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            자주 묻는 질문
                        </h2>
                        <p className="text-xl text-gray-600">
                            궁금하신 점이 있으신가요?
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                            >
                                <button
                                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${expandedFAQ === index ? 'transform rotate-180' : ''
                                            }`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {expandedFAQ === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-4 text-gray-600 border-t border-gray-100 pt-4">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="mt-12 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <p className="text-gray-600 mb-4">더 궁금하신 점이 있으신가요?</p>
                        <button
                            onClick={() => setShowFeedbackModal(true)}
                            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                        >
                            문의하기
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-300 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8 mb-12">
                        <div>
                            <h3 className="text-white text-2xl font-bold mb-4">TaxAdvisor</h3>
                            <p className="text-sm mb-4">
                                AI 기반 세금 최적화 플랫폼
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="text-2xl hover:text-white transition-colors">📘</a>
                                <a href="#" className="text-2xl hover:text-white transition-colors">📷</a>
                                <a href="#" className="text-2xl hover:text-white transition-colors">🐦</a>
                                <a href="#" className="text-2xl hover:text-white transition-colors">💼</a>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-4">서비스</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white transition-colors">기능 소개</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">요금제</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">로드맵</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">커뮤니티</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-4">회사</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white transition-colors">회사 소개</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">블로그</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">채용</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">파트너십</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-4">지원</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white transition-colors">고객센터</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">이용약관</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">개인정보처리방침</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">쿠키 정책</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-sm">
                                © 2025 TaxAdvisor. All rights reserved.
                            </p>
                            <p className="text-sm">
                                사업자등록번호: 123-45-67890 | 대표: 홍길동 | 서울특별시 강남구
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Floating Feedback Button */}
            <motion.button
                onClick={() => setShowFeedbackModal(true)}
                className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
            >
                <MessageCircle className="w-6 h-6" />
            </motion.button>

            {/* Feedback Modal */}
            <AnimatePresence>
                {showFeedbackModal && (
                    <motion.div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowFeedbackModal(false)}
                    >
                        <motion.div
                            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8"
                            initial={{ scale: 0.9, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 50 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setShowFeedbackModal(false)}
                                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6 text-gray-500" />
                            </button>
                            <FeedbackForm onClose={() => setShowFeedbackModal(false)} />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LandingPage;
