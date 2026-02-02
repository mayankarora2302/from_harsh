'use client';

import { motion } from 'framer-motion';
import MemoryGallery from '../MemoryGallery';

export default function Episode6HugDay() {
    // TODO: PERSONALIZE - Add your comfort message
    const hugMessage = `
    Your embrace is my sanctuary.
    In your arms, the world fades away and only we remain.
    Every hug is a reminder that I'm exactly where I belong.
  `;

    const images = [
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.17 (1).jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.18.jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.18 (1).jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.18 (2).jpeg',
    ];

    return (
        <div className="space-y-12">
            {/* Hug Theme Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
            >
                <div className="text-6xl mb-6">🤗</div>
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#F4A460' }}>
                    My Safe Place
                </h3>
                <p className="text-lg text-netflix-lightGray max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
                    {hugMessage}
                </p>
            </motion.div>

            {/* Heartbeat Animation */}
            <div className="relative h-48 overflow-hidden rounded-lg bg-gradient-to-r from-orange-900/20 to-red-900/20 flex items-center justify-center">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="text-8xl"
                >
                    ❤️
                </motion.div>

                <div className="absolute bottom-4 text-center w-full">
                    <p className="text-sm text-netflix-lightGray">
                        Your heartbeat is my favorite lullaby
                    </p>
                </div>
            </div>

            {/* Embrace Gallery */}
            <MemoryGallery images={images} title="Moments in Your Arms" />

            {/* Comfort Monologue */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 rounded-lg p-8 md:p-12 text-center"
            >
                <p className="text-2xl font-semibold mb-4">In Your Embrace</p>
                <p className="text-lg text-netflix-lightGray leading-relaxed max-w-2xl mx-auto">
                    Every hug from you feels like coming home. In your arms, I find peace, warmth, and unconditional love.
                    You hold me not just with your arms, but with your heart, and that's where I want to stay forever.
                </p>
            </motion.div>

            {/* Closing */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-center text-xl italic text-orange-200"
            >
                "Home isn't a place, it's your embrace." 🏠💛
            </motion.div>
        </div>
    );
}
