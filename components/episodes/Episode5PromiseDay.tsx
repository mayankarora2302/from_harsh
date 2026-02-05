'use client';

import { motion } from 'framer-motion';
import MemoryGallery from '../MemoryGallery';
import SoundBox from '../SoundBox';

export default function Episode5PromiseDay() {
    const promises = [
        'I promise - no matter how hard days get, no matter the mood or stress,',
        'I will always stay by your side.',
        'Your smile is my responsibility.',
        'And your right over me? Lifetime access granted.',
    ];

    const images = [
        '/assets/images/4b803035-a8f3-48d7-9d72-6bc1e77b13d8 2.JPG',
        '/assets/images/583da941-6883-4734-a036-022859f6e11a 2.JPG',
        '/assets/images/88f29ba4-8039-464e-82c5-1790a038c8ff 2.JPG',
        '/assets/images/487a82e6-9db9-4a90-9acb-ddd9afdccf71 2.JPG',
        '/assets/Videos/Table Football/0e2ccd24-6c7b-4542-8e72-7e40188a950b 2.MP4',
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

            {/* Sound Box */}
            <div className="max-w-2xl mx-auto">
                <SoundBox
                    audioSrc="/assets/audio/WhatsApp Audio 2026-02-05 at 14.37.23.opus"
                    title="Promise Message"
                    color="#4A5568"
                />
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
