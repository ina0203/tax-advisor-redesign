import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Clock, Sparkles, ThumbsUp, Calendar, TrendingUp, Users, MessageCircle } from 'lucide-react';

const FeatureRoadmap = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', name: '전체', icon: Sparkles },
        { id: 'core', name: '핵심 기능', icon: CheckCircle },
        { id: 'ai', name: 'AI & 자동화', icon: TrendingUp },
        { id: 'integration', name: '연동', icon: Users },
        { id: 'community', name: '커뮤니티', icon: MessageCircle },
    ];

    const features = [
        {
            id: 1,
            name: 'OCR 영수증 스캔',
            description: '사진 촬영만으로 영수증 자동 인식 및 데이터 추출',
            status: 'live',
            category: 'core',
            quarter: 'Q4 2024',
            votes: 0,
        },
        {
            id: 2,
            name: 'AI 자동 분류',
            description: '98% 정확도로 거래 내역 자동 카테고리 분류',
            status: 'live',
            category: 'ai',
            quarter: 'Q4 2024',
            votes: 0,
        },
        {
            id: 3,
            name: '실시간 세금 예측',
            description: '현재 지출 패턴 기반 연말 예상 세금 계산',
            status: 'live',
            category: 'core',
            quarter: 'Q4 2024',
            votes: 0,
        },
        {
            id: 4,
            name: '세무사급 AI 인사이트',
            description: '놓치기 쉬운 공제 항목 실시간 알림',
            status: 'beta',
            category: 'ai',
            quarter: 'Q4 2024',
            votes: 0,
        },
        {
            id: 5,
            name: '대출 추천 서비스',
            description: '사용자 재무 상태 기반 최적 대출 상품 추천',
            status: 'beta',
            category: 'ai',
            quarter: 'Q4 2024',
            votes: 0,
        },
        {
            id: 6,
            name: '카드/계좌 자동 연동',
            description: '50개 이상 금융기관 실시간 거래 내역 동기화',
            status: 'live',
            category: 'integration',
            quarter: 'Q4 2024',
            votes: 0,
        },
        {
            id: 7,
            name: '커뮤니티 Q&A',
            description: '세금 관련 질문과 답변 공유 플랫폼',
            status: 'live',
            category: 'community',
            quarter: 'Q4 2024',
            votes: 0,
        },
        {
            id: 8,
            name: '음성 영수증 입력',
            description: '"스타벅스 만오천원" 음성으로 영수증 등록',
            status: 'coming',
            category: 'ai',
            quarter: 'Q1 2026',
            votes: 234,
        },
        {
            id: 9,
            name: '세무사 실시간 채팅',
            description: '앱 내에서 전문 세무사와 1:1 상담',
            status: 'coming',
            category: 'core',
            quarter: 'Q1 2026',
            votes: 189,
        },
        {
            id: 10,
            name: '가족 계정 공유',
            description: '가족 구성원과 예산 및 영수증 공유',
            status: 'coming',
            category: 'core',
            quarter: 'Q2 2026',
            votes: 156,
        },
        {
            id: 11,
            name: '스마트스토어 연동',
            description: '네이버 스마트스토어 매출/비용 자동 동기화',
            status: 'coming',
            category: 'integration',
            quarter: 'Q1 2026',
            votes: 298,
        },
        {
            id: 12,
            name: '쿠팡/11번가 연동',
            description: '이커머스 플랫폼 판매 데이터 자동 수집',
            status: 'coming',
            category: 'integration',
            quarter: 'Q2 2026',
            votes: 203,
        },
        {
            id: 13,
            name: 'AI 절세 시뮬레이터',
            description: '다양한 시나리오별 절세 효과 시뮬레이션',
            status: 'coming',
            category: 'ai',
            quarter: 'Q2 2026',
            votes: 267,
        },
        {
            id: 14,
            name: '커뮤니티 챌린지',
            description: '사용자 간 절약 챌린지 및 리더보드',
            status: 'coming',
            category: 'community',
            quarter: 'Q1 2026',
            votes: 145,
        },
    ];

    const [featureVotes, setFeatureVotes] = useState(features);

    const handleVote = (featureId) => {
        setFeatureVotes(prev =>
            prev.map(f =>
                f.id === featureId ? { ...f, votes: f.votes + 1 } : f
            )
        );
    };

    const getStatusBadge = (status) => {
        const badges = {
            live: { text: 'Live', color: 'bg-green-100 text-green-700 border-green-200', icon: CheckCircle },
            beta: { text: 'Beta', color: 'bg-yellow-100 text-yellow-700 border-yellow-200', icon: Clock },
            coming: { text: 'Coming Soon', color: 'bg-blue-100 text-blue-700 border-blue-200', icon: Sparkles },
        };
        return badges[status];
    };

    const filteredFeatures = selectedCategory === 'all'
        ? featureVotes
        : featureVotes.filter(f => f.category === selectedCategory);

    const groupedFeatures = {
        live: filteredFeatures.filter(f => f.status === 'live'),
        beta: filteredFeatures.filter(f => f.status === 'beta'),
        coming: filteredFeatures.filter(f => f.status === 'coming').sort((a, b) => b.votes - a.votes),
    };

    return (
        <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            기능 로드맵
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        현재 제공 중인 기능과 곧 출시될 기능을 확인하세요
                    </p>
                </motion.div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <motion.button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${selectedCategory === category.id
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                    : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <category.icon className="w-5 h-5" />
                            {category.name}
                        </motion.button>
                    ))}
                </div>

                {/* Live Features */}
                {groupedFeatures.live.length > 0 && (
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <CheckCircle className="w-6 h-6 text-green-600" />
                            현재 이용 가능
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {groupedFeatures.live.map((feature, index) => (
                                <FeatureCard
                                    key={feature.id}
                                    feature={feature}
                                    index={index}
                                    onVote={handleVote}
                                    getStatusBadge={getStatusBadge}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Beta Features */}
                {groupedFeatures.beta.length > 0 && (
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <Clock className="w-6 h-6 text-yellow-600" />
                            베타 테스트 중
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {groupedFeatures.beta.map((feature, index) => (
                                <FeatureCard
                                    key={feature.id}
                                    feature={feature}
                                    index={index}
                                    onVote={handleVote}
                                    getStatusBadge={getStatusBadge}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Coming Soon Features */}
                {groupedFeatures.coming.length > 0 && (
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <Sparkles className="w-6 h-6 text-blue-600" />
                            곧 출시 예정
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {groupedFeatures.coming.map((feature, index) => (
                                <FeatureCard
                                    key={feature.id}
                                    feature={feature}
                                    index={index}
                                    onVote={handleVote}
                                    getStatusBadge={getStatusBadge}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* CTA */}
                <motion.div
                    className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        원하는 기능이 있으신가요?
                    </h3>
                    <p className="text-gray-600 mb-6">
                        여러분의 의견이 TaxAdvisor를 더 좋게 만듭니다
                    </p>
                    <motion.button
                        className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        기능 제안하기
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

const FeatureCard = ({ feature, index, onVote, getStatusBadge }) => {
    const badge = getStatusBadge(feature.status);

    return (
        <motion.div
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ y: -5 }}
        >
            <div className="flex items-start justify-between mb-4">
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full border ${badge.color}`}>
                    <badge.icon className="w-4 h-4" />
                    <span className="text-sm font-semibold">{badge.text}</span>
                </div>
                {feature.quarter && (
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        {feature.quarter}
                    </div>
                )}
            </div>

            <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.name}</h4>
            <p className="text-gray-600 text-sm mb-4">{feature.description}</p>

            {feature.status === 'coming' && (
                <motion.button
                    onClick={() => onVote(feature.id)}
                    className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <ThumbsUp className="w-4 h-4" />
                    <span>이 기능 원해요 ({feature.votes})</span>
                </motion.button>
            )}
        </motion.div>
    );
};

export default FeatureRoadmap;
