import { useState } from "react";
import {
    createUserWithEmailAndPassword,
    sendEmailVerification
} from "firebase/auth";

import { auth } from "../firebase";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    async function handleRegister(e: React.FormEvent) {
        e.preventDefault();

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            await sendEmailVerification(userCredential.user);

            setMessage(
                "Account created! Please check your email to verify your account."
            );
        } catch (error: any) {
            setMessage(error.message);
        }
    }

    return (
        <div>
            <h1>Create Account</h1>

            <form onSubmit={handleRegister}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                    required
                />

                <button type="submit">
                    Register
                </button>
            </form>

            <p>{message}</p>
        </div>
    );
}