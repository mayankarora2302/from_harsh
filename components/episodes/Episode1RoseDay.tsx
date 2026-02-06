'use client';

import { motion } from 'framer-motion';
import MemoryGallery from '../MemoryGallery';
import SoundBox from '../SoundBox';

export default function Episode1RoseDay() {
    const loveMessage = `
    Roses are beautiful… but they don't even come close to you.
    Your smile fixes my worst days, your presence feels like home.
    I don't need a bouquet… I just need you, always.
  `;

    const images = [
        '/assets/images/16102361-4fc8-4351-b5a8-f842e65eda30.JPG',
        '/assets/images/3b37cc17-107b-4529-b5e1-7d8541b7f787.JPG',
        '/assets/images/3e735fe3-5fb9-48ee-a426-e34eb193729f.JPG',
        '/assets/Videos/Bowling/3eb12ea3-9794-4315-82dd-e90dc4a8bb12 2.MP4',
    ];

    return (
        <div className="space-y-12">
            {/* Intro Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center max-w-3xl mx-auto"
            >
                <div className="text-6xl mb-6">🌹</div>
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#FF6B9D' }}>
                    The First Bloom
                </h3>
                <p className="text-lg text-netflix-lightGray leading-relaxed whitespace-pre-line">
                    {loveMessage}
                </p>
            </motion.div>

            {/* Animated Rose Petals Effect */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative h-32 overflow-hidden rounded-lg bg-gradient-to-r from-pink-900/20 to-red-900/20 flex items-center justify-center"
            >
                <div className="text-4xl space-x-4">
                    {['🌹', '🌹', '🌹', '🌹', '🌹'].map((rose, i) => (
                        <motion.span
                            key={i}
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 10, -10, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: i * 0.2,
                            }}
                            className="inline-block"
                        >
                            {rose}
                        </motion.span>
                    ))}
                </div>
            </motion.div>

            {/* Sound Box */}
            <div className="max-w-2xl mx-auto">
                <SoundBox
                    audioSrc="/assets/audio/Nadaaniyan Akshath 128 Kbps.mp3"
                    title="Our Song - Nadaaniyan"
                    color="#FF6B9D"
                />
            </div>

            {/* Memory Gallery */}
            <MemoryGallery images={images} title="Our Rose Garden of Memories" />

            {/* Closing Quote */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center italic text-xl text-netflix-lightGray"
            >
                "A rose by any other name would smell as sweet, but you are my only rose." 🌹
            </motion.div>
        </div>
    );
}
