export interface Episode {
    id: number;
    title: string;
    subtitle: string;
    theme: string;
    releaseDate: Date;
    coverImage: string;
    description: string;
    duration: string;
    color: string;
    soundtrack?: string;
}

export const RELATIONSHIP_START_DATE = new Date('2024-02-15'); // TODO: PERSONALIZE - Update with your actual relationship start date

export const episodes: Episode[] = [
    {
        id: 1,
        title: "Episode 1: Rose Day",
        subtitle: "The First Bloom",
        theme: "Soft, romantic, hopeful",
        releaseDate: new Date('2026-02-07'),
        coverImage: '/assets/images/episode1-cover.jpg',
        description: "Where it all began - the first petals of our love story unfold with tender moments and sweet beginnings.",
        duration: "12 min",
        color: "#FF6B9D",
        soundtrack: '/assets/audio/episode1.mp3',
    },
    {
        id: 2,
        title: "Episode 2: Propose Day",
        subtitle: "The Almost Proposal",
        theme: "Emotional, dramatic",
        releaseDate: new Date('2026-02-08'),
        coverImage: '/assets/images/episode2-cover.jpg',
        description: "A cinematic moment of vulnerability and courage - when words became promises and dreams took shape.",
        duration: "15 min",
        color: "#C41E3A",
        soundtrack: '/assets/audio/episode2.mp3',
    },
    {
        id: 3,
        title: "Episode 3: Chocolate Day",
        subtitle: "Sweet Like Us",
        theme: "Warm, cozy, indulgent",
        releaseDate: new Date('2026-02-09'),
        coverImage: '/assets/images/episode3-cover.jpg',
        description: "Indulge in the sweetness of our memories - every moment as delightful as the finest chocolate.",
        duration: "10 min",
        color: "#7B3F00",
        soundtrack: '/assets/audio/episode3.mp3',
    },
    {
        id: 4,
        title: "Episode 4: Teddy Day",
        subtitle: "Comfort Episode",
        theme: "Cute, comforting, wholesome",
        releaseDate: new Date('2026-02-10'),
        coverImage: '/assets/images/episode4-cover.jpg',
        description: "Wrapped in warmth and laughter - the cozy moments that make our love feel like home.",
        duration: "11 min",
        color: "#D4A574",
        soundtrack: '/assets/audio/episode4.mp3',
    },
    {
        id: 5,
        title: "Episode 5: Promise Day",
        subtitle: "The Vow Episode",
        theme: "Emotional, deep, sincere",
        releaseDate: new Date('2026-02-11'),
        coverImage: '/assets/images/episode5-cover.jpg',
        description: "Sacred vows written in the language of forever - promises that bind our hearts across time.",
        duration: "14 min",
        color: "#4A5568",
        soundtrack: '/assets/audio/episode5.mp3',
    },
    {
        id: 6,
        title: "Episode 6: Hug Day",
        subtitle: "Safe Place",
        theme: "Warm, healing, emotional",
        releaseDate: new Date('2026-02-12'),
        coverImage: '/assets/images/episode6-cover.jpg',
        description: "In your arms, I found my sanctuary - where every embrace tells a story of belonging.",
        duration: "13 min",
        color: "#F4A460",
        soundtrack: '/assets/audio/episode6.mp3',
    },
    {
        id: 7,
        title: "Episode 7: Kiss Day",
        subtitle: "The Moment",
        theme: "Passionate, romantic",
        releaseDate: new Date('2026-02-13'),
        coverImage: '/assets/images/episode7-cover.jpg',
        description: "Stolen moments and lingering touches - when time stands still and hearts speak without words.",
        duration: "12 min",
        color: "#DC143C",
        soundtrack: '/assets/audio/episode7.mp3',
    },
    {
        id: 8,
        title: "Episode 8: Valentine's Day",
        subtitle: "Season Finale - Part 1",
        theme: "Grand, emotional, unforgettable",
        releaseDate: new Date('2026-02-14'),
        coverImage: '/assets/images/episode8-cover.jpg',
        description: "The grand celebration of our love - a cinematic finale that honors every moment we've shared.",
        duration: "20 min",
        color: "#E50914",
        soundtrack: '/assets/audio/episode8.mp3',
    },
    {
        id: 9,
        title: "Episode 9: Anniversary",
        subtitle: "Season Finale - Part 2",
        theme: "Grand, emotional, unforgettable",
        releaseDate: new Date('2026-02-15'),
        coverImage: '/assets/images/episode9-cover.jpg',
        description: "Our love story continues - celebrating the day that changed everything and looking forward to forever.",
        duration: "25 min",
        color: "#FF1744",
        soundtrack: '/assets/audio/episode9.mp3',
    },
];

export function isEpisodeUnlocked(episode: Episode): boolean {
    // Temporarily unlocked - all episodes are accessible
    return true;
    // const now = new Date();
    // return now >= episode.releaseDate;
}

export function getNextEpisode(currentId: number): Episode | null {
    return episodes.find(ep => ep.id === currentId + 1) || null;
}

export function getUnlockedEpisodes(): Episode[] {
    return episodes.filter(isEpisodeUnlocked);
}

export function getLockedEpisodes(): Episode[] {
    return episodes.filter(ep => !isEpisodeUnlocked(ep));
}

export function getCurrentEpisode(): Episode | null {
    const unlocked = getUnlockedEpisodes();
    return unlocked.length > 0 ? unlocked[unlocked.length - 1] : null;
}
