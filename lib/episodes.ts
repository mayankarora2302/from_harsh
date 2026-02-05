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
        coverImage: '/assets/images/3b37cc17-107b-4529-b5e1-7d8541b7f787.JPG',
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
        coverImage: '/assets/images/16102361-4fc8-4351-b5a8-f842e65eda30.JPG',
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
        coverImage: '/assets/images/da940164-341c-4697-8648-0bb96008ae6c 2.JPG',
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
        coverImage: '/assets/images/88f29ba4-8039-464e-82c5-1790a038c8ff 2.JPG',
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
        coverImage: '/assets/images/355c0de7-d567-4675-a5c0-e7e8d4f32b26.JPG',
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
        coverImage: '/assets/images/78a302c8-5fb2-4128-b7d6-219391aa588d 2.JPG',
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
        coverImage: '/assets/images/4bbaf41e-0842-4192-85b6-5960311740f2 2.JPG',
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
        coverImage: '/assets/images/3e735fe3-5fb9-48ee-a426-e34eb193729f.JPG',
        description: "The grand celebration of our love - a cinematic finale that honors every moment we've shared.",
        duration: "20 min",
        color: "#E50914",
        soundtrack: '/assets/audio/episode8.mp3',
    },
];

export function isEpisodeUnlocked(episode: Episode): boolean {
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    // Normalize release date to midnight for accurate comparison
    const normalizedReleaseDate = new Date(episode.releaseDate);
    normalizedReleaseDate.setHours(0, 0, 0, 0);

    return now >= normalizedReleaseDate;
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
