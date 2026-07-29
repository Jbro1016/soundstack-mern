import { useState } from "react";
import { searchArtists } from "../api/music";

export default function MusicSearch() {
    const [query, setQuery] = useState("");
    const [artists, setArtists] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    async function handleSearch() {
        if (!query) return;

        setLoading(true);

        try {
            const data = await searchArtists(query);

            setArtists(data.artists || []);
        } catch (error) {
            console.error(error);
        }

        setLoading(false);
    }


    return (
        <div>
            <h2>
                Search Music
            </h2>

            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search artist..."
            />

            <button onClick={handleSearch}>
                Search
            </button>


            {loading && <p>Loading...</p>}


            {artists.map((artist) => (
                <div key={artist.id}>
                    <h3>
                        {artist.name}
                    </h3>

                    <p>
                        {artist.country || "Unknown country"}
                    </p>

                    <p>
                        {artist.disambiguation}
                    </p>
                </div>
            ))}
        </div>
    );
}