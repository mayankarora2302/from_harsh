'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SoundBoxProps {
    audioSrc: string;
    title?: string;
    color?: string;
}

export default function SoundBox({ audioSrc, title = 'Play Audio', color = '#E50914' }: SoundBoxProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleEnded = () => setIsPlaying(false);
        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('ended', handleEnded);
            audio.pause();
        };
    }, []);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="relative"
        >
            <button
                onClick={togglePlay}
                className="w-full bg-gradient-to-br from-netflix-darkGray to-black rounded-lg p-6 netflix-shadow hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-netflix-red"
                style={{
                    borderColor: isPlaying ? color : 'transparent',
                }}
            >
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <motion.div
                            animate={{
                                scale: isPlaying ? [1, 1.2, 1] : 1,
                            }}
                            transition={{
                                duration: 0.8,
                                repeat: isPlaying ? Infinity : 0,
                            }}
                            className="text-4xl"
                        >
                            {isPlaying ? '🔊' : '🎵'}
                        </motion.div>
                        <div className="text-left">
                            <p className="font-semibold text-lg">{title}</p>
                            <p className="text-sm text-netflix-lightGray">
                                {isPlaying ? 'Now Playing...' : 'Click to play'}
                            </p>
                        </div>
                    </div>
                    <motion.div
                        animate={{
                            rotate: isPlaying ? 360 : 0,
                        }}
                        transition={{
                            duration: 2,
                            repeat: isPlaying ? Infinity : 0,
                            ease: 'linear',
                        }}
                        className="text-3xl"
                        style={{ color }}
                    >
                        {isPlaying ? '⏸️' : '▶️'}
                    </motion.div>
                </div>

                {isPlaying && (
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        className="mt-4 h-1 rounded-full"
                        style={{ backgroundColor: color }}
                    />
                )}
            </button>

            <audio ref={audioRef} src={audioSrc} preload="metadata" />
        </motion.div>
    );
}
