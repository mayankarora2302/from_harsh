'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import MemoryGallery from '../MemoryGallery';
import TogetherSinceCounter from '../TogetherSinceCounter';
import SoundBox from '../SoundBox';

export default function Episode8Valentine() {
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        setShowConfetti(true);
    }, []);

    // All remaining images for the grand finale
    const allImages = [
        '/assets/images/c511944b-258a-4d2b-8784-8c138effa8c9 2.JPG',
        '/assets/images/80f3fe44-929a-4768-8925-8703ca0c006c 2.JPG',
        '/assets/images/cd9e5569-2afc-445a-a469-5c9a38a1e7ad 2.JPG',
        '/assets/images/583da941-6883-4734-a036-022859f6e11a 2.JPG',
        '/assets/images/db6638af-9ca3-42cd-a919-30bca85ee1b4 2.JPG',
        '/assets/images/88f29ba4-8039-464e-82c5-1790a038c8ff 2.JPG',
        '/assets/Videos/Badminton/5dc61821-89fd-4f2e-9357-a9e2eb720853 2.MP4',
    ];

    return (
        <div className="space-y-16">
            {/* Confetti Effect */}
            {showConfetti && (
                <div className="fixed inset-0 pointer-events-none z-50">
                    {[...Array(50)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-2xl"
                            initial={{
                                x: Math.random() * window.innerWidth,
                                y: -50,
                                rotate: 0,
                            }}
                            animate={{
                                y: window.innerHeight + 50,
                                rotate: 360,
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                                ease: 'linear',
                            }}
                        >
                            {['❤️', '💕', '💖', '💗', '💝'][Math.floor(Math.random() * 5)]}
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Grand Opening */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="text-center"
            >
                <div className="text-8xl mb-6">💝</div>
                <h2 className="text-4xl md:text-6xl font-bold mb-4 text-glow">
                    Season Finale
                </h2>
                <h3 className="text-2xl md:text-4xl text-netflix-red mb-6">
                    Valentine's Day Special
                </h3>
                <p className="text-xl text-netflix-lightGray max-w-3xl mx-auto leading-relaxed">
                    Today we celebrate the love that has grown through every season, every episode, every moment.
                    This is our story—cinematic, emotional, and unforgettable.
                </p>
            </motion.div>

            {/* Together Since Counter */}
            <TogetherSinceCounter />

            {/* Love Declaration */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-red-900/40 to-pink-900/40 rounded-lg p-8 md:p-12 netflix-shadow text-center"
            >
                <h3 className="text-3xl font-bold mb-6">To My Valentine</h3>
                <div className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto space-y-4">
                    <p>
                        You are not just my girlfriend.
                        You are my habit, my comfort, my peace, my happiness in human form.
                        When you're not around, I feel the absence. When you are, everything feels right.
                    </p>
                    <p>
                        Thank you for caring for me, for changing for me, for loving me the way you do.
                        I don't just love you… I feel safe with you. And that means everything to me.
                    </p>
                    <p className="text-2xl font-bold text-netflix-red mt-6">
                        Happy Valentine's Day, My Love! 💖
                    </p>
                </div>
            </motion.div>

            {/* Additional Love Message */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-gradient-to-br from-pink-900/40 to-red-900/40 rounded-lg p-8 md:p-12 netflix-shadow"
            >
                <h3 className="text-3xl font-bold mb-6 text-center">All The Little Things I Love About You</h3>
                <div className="text-base md:text-lg leading-relaxed max-w-4xl mx-auto space-y-4">
                    <p>
                        Hey… I was thinking about you and realized how many little things I love about you.
                    </p>
                    <p>
                        I love your eyes — the way they look at me, sometimes soft, sometimes full of mischief. Your smile is literally my mood changer… no matter how bad my day is, you fix it without even trying.
                    </p>
                    <p>
                        I love how much you care about me. The way you order things for me, check on me, do small stuff that actually means a lot — you don't just say you care, you show it. And your efforts… you really try for me, and I notice that more than you think.
                    </p>
                    <p>
                        I love your teasing side, the way you irritate me just to see my reaction 😒❤️ but honestly, I wouldn't want it any other way. And the way you show your right over me… that little possessiveness? I secretly love it.
                    </p>
                    <p>
                        I love that you always give me updates — where you are, what you're doing. It might seem small, but to me it means so much. It makes me feel included in your life, close to you even when we're not together.
                    </p>
                    <p>
                        I love that you listen to me, understand me, and sometimes even adjust for me. That means everything. And your cute physical affection — the biting, the nudging, the random pressing — that's so you, and I adore it.
                    </p>
                    <p>
                        Most of all, I love the comfort I feel with you. With you, I don't have to pretend. I feel safe, calm, and happy. You're not just someone I love… you've become a part of my everyday happiness. When you're not around, I feel the difference.
                    </p>
                    <p className="text-netflix-red font-semibold">
                        I just wanted you to know… I see you, I appreciate you, and I love you for all these little things that make you you ❤️
                    </p>
                </div>
            </motion.div>

            {/* Sound Box */}
            <div className="max-w-2xl mx-auto">
                <SoundBox
                    audioSrc="/assets/audio/WhatsApp Audio 2026-02-05 at 14.36.58.opus"
                    title="Valentine's Message"
                    color="#E50914"
                />
            </div>

            {/* Full Memory Gallery */}
            <MemoryGallery images={allImages} title="Our Complete Love Story" />

            {/* Heart Rain Effect */}
            <div className="relative h-64 overflow-hidden rounded-lg bg-gradient-to-b from-transparent via-red-900/20 to-pink-900/30">
                <div className="absolute inset-0">
                    {[...Array(30)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-3xl"
                            initial={{
                                x: Math.random() * 100 + '%',
                                y: '-10%',
                                opacity: 0.8,
                            }}
                            animate={{
                                y: '110%',
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: i * 0.1,
                                ease: 'linear',
                            }}
                        >
                            ❤️
                        </motion.div>
                    ))}
                </div>
                <div className="relative z-10 flex items-center justify-center h-full">
                    <p className="text-3xl font-bold text-center">
                        Raining Love ❤️
                    </p>
                </div>
            </div>

            {/* Season Outro */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-center space-y-6"
            >
                <p className="text-2xl font-semibold">
                    This season may be ending, but our story continues...
                </p>
                <p className="text-lg text-netflix-lightGray">
                    Tune in tomorrow for the Anniversary Special 💍
                </p>
            </motion.div>
        </div>
    );
}
