'use client';

import { motion } from 'framer-motion';
import MemoryGallery from '../MemoryGallery';
import SoundBox from '../SoundBox';

export default function Episode2ProposeDay() {
    const proposalMonologue = `
    I want to propose to you again… not just today, but every day.
    I choose you in every mood, every version — cute, angry, teasing, all of you.
    Just promise me one thing… never log out of my life ❤️
  `;

    const images = [
        '/assets/images/53db05de-389b-43c2-80fd-fc4151f865e8 2.JPG',
        '/assets/images/c511944b-258a-4d2b-8784-8c138effa8c9 2.JPG',
        '/assets/images/db6638af-9ca3-42cd-a919-30bca85ee1b4 2.JPG',
        '/assets/images/5eed6d87-80bd-46e2-ac52-859086969df9 2.JPG',
        '/assets/Videos/Badminton/5dc61821-89fd-4f2e-9357-a9e2eb720853 2.MP4',
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

            {/* Sound Box */}
            <div className="max-w-2xl mx-auto">
                <SoundBox
                    audioSrc="/assets/audio/Tum Ho Toh-(Mr-Jat.in).mp3"
                    title="Our Song - Tum Ho Toh"
                    color="#C41E3A"
                />
            </div>

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
