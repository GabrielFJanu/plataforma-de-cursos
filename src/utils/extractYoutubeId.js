export function extractYoutubeId(url) {
    try {
        const parsedUrl = new URL(url);
        const hostname = parsedUrl.hostname.replace(/^www\./, '');

        let youtubeId = null;

        if (hostname === 'youtube.com') {
            youtubeId = parsedUrl.searchParams.get('v');
        }

        if (hostname === 'youtu.be') {
            youtubeId = parsedUrl.pathname.slice(1);
        }

        if (youtubeId && isValidYoutubeId(youtubeId)) {
            return youtubeId;
        }

        return null;
    }
    catch {
        return null;
    }
}

function isValidYoutubeId(youtubeId) {
    return /^[a-zA-Z0-9_-]{11}$/.test(youtubeId);
}
