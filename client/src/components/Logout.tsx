import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function Logout() {
    async function handleLogout() {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Logout failed:", error);
        }
    }

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    );
}