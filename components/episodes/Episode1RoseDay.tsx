'use client';

import { motion } from 'framer-motion';
import MemoryGallery from '../MemoryGallery';

export default function Episode1RoseDay() {
    // TODO: PERSONALIZE - Add your own love message
    const loveMessage = `
    Like the first rose of spring, our love bloomed with gentle beauty.
    Every petal tells a story, every thorn a lesson learned together.
    You are my first bloom, my eternal spring.
  `;

    const images = [
        '/assets/images/WhatsApp Image 2026-02-01 at 20.46.16.jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.46.16 (1).jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.46.16 (2).jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.15.jpeg',
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
