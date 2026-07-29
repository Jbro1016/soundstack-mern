import { useState } from "react";
import {
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { auth } from "../firebase";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();

        try {
            const result = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            if (!result.user.emailVerified) {
                setMessage("Please verify your email before logging in.");
                return;
            }

            navigate("/dashboard");
        } catch (error: any) {
            setMessage(error.message);
        }
    }

    async function handleGoogleLogin() {
        try {
            const provider = new GoogleAuthProvider();

            await signInWithPopup(auth, provider);

            navigate("/dashboard");
        } catch (error: any) {
            setMessage(error.message);
        }
    }

    return (
        <div>
            <h1>Login</h1>

            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">
                    Login
                </button>
            </form>

            <button onClick={handleGoogleLogin}>
                Sign in with Google
            </button>

            <p>{message}</p>
        </div>
    );
}

export default Login;