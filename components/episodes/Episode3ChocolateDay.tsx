'use client';

import { motion } from 'framer-motion';
import MemoryGallery from '../MemoryGallery';
import SoundBox from '../SoundBox';

export default function Episode3ChocolateDay() {
    const sweetMessage = `
    Chocolate is sweet…
    but nothing compares to the sweetness of you teasing me, caring for me, ordering things for me like I'm your baby 😭❤️
    You're my favorite addiction and I never want to quit.
  `;

    const images = [
        '/assets/images/96ea5b69-22a2-4bb9-b424-60f1f866b3ef 2.JPG',
        '/assets/images/da940164-341c-4697-8648-0bb96008ae6c 2.JPG',
        '/assets/images/80f3fe44-929a-4768-8925-8703ca0c006c 2.JPG',
        '/assets/images/3a8740f3-eb1f-48c5-b878-6678bbbc953e 2.JPG',
        '/assets/Videos/Sharing Coconut water with you in kerala/794bc051-b5ca-417e-b254-68b18f2499f4 2.MP4',
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

            {/* Sound Box */}
            <div className="max-w-2xl mx-auto">
                <SoundBox
                    audioSrc="/assets/audio/WhatsApp Audio 2026-02-05 at 14.36.58.opus"
                    title="Sweet Message"
                    color="#7B3F00"
                />
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
