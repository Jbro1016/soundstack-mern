export async function searchArtists(query: string) {
    const response = await fetch(
        `https://musicbrainz.org/ws/2/artist/?query=${encodeURIComponent(query)}&fmt=json`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch artists");
    }

    return response.json();
}