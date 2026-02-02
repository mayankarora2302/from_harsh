'use client';

import { motion } from 'framer-motion';
import MemoryGallery from '../MemoryGallery';

export default function Episode5PromiseDay() {
    // TODO: PERSONALIZE - Add your actual promises
    const promises = [
        "I promise to love you in your highs and hold you in your lows",
        "I promise to be your biggest cheerleader and your safest space",
        "I promise to choose you, every single day, for the rest of my life",
        "I promise to build a life with you that's filled with laughter and love",
        "I promise to never let a day go by without reminding you how special you are",
    ];

    const images = [
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.16 (3).jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.16 (4).jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.16 (5).jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.17.jpeg',
    ];

    return (
        <div className="space-y-12">
            {/* Promise Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
            >
                <div className="text-6xl mb-6">🤝</div>
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#4A5568' }}>
                    Sacred Vows
                </h3>
                <p className="text-lg text-netflix-lightGray max-w-2xl mx-auto">
                    These are the promises I make to you, written in the stars and sealed with my heart
                </p>
            </motion.div>

            {/* Promise Cards */}
            <div className="space-y-6 max-w-3xl mx-auto">
                {promises.map((promise, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                        whileHover={{ scale: 1.02 }}
                        className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-lg p-6 netflix-shadow cursor-pointer"
                    >
                        <div className="flex items-start gap-4">
                            <div className="text-3xl flex-shrink-0">💜</div>
                            <p className="text-lg leading-relaxed">{promise}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Memory Gallery */}
            <MemoryGallery images={images} title="Promises Kept in Pictures" />

            {/* Closing Vow */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-center bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-lg p-8"
            >
                <p className="text-2xl font-bold mb-3">My Forever Promise</p>
                <p className="text-xl text-netflix-lightGray italic">
                    "To love you is my greatest privilege, to be loved by you is my greatest blessing." 💍
                </p>
            </motion.div>
        </div>
    );
}
