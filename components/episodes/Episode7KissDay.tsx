'use client';

import { motion } from 'framer-motion';
import MemoryGallery from '../MemoryGallery';
import SoundBox from '../SoundBox';

export default function Episode7KissDay() {
    const kissMessage = `
    Watching you smile is my favorite thing…
    Being the reason for that smile is even better.
    But today? I think I deserve interest on all the love I've invested 😏❤️
  `;

    const images = [
        '/assets/images/53db05de-389b-43c2-80fd-fc4151f865e8 2.JPG',
        '/assets/images/da940164-341c-4697-8648-0bb96008ae6c 2.JPG',
        '/assets/images/b1e82688-cbc3-43f6-8c3c-7639a6078033 2.JPG',
        '/assets/images/4b803035-a8f3-48d7-9d72-6bc1e77b13d8 2.JPG',
        '/assets/images/78a302c8-5fb2-4128-b7d6-219391aa588d 2.JPG',
        '/assets/Videos/Bowling/3eb12ea3-9794-4315-82dd-e90dc4a8bb12 2.MP4',
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

            {/* Sound Box */}
            <div className="max-w-2xl mx-auto">
                <SoundBox
                    audioSrc="/assets/audio/Tum Ho Toh-(Mr-Jat.in).mp3"
                    title="Our Song - Tum Ho Toh"
                    color="#DC143C"
                />
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
