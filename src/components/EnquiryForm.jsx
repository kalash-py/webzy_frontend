import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";

// ✅ Vite env fix
const API = `${import.meta.env.VITE_BACKEND_URL || "http://localhost:5000"}/api`;

export const EnquiryForm = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handle = (k) => (e) => setForm({ ...form, [k]: e.target.value });

    const submit = async (e) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.phone || !form.message) {
            toast.error("Please fill all fields");
            return;
        }

        setLoading(true);

        try {
            await axios.post(`${API}/enquiries`, form);
            toast.success("Message sent. We'll reach out shortly.");
            setForm({ name: "", email: "", phone: "", message: "" });
        } catch (err) {
            toast.error("Could not submit. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="enquiry"
            className="relative z-10 bg-[#030308] border-t border-white/5"
        >
            <div className="mx-auto max-w-6xl px-6 py-28 md:py-36 grid lg:grid-cols-12 gap-14">

                {/* LEFT */}
                <div className="lg:col-span-5">
                    <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-white">
                        Wanna Talk ?
                    </h2>

                    <p className="mt-6 text-base text-zinc-400 leading-relaxed max-w-md">
                        Just shoot us an email or use the contact form here.
                    </p>

                    <div className="mt-10 space-y-4 text-sm">
                        <div className="flex items-center gap-3 text-zinc-400">
                            <span className="h-1 w-6 bg-violet-400/60 rounded-full" />
                            <span className="font-mono-alt">
                               kalashwarankar@gmail.com
                            </span>
                        </div>

                        <div className="flex items-center gap-3 text-zinc-400">
                            <span className="h-1 w-6 bg-blue-400/60 rounded-full" />
                            <span className="font-mono-alt">
                                +919322994945
                            </span>
                        </div>
                    </div>
                </div>

                {/* RIGHT FORM */}
                <motion.form
                    onSubmit={submit}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                    className="lg:col-span-7 bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl"
                >
                    <div className="grid md:grid-cols-2 gap-5">
                        <Field
                            label="Name"
                            value={form.name}
                            onChange={handle("name")}
                        />

                        <Field
                            label="Email"
                            type="email"
                            value={form.email}
                            onChange={handle("email")}
                        />

                        <Field
                            label="Phone"
                            value={form.phone}
                            onChange={handle("phone")}
                            className="md:col-span-2"
                        />

                        <Field
                            label="Message"
                            textarea
                            value={form.message}
                            onChange={handle("message")}
                            className="md:col-span-2"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-8 inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-violet-600 glow-btn disabled:opacity-60 transition hover:scale-[1.02]"
                    >
                        {loading ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                            <Send className="h-4 w-4" />
                        )}
                        <span>Submit</span>
                    </button>
                </motion.form>
            </div>
        </section>
    );
};

const Field = ({
    label,
    value,
    onChange,
    type = "text",
    textarea,
    className = "",
}) => (
    <label className={`block ${className}`}>
        <span className="block text-[11px] uppercase tracking-[0.22em] text-zinc-500 mb-2">
            {label}
        </span>

        {textarea ? (
            <textarea
                rows={5}
                value={value}
                onChange={onChange}
                placeholder="ENTER TEXT HERE"
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500/40 transition"
            />
        ) : (
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder="ENTER TEXT HERE"
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500/40 transition"
            />
        )}
    </label>
);

export default EnquiryForm;