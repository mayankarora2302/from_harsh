'use client';

import { motion } from 'framer-motion';
import MemoryGallery from '../MemoryGallery';

export default function Episode3ChocolateDay() {
    // TODO: PERSONALIZE - Add your sweet memories
    const sweetMessage = `
    Life with you is sweeter than the finest chocolate.
    Every moment melts in my heart like a perfect truffle.
    You're the sweetness that makes every day worth savoring.
  `;

    const images = [
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.15 (5).jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.15 (6).jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.15 (7).jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.15 (8).jpeg',
    ];

    return (
        <div className="space-y-12">
            {/* Chocolate Theme Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
            >
                <div className="text-6xl mb-6">🍫</div>
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#7B3F00' }}>
                    Sweet Like Us
                </h3>
                <p className="text-lg text-netflix-lightGray max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
                    {sweetMessage}
                </p>
            </motion.div>

            {/* Chocolate Box Animation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                {['🍫', '🍬', '🍭', '🍰'].map((candy, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.2 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="bg-gradient-to-br from-amber-900/30 to-yellow-900/30 rounded-lg p-8 text-center text-5xl cursor-pointer"
                    >
                        {candy}
                    </motion.div>
                ))}
            </div>

            {/* Sweet Memories Carousel */}
            <MemoryGallery images={images} title="Our Sweetest Moments" />

            {/* Closing */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-center text-xl italic text-amber-200"
            >
                "You're sweeter than chocolate, warmer than cocoa, and more precious than gold." ✨
            </motion.div>
        </div>
    );
}
