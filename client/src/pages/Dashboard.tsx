import Logout from "../components/Logout";
import MusicSearch from "../components/MusicSearch";

export default function Dashboard() {
    return (
        <div>
            <h1>
                Welcome to SoundStack
            </h1>

            <MusicSearch />

            <Logout />
        </div>
    );
}