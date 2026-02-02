'use client';

import { motion } from 'framer-motion';
import MemoryGallery from '../MemoryGallery';

export default function Episode4TeddyDay() {
    // TODO: PERSONALIZE - Add your cozy memories
    const comfortMessage = `
    In your arms, I found my safe haven.
    Like a warm teddy bear on a cold night,
    you're my comfort, my warmth, my home.
  `;

    const images = [
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.15 (9).jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.16.jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.16 (1).jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.16 (2).jpeg',
    ];

    return (
        <div className="space-y-12">
            {/* Teddy Theme Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
            >
                <div className="text-6xl mb-6">🧸</div>
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#D4A574' }}>
                    My Comfort Zone
                </h3>
                <p className="text-lg text-netflix-lightGray max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
                    {comfortMessage}
                </p>
            </motion.div>

            {/* Floating Teddy Bears */}
            <div className="relative h-40 overflow-hidden rounded-lg bg-gradient-to-r from-amber-900/20 to-orange-900/20">
                <div className="absolute inset-0 flex items-center justify-center gap-8">
                    {['🧸', '💝', '🧸', '💝', '🧸'].map((emoji, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                y: [0, -15, 0],
                                rotate: [0, 5, -5, 0],
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                delay: i * 0.3,
                            }}
                            className="text-5xl"
                        >
                            {emoji}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Cute & Funny Memories */}
            <MemoryGallery images={images} title="Our Cozy Moments" />

            {/* Wholesome Quote */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-br from-orange-900/20 to-amber-900/20 rounded-lg p-8 text-center"
            >
                <p className="text-2xl font-semibold mb-2">You're my favorite cuddle buddy 🧸</p>
                <p className="text-lg text-netflix-lightGray">
                    Forever and always, my comfort and joy
                </p>
            </motion.div>
        </div>
    );
}
