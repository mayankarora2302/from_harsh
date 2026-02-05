export const RELATIONSHIP_START_DATE = new Date('2025-04-14'); // Together since April 14, 2025

export function formatDuration(startDate: Date): {
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
} {
    const now = new Date();
    const diff = now.getTime() - startDate.getTime();

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30.44); // Average month length
    const years = Math.floor(days / 365.25); // Account for leap years

    return {
        years,
        months: months % 12,
        days: days % 30,
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60,
    };
}

export function formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
}

export function getRelativeTime(date: Date): string {
    const now = new Date();
    const diff = date.getTime() - now.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    if (days < 0) return 'Available now';
    if (days === 0) return 'Available today';
    if (days === 1) return 'Available tomorrow';
    return `Available in ${days} days`;
}
