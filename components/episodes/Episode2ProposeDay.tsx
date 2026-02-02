'use client';

import { motion } from 'framer-motion';
import MemoryGallery from '../MemoryGallery';

export default function Episode2ProposeDay() {
    // TODO: PERSONALIZE - Add your own proposal message/monologue
    const proposalMonologue = `
    From the moment I met you, I knew my life would never be the same.
    You are my sunrise, my sunset, and every beautiful moment in between.
    With you, I've found my home, my peace, my forever.
    Will you continue this journey with me, hand in hand, heart to heart?
  `;

    const images = [
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.15 (1).jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.15 (2).jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.15 (3).jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.15 (4).jpeg',
    ];

    return (
        <div className="space-y-12">
            {/* Cinematic Letter */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-br from-red-900/30 to-pink-900/30 rounded-lg p-8 md:p-12 netflix-shadow"
            >
                <div className="text-center mb-6">
                    <div className="text-6xl mb-4">💍</div>
                    <h3 className="text-3xl font-bold" style={{ color: '#C41E3A' }}>
                        A Promise of Forever
                    </h3>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-lg md:text-xl leading-relaxed text-center max-w-2xl mx-auto font-light whitespace-pre-line"
                >
                    {proposalMonologue}
                </motion.div>
            </motion.div>

            {/* Flashback Memory Reel */}
            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-center">Flashback: Our Journey</h3>
                <MemoryGallery images={images} title="Moments Leading to Forever" />
            </div>

            {/* Dramatic Quote */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="text-center"
            >
                <div className="text-5xl mb-4">❤️</div>
                <p className="text-2xl font-bold text-netflix-red">
                    You said YES to forever
                </p>
                <p className="text-lg text-netflix-lightGray mt-2">
                    And my heart has been full ever since
                </p>
            </motion.div>
        </div>
    );
}
