import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ThumbsUp, MessageCircle, Award, TrendingUp, Clock, User, Send, ChevronDown, ChevronUp } from 'lucide-react';

const CommunityForum = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('recent');
    const [expandedPost, setExpandedPost] = useState(null);

    const categories = [
        { id: 'all', name: '전체', icon: '📋', count: 156 },
        { id: 'tax-tips', name: '세금 절약 팁', icon: '💰', count: 45 },
        { id: 'receipt', name: '영수증 관리', icon: '📝', count: 38 },
        { id: 'freelancer', name: '프리랜서', icon: '💼', count: 32 },
        { id: 'business', name: '소상공인', icon: '🏪', count: 28 },
        { id: 'qna', name: 'Q&A', icon: '❓', count: 13 },
    ];

    const posts = [
        {
            id: 1,
            category: 'tax-tips',
            author: '절약왕김씨',
            authorBadge: 'expert',
            title: '연말정산 의료비 공제 놓치지 않는 5가지 팁',
            excerpt: '매년 연말정산 때마다 의료비 공제를 놓치시는 분들이 많은데요, 제가 3년간 사용한 노하우를 공유합니다...',
            content: '1. 약국 영수증도 모두 챙기세요\n2. 안경, 렌즈 구매 영수증 보관\n3. 건강검진 비용도 공제 대상\n4. 가족 의료비도 합산 가능\n5. TaxAdvisor로 자동 추적하면 편해요!',
            likes: 234,
            comments: 45,
            views: 1203,
            timestamp: '2시간 전',
            tags: ['연말정산', '의료비', '공제'],
        },
        {
            id: 2,
            category: 'freelancer',
            author: '프리랜서박',
            authorBadge: 'verified',
            title: '프리랜서 종소세 신고 시 업무용 태블릿 구매 비용 공제 가능한가요?',
            excerpt: '디자인 작업용으로 아이패드를 구매했는데, 이것도 경비 처리가 가능한가요?',
            content: '네, 가능합니다! 업무용으로 사용하는 태블릿은 감가상각 자산으로 처리하거나 즉시 비용 처리할 수 있습니다. 다만 개인 용도와 업무 용도를 구분해야 하므로 사용 비율을 합리적으로 산정해야 합니다.',
            likes: 67,
            comments: 12,
            views: 456,
            timestamp: '5시간 전',
            tags: ['프리랜서', '종소세', '경비처리'],
            hasAnswer: true,
        },
        {
            id: 3,
            category: 'business',
            author: '쇼핑몰사장님',
            authorBadge: null,
            title: '스마트스토어 매출 자동 연동 기능 언제 나오나요?',
            excerpt: '매일 수동으로 입력하기 너무 힘든데, 자동 연동 기능이 있으면 좋겠어요!',
            content: '로드맵 보니까 Q1 2026에 나온다고 하던데, 정확한 날짜 아시는 분 계신가요?',
            likes: 89,
            comments: 23,
            views: 678,
            timestamp: '1일 전',
            tags: ['스마트스토어', '기능제안', '자동화'],
        },
        {
            id: 4,
            category: 'receipt',
            author: '영수증마스터',
            authorBadge: 'expert',
            title: 'OCR 인식률 높이는 영수증 촬영 꿀팁',
            excerpt: '영수증 촬영할 때 이렇게 하면 인식률이 99%까지 올라갑니다!',
            content: '1. 자연광 아래에서 촬영\n2. 영수증을 평평하게 펴기\n3. 그림자가 생기지 않게 주의\n4. 초점 맞추고 흔들리지 않게\n5. 영수증 전체가 프레임에 들어오도록',
            likes: 156,
            comments: 34,
            views: 892,
            timestamp: '2일 전',
            tags: ['OCR', '영수증', '팁'],
        },
    ];

    const filteredPosts = posts
        .filter(post => selectedCategory === 'all' || post.category === selectedCategory)
        .filter(post =>
            searchQuery === '' ||
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => {
            if (sortBy === 'popular') return b.likes - a.likes;
            if (sortBy === 'comments') return b.comments - a.comments;
            return 0; // recent (default order)
        });

    const getBadgeInfo = (badge) => {
        const badges = {
            expert: { text: '전문가', color: 'bg-purple-100 text-purple-700', icon: Award },
            verified: { text: '인증', color: 'bg-blue-100 text-blue-700', icon: Award },
        };
        return badges[badge];
    };

    return (
        <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            커뮤니티
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        세금 관리 노하우를 공유하고 궁금한 점을 물어보세요
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Sidebar - Categories */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 sticky top-4">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">카테고리</h3>
                            <div className="space-y-2">
                                {categories.map((category) => (
                                    <motion.button
                                        key={category.id}
                                        onClick={() => setSelectedCategory(category.id)}
                                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${selectedCategory === category.id
                                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                                                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                            }`}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <div className="flex items-center gap-2">
                                            <span className="text-xl">{category.icon}</span>
                                            <span className="font-medium text-sm">{category.name}</span>
                                        </div>
                                        <span className={`text-xs font-semibold ${selectedCategory === category.id ? 'text-white' : 'text-gray-500'
                                            }`}>
                                            {category.count}
                                        </span>
                                    </motion.button>
                                ))}
                            </div>

                            <motion.button
                                className="w-full mt-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                + 새 글 작성
                            </motion.button>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        {/* Search and Filter */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 mb-6">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1 relative">
                                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="검색어를 입력하세요..."
                                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    <option value="recent">최신순</option>
                                    <option value="popular">인기순</option>
                                    <option value="comments">댓글순</option>
                                </select>
                            </div>
                        </div>

                        {/* Posts */}
                        <div className="space-y-4">
                            {filteredPosts.map((post, index) => (
                                <motion.div
                                    key={post.id}
                                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                    {/* Post Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                                                {post.author[0]}
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <span className="font-semibold text-gray-900">{post.author}</span>
                                                    {post.authorBadge && (
                                                        <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${getBadgeInfo(post.authorBadge).color}`}>
                                                            {getBadgeInfo(post.authorBadge).text}
                                                        </span>
                                                    )}
                                                </div>
                                                <span className="text-sm text-gray-500">{post.timestamp}</span>
                                            </div>
                                        </div>
                                        {post.hasAnswer && (
                                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                                                답변완료
                                            </span>
                                        )}
                                    </div>

                                    {/* Post Content */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 cursor-pointer hover:text-blue-600"
                                        onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}>
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">{post.excerpt}</p>

                                    {/* Expanded Content */}
                                    {expandedPost === post.id && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="mb-4 p-4 bg-gray-50 rounded-xl"
                                        >
                                            <p className="text-gray-700 whitespace-pre-line">{post.content}</p>
                                        </motion.div>
                                    )}

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {post.tags.map((tag, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Post Stats */}
                                    <div className="flex items-center gap-6 text-sm text-gray-500">
                                        <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                                            <ThumbsUp className="w-4 h-4" />
                                            <span>{post.likes}</span>
                                        </button>
                                        <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                                            <MessageCircle className="w-4 h-4" />
                                            <span>{post.comments}</span>
                                        </button>
                                        <div className="flex items-center gap-2">
                                            <TrendingUp className="w-4 h-4" />
                                            <span>{post.views} 조회</span>
                                        </div>
                                        <button
                                            onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                                            className="ml-auto flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium"
                                        >
                                            {expandedPost === post.id ? (
                                                <>접기 <ChevronUp className="w-4 h-4" /></>
                                            ) : (
                                                <>더보기 <ChevronDown className="w-4 h-4" /></>
                                            )}
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommunityForum;
