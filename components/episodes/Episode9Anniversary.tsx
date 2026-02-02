'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import MemoryGallery from '../MemoryGallery';
import TogetherSinceCounter from '../TogetherSinceCounter';
import LoveLetterReveal from '../LoveLetterReveal';

export default function Episode9Anniversary() {
    const [showLetter, setShowLetter] = useState(false);

    // TODO: PERSONALIZE - Add your final love letter
    const finalLoveLetter = `My Dearest Love,

As I write this on our anniversary, my heart overflows with gratitude for every moment we've shared. 

You are my sunrise and my sunset, my calm in the storm, and my adventure in the everyday. With you, I've discovered what it truly means to love and be loved unconditionally.

Every day with you is a gift I never take for granted. Every laugh we share, every dream we build, every challenge we overcome together—they all remind me that choosing you was the best decision I've ever made.

Here's to the episodes we've lived and the seasons yet to come. Here's to forever with you.

All my love, always and forever.`;

    // Remaining images
    const images = [
        '/assets/images/WhatsApp Image 2026-02-01 at 20.46.16.jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.46.16 (1).jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.46.16 (2).jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.15.jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.15 (1).jpeg',
    ];

    return (
        <div className="space-y-16">
            {/* Anniversary Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
            >
                <div className="text-8xl mb-6">💍</div>
                <h2 className="text-4xl md:text-6xl font-bold mb-4 text-glow">
                    Anniversary Special
                </h2>
                <h3 className="text-2xl md:text-4xl text-netflix-red mb-6">
                    Season Finale - Part 2
                </h3>
                <p className="text-xl text-netflix-lightGray max-w-3xl mx-auto leading-relaxed">
                    The day that changed everything. The day our forever began.
                </p>
            </motion.div>

            {/* Together Since Counter */}
            <TogetherSinceCounter />



            {/* Memory Gallery */}
            <MemoryGallery images={images} title="Anniversary Memories" />

            {/* Final Love Letter */}
            <div className="space-y-6">
                <h3 className="text-3xl font-bold text-center">A Letter to You</h3>
                {!showLetter ? (
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowLetter(true)}
                        className="mx-auto block bg-netflix-red hover:bg-red-700 px-8 py-4 rounded-lg font-bold text-lg netflix-glow transition-colors"
                    >
                        Open My Heart 💌
                    </motion.button>
                ) : (
                    <LoveLetterReveal letter={finalLoveLetter} signature="Forever Yours ❤️" />
                )}
            </div>

            {/* Renew Season 2 CTA */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="bg-gradient-to-br from-netflix-red/40 to-pink-900/40 rounded-lg p-12 text-center netflix-shadow"
            >
                <h3 className="text-4xl font-bold mb-6">The Story Continues...</h3>
                <p className="text-xl text-netflix-lightGray mb-8 max-w-2xl mx-auto">
                    This season may have ended, but our love story is just beginning.
                    Every day with you is a new episode, a new adventure, a new reason to fall in love all over again.
                </p>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-black px-12 py-4 rounded-lg font-bold text-xl hover:bg-netflix-lightGray transition-colors"
                >
                    Renew Season 2 of Our Love 💍
                </motion.button>
            </motion.div>

            {/* Credits Roll */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="text-center space-y-4 py-12"
            >
                <p className="text-sm text-netflix-lightGray uppercase tracking-widest">
                    A Netflix Original Series
                </p>
                <p className="text-2xl font-bold">Our Love on Netflix</p>
                <p className="text-lg text-netflix-lightGray">
                    Starring: Us ❤️
                </p>
                <p className="text-sm text-netflix-lightGray mt-8">
                    Created with love • Directed by destiny • Produced by fate
                </p>
                <p className="text-xs text-netflix-lightGray mt-4">
                    © {new Date().getFullYear()} Our Love Story. All rights reserved.
                </p>
            </motion.div>
        </div>
    );
}
