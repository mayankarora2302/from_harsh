'use client';

import { motion } from 'framer-motion';
import MemoryGallery from '../MemoryGallery';
import SoundBox from '../SoundBox';

export default function Episode6HugDay() {
    const hugMessage = `
    The safest place in the world?
    Right in your arms.
    That's where my overthinking stops and peace begins.
    I need one of those long hugs from you very soon ❤️
  `;

    const images = [
        '/assets/images/cb6c228d-ef41-4778-b8c0-4397a27255d8 2.JPG',
        '/assets/images/96ea5b69-22a2-4bb9-b424-60f1f866b3ef 2.JPG',
        '/assets/images/890d4fa1-167f-4ee3-aaad-fe2aab031773 2.JPG',
        '/assets/images/f4964387-12e4-4456-90a0-aa39ac96db52 2.JPG',
        '/assets/Videos/Balloon Chalange/2f6a7aef-ddae-4c60-91dc-5181db7f2b88 2.MP4',
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

            {/* Sound Box */}
            <div className="max-w-2xl mx-auto">
                <SoundBox
                    audioSrc="/assets/audio/Nadaaniyan Akshath 128 Kbps.mp3"
                    title="Our Song - Nadaaniyan"
                    color="#F4A460"
                />
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
