import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ArrowLeft, RefreshCw, Mail, Phone, User } from "lucide-react";
import Navbar from "../components/Navbar.jsx";

// ✅ Vite env fix
const API = `${import.meta.env.VITE_BACKEND_URL || "http://localhost:5000"}/api`;

export default function Admin() {
    const [enquiries, setEnquiries] = useState([]);
    const [signups, setSignups] = useState([]);
    const [loading, setLoading] = useState(false);
    const [tab, setTab] = useState("enquiries");

    const load = async () => {
        setLoading(true);
        try {
            const [e, s] = await Promise.all([
                axios.get(`${API}/enquiries`),
                axios.get(`${API}/signups`),
            ]);

            setEnquiries(e.data || []);
            setSignups(s.data || []);
        } catch (err) {
            console.error("API Error:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        load();
    }, []);

    return (
        <div className="relative min-h-screen bg-ambient text-white noise overflow-hidden">
            <Navbar />

            <div className="relative z-10 mx-auto max-w-6xl px-6 pt-36 pb-24">
                {/* Top Bar */}
                <div className="flex items-center justify-between mb-10">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-zinc-400 hover:text-white transition"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back
                    </Link>

                    <button
                        onClick={load}
                        className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.18em] text-zinc-300 bg-white/5 border border-white/10 hover:border-violet-400/40 transition"
                    >
                        <RefreshCw
                            className={`h-3 w-3 ${loading ? "animate-spin" : ""}`}
                        />
                        Refresh
                    </button>
                </div>

                {/* Heading */}
                <div className="text-[11px] uppercase tracking-[0.3em] text-violet-400/80 mb-4">
                    Admin
                </div>

                <h1 className="font-display text-5xl font-medium tracking-tighter">
                    Submissions <span className="text-gradient">Panel</span>
                </h1>

                {/* Tabs */}
                <div className="mt-10 inline-flex items-center gap-1 rounded-full p-1 bg-white/5 border border-white/10">
                    {["enquiries", "signups"].map((t) => (
                        <button
                            key={t}
                            onClick={() => setTab(t)}
                            className={`px-5 py-2 text-xs uppercase tracking-[0.18em] rounded-full transition ${
                                tab === t
                                    ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white"
                                    : "text-zinc-400 hover:text-white"
                            }`}
                        >
                            {t} (
                            {t === "enquiries"
                                ? enquiries.length
                                : signups.length}
                            )
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="mt-8 bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden">
                    {tab === "enquiries" ? (
                        enquiries.length === 0 ? (
                            <div className="p-16 text-center text-zinc-500">
                                No enquiries yet.
                            </div>
                        ) : (
                            <div className="divide-y divide-white/5">
                                {enquiries.map((e) => (
                                    <div
                                        key={e.id}
                                        className="p-6 hover:bg-white/[0.02] transition"
                                    >
                                        <div className="flex flex-wrap items-center gap-4 text-sm">
                                            <span className="inline-flex items-center gap-2">
                                                <User className="h-3.5 w-3.5 text-violet-400" />
                                                {e.name}
                                            </span>

                                            <span className="inline-flex items-center gap-2 text-zinc-400 text-xs">
                                                <Mail className="h-3.5 w-3.5 text-blue-400" />
                                                {e.email}
                                            </span>

                                            <span className="inline-flex items-center gap-2 text-zinc-400 text-xs">
                                                <Phone className="h-3.5 w-3.5 text-blue-400" />
                                                {e.phone}
                                            </span>

                                            <span className="ml-auto text-[11px] text-zinc-600">
                                                {new Date(e.created_at).toLocaleString()}
                                            </span>
                                        </div>

                                        <p className="mt-3 text-sm text-zinc-400">
                                            {e.message}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )
                    ) : signups.length === 0 ? (
                        <div className="p-16 text-center text-zinc-500">
                            No signups yet.
                        </div>
                    ) : (
                        <div className="divide-y divide-white/5">
                            {signups.map((s) => (
                                <div
                                    key={s.id}
                                    className="p-6 flex items-center gap-4 text-sm"
                                >
                                    <User className="h-4 w-4 text-violet-400" />
                                    <span>{s.name}</span>

                                    <span className="text-zinc-400 text-xs">
                                        {s.email}
                                    </span>

                                    <span className="ml-auto text-[11px] text-zinc-600">
                                        {new Date(s.created_at).toLocaleString()}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}