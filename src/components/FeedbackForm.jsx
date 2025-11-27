import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Star, Upload, CheckCircle, AlertCircle, MessageCircle, Bug, Lightbulb, Heart } from 'lucide-react';

const FeedbackForm = ({ onClose }) => {
    const [feedbackType, setFeedbackType] = useState('general');
    const [rating, setRating] = useState(0);
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [subscribe, setSubscribe] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [attachments, setAttachments] = useState([]);

    const feedbackTypes = [
        { id: 'bug', name: '버그 리포트', icon: Bug, color: 'text-red-600' },
        { id: 'feature', name: '기능 제안', icon: Lightbulb, color: 'text-yellow-600' },
        { id: 'general', name: '일반 피드백', icon: MessageCircle, color: 'text-blue-600' },
        { id: 'praise', name: '칭찬하기', icon: Heart, color: 'text-pink-600' },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would send the feedback to your backend
        setSubmitted(true);
        setTimeout(() => {
            if (onClose) onClose();
        }, 2000);
    };

    const handleFileUpload = (e) => {
        const files = Array.from(e.target.files);
        setAttachments(prev => [...prev, ...files]);
    };

    if (submitted) {
        return (
            <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">피드백 감사합니다!</h3>
                <p className="text-gray-600 mb-4">
                    소중한 의견 잘 받았습니다. 더 나은 서비스로 보답하겠습니다.
                </p>
                <p className="text-sm text-gray-500">
                    추적 번호: <span className="font-mono font-semibold">FB-{Date.now().toString().slice(-6)}</span>
                </p>
            </motion.div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">피드백 보내기</h2>
                <p className="text-gray-600">
                    여러분의 의견이 TaxAdvisor를 더 좋게 만듭니다
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Feedback Type */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                        피드백 유형
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {feedbackTypes.map((type) => (
                            <motion.button
                                key={type.id}
                                type="button"
                                onClick={() => setFeedbackType(type.id)}
                                className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${feedbackType === type.id
                                        ? 'border-blue-500 bg-blue-50'
                                        : 'border-gray-200 hover:border-gray-300'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <type.icon className={`w-6 h-6 ${type.color}`} />
                                <span className="text-sm font-medium text-gray-700">{type.name}</span>
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Rating */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                        전반적인 만족도
                    </label>
                    <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <motion.button
                                key={star}
                                type="button"
                                onClick={() => setRating(star)}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Star
                                    className={`w-10 h-10 ${star <= rating
                                            ? 'text-yellow-400 fill-yellow-400'
                                            : 'text-gray-300'
                                        }`}
                                />
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Message */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        상세 내용 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={6}
                        maxLength={1000}
                        placeholder="의견을 자세히 작성해주세요..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                    <div className="text-right text-sm text-gray-500 mt-1">
                        {message.length}/1000
                    </div>
                </div>

                {/* File Upload */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        스크린샷 첨부 (선택)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-500 transition-colors">
                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleFileUpload}
                            className="hidden"
                            id="file-upload"
                        />
                        <label htmlFor="file-upload" className="cursor-pointer">
                            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-600">
                                클릭하여 파일 선택 또는 드래그 앤 드롭
                            </p>
                        </label>
                    </div>
                    {attachments.length > 0 && (
                        <div className="mt-2 space-y-1">
                            {attachments.map((file, index) => (
                                <div key={index} className="text-sm text-gray-600 flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    {file.name}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        이메일 (선택)
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="답변 받으실 이메일 주소"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                {/* Subscribe */}
                <div className="flex items-start gap-3">
                    <input
                        type="checkbox"
                        id="subscribe"
                        checked={subscribe}
                        onChange={(e) => setSubscribe(e.target.checked)}
                        className="mt-1 w-4 h-4 text-blue-600 rounded"
                    />
                    <label htmlFor="subscribe" className="text-sm text-gray-600">
                        새로운 기능 및 업데이트 소식을 이메일로 받고 싶습니다
                    </label>
                </div>

                {/* Submit Button */}
                <motion.button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={!message}
                >
                    <Send className="w-5 h-5" />
                    피드백 제출하기
                </motion.button>
            </form>
        </div>
    );
};

export default FeedbackForm;
