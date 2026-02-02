'use client';

import { motion } from 'framer-motion';
import MemoryGallery from '../MemoryGallery';

export default function Episode7KissDay() {
    // TODO: PERSONALIZE - Add your romantic message
    const kissMessage = `
    Every kiss tells a story words cannot express.
    In that moment, time stands still and the world disappears.
    Your lips on mine—my favorite place to be.
  `;

    const images = [
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.18 (3).jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.18 (4).jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.18 (5).jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.18 (6).jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.18 (7).jpeg',
    ];

    return (
        <div className="space-y-12">
            {/* Kiss Theme Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
            >
                <div className="text-6xl mb-6">💋</div>
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#DC143C' }}>
                    The Moment
                </h3>
                <p className="text-lg text-netflix-lightGray max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
                    {kissMessage}
                </p>
            </motion.div>

            {/* Floating Hearts */}
            <div className="relative h-56 overflow-hidden rounded-lg bg-gradient-to-r from-red-900/30 to-pink-900/30">
                <div className="absolute inset-0">
                    {[...Array(10)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-4xl"
                            initial={{
                                x: Math.random() * 100 + '%',
                                y: '100%',
                                opacity: 0,
                            }}
                            animate={{
                                y: '-100%',
                                opacity: [0, 1, 1, 0],
                            }}
                            transition={{
                                duration: 4 + Math.random() * 2,
                                repeat: Infinity,
                                delay: i * 0.5,
                                ease: 'linear',
                            }}
                        >
                            {i % 2 === 0 ? '💋' : '❤️'}
                        </motion.div>
                    ))}
                </div>
                <div className="relative z-10 flex items-center justify-center h-full">
                    <p className="text-2xl font-semibold text-center">
                        Sealed with a Kiss 💋
                    </p>
                </div>
            </div>

            {/* Love Timeline */}
            <div className="space-y-6">
                <h3 className="text-2xl font-bold text-center">Our Love Timeline</h3>
                <div className="relative max-w-3xl mx-auto">
                    {[
                        { milestone: 'First Glance', emoji: '👀' },
                        { milestone: 'First Conversation', emoji: '💬' },
                        { milestone: 'First Date', emoji: '🌹' },
                        { milestone: 'First Kiss', emoji: '💋' },
                        { milestone: 'Forever Together', emoji: '💍' },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className={`flex items-center gap-4 mb-6 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                        >
                            <div className="flex-1 bg-gradient-to-r from-red-900/20 to-pink-900/20 rounded-lg p-4 text-center">
                                <p className="font-semibold">{item.milestone}</p>
                            </div>
                            <div className="text-4xl">{item.emoji}</div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Polaroid Memories */}
            <MemoryGallery images={images} title="Captured Moments" />

            {/* Romantic Closing */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-center bg-gradient-to-br from-red-900/30 to-pink-900/30 rounded-lg p-8"
            >
                <p className="text-3xl font-bold mb-3">💋</p>
                <p className="text-2xl font-semibold mb-2">Every Kiss, A Promise</p>
                <p className="text-lg text-netflix-lightGray italic">
                    "Your kiss is the poetry my soul has been writing all along."
                </p>
            </motion.div>
        </div>
    );
}
