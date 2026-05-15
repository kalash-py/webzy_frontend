import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { ArrowLeft, Loader2 } from "lucide-react";
import Navbar from "../components/Navbar";

// ✅ Vite env fix
const API = `${import.meta.env.VITE_BACKEND_URL || "http://localhost:5000"}/api`;

export default function SignUp() {
    const [f, setF] = useState({ name: "", email: "", password: "" });
    const [loading, setLoading] = useState(false);

    const submit = async (e) => {
        e.preventDefault();

        if (!f.name || !f.email || !f.password) {
            toast.error("Please fill all fields");
            return;
        }

        setLoading(true);

        try {
            await axios.post(`${API}/signups`, f);
            toast.success("Account created. Welcome.");
            setF({ name: "", email: "", password: "" });
        } catch (err) {
            const msg =
                err?.response?.data?.detail || "Signup failed. Try again.";
            toast.error(msg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen bg-ambient text-white noise overflow-hidden">
            <Navbar />

            <div className="relative z-10 mx-auto max-w-xl px-6 pt-36 pb-20">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-zinc-400 hover:text-white transition mb-10"
                >
                    <ArrowLeft className="h-4 w-4" /> Back
                </Link>

                <div className="text-[11px] uppercase tracking-[0.3em] text-violet-400/80 mb-4">
                    Sign Up
                </div>

                <h1 className="font-display text-5xl font-medium tracking-tighter">
                    ENTER TEXT <span className="text-gradient">HERE</span>
                </h1>

                <p className="mt-5 text-zinc-400 text-base max-w-md">
                    ENTER TEXT HERE
                </p>

                <form
                    onSubmit={submit}
                    className="mt-12 bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-xl space-y-5"
                >
                    {[
                        { k: "name", label: "Name", type: "text" },
                        { k: "email", label: "Email", type: "email" },
                        { k: "password", label: "Password", type: "password" },
                    ].map((i) => (
                        <label key={i.k} className="block">
                            <span className="block text-[11px] uppercase tracking-[0.22em] text-zinc-500 mb-2">
                                {i.label}
                            </span>

                            <input
                                type={i.type}
                                value={f[i.k]}
                                onChange={(e) =>
                                    setF({ ...f, [i.k]: e.target.value })
                                }
                                placeholder="ENTER TEXT HERE"
                                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500/40 transition"
                            />
                        </label>
                    ))}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-violet-600 glow-btn disabled:opacity-60 transition hover:scale-[1.01]"
                    >
                        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
}