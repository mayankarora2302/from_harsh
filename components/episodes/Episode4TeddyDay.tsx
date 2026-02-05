'use client';

import { motion } from 'framer-motion';
import MemoryGallery from '../MemoryGallery';
import SoundBox from '../SoundBox';

export default function Episode4TeddyDay() {
    const comfortMessage = `
    People hug teddy bears for comfort…
    but my real comfort is you.
    You're my teddy 🧸
    Just a little dangerous one… because sometimes you bite me too 😂❤️
  `;

    const images = [
        '/assets/images/f4964387-12e4-4456-90a0-aa39ac96db52 2.JPG',
        '/assets/images/b1e82688-cbc3-43f6-8c3c-7639a6078033 2.JPG',
        '/assets/images/cd9e5569-2afc-445a-a469-5c9a38a1e7ad 2.JPG',
        '/assets/images/0cc05291-f4e8-4581-a6b7-dfcbd3c1c30a 2.JPG',
        '/assets/Videos/Cozy Head massage from you /afe5211f-faed-4cd8-b672-43f7054f0560 2.MP4',
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

            {/* Sound Box */}
            <div className="max-w-2xl mx-auto">
                <SoundBox
                    audioSrc="/assets/audio/WhatsApp Audio 2026-02-05 at 14.36.59.opus"
                    title="Cozy Message"
                    color="#D4A574"
                />
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
