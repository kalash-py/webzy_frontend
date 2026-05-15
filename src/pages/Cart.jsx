import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import Navbar from "../components/Navbar";
import { toast } from "sonner";

const initialItems = [
    {
        id: 1,
        title: "ENTER TEXT HERE — Starter",
        desc: "ENTER TEXT HERE",
        price: 999,
        qty: 1,
    },
    {
        id: 2,
        title: "ENTER TEXT HERE — Pro",
        desc: "ENTER TEXT HERE",
        price: 2499,
        qty: 1,
    },
];

export default function Cart() {
    const [items, setItems] = useState(initialItems);

    const total = items.reduce((s, i) => s + i.price * i.qty, 0);

    const update = (id, delta) =>
        setItems((prev) =>
            prev.map((i) =>
                i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i
            )
        );

    const remove = (id) => {
        setItems((prev) => prev.filter((i) => i.id !== id));
        toast.success("Removed from cart");
    };

    return (
        <div className="relative min-h-screen bg-ambient text-white noise overflow-hidden">
            <Navbar />

            <div className="relative z-10 mx-auto max-w-5xl px-6 pt-36 pb-24">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-zinc-400 hover:text-white transition mb-10"
                >
                    <ArrowLeft className="h-4 w-4" /> Back
                </Link>

                <div className="text-[11px] uppercase tracking-[0.3em] text-violet-400/80 mb-4">
                    Cart
                </div>

                <h1 className="font-display text-5xl font-medium tracking-tighter">
                    Your <span className="text-gradient">Bag</span>
                </h1>

                {items.length === 0 ? (
                    <div className="mt-16 bg-white/[0.02] border border-white/10 rounded-3xl p-14 text-center">
                        <ShoppingBag className="h-8 w-8 text-zinc-500 mx-auto mb-4" />
                        <p className="text-zinc-400">Your cart is empty.</p>

                        <Link
                            to="/"
                            className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm text-white bg-gradient-to-r from-blue-600 to-violet-600 glow-btn"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="mt-12 grid lg:grid-cols-12 gap-8">
                        {/* Items */}
                        <div className="lg:col-span-8 space-y-4">
                            {items.map((it) => (
                                <div
                                    key={it.id}
                                    className="bg-white/[0.02] border border-white/10 rounded-2xl p-5 flex items-center gap-5"
                                >
                                    <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-blue-600/40 to-violet-600/40 border border-white/10" />

                                    <div className="flex-1">
                                        <div className="font-display text-lg">
                                            {it.title}
                                        </div>
                                        <div className="text-xs text-zinc-500 mt-1">
                                            {it.desc}
                                        </div>
                                    </div>

                                    {/* Quantity */}
                                    <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full p-1">
                                        <button
                                            onClick={() => update(it.id, -1)}
                                            className="h-7 w-7 grid place-items-center rounded-full hover:bg-white/10"
                                        >
                                            <Minus className="h-3 w-3" />
                                        </button>

                                        <span className="text-sm w-6 text-center">
                                            {it.qty}
                                        </span>

                                        <button
                                            onClick={() => update(it.id, 1)}
                                            className="h-7 w-7 grid place-items-center rounded-full hover:bg-white/10"
                                        >
                                            <Plus className="h-3 w-3" />
                                        </button>
                                    </div>

                                    {/* Price */}
                                    <div className="text-sm w-20 text-right">
                                        ₹{(it.price * it.qty).toLocaleString()}
                                    </div>

                                    {/* Remove */}
                                    <button
                                        onClick={() => remove(it.id)}
                                        className="h-9 w-9 grid place-items-center rounded-full hover:bg-red-500/20 text-zinc-400 hover:text-red-400 transition"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Summary */}
                        <div className="lg:col-span-4">
                            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
                                <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                                    Summary
                                </div>

                                <div className="mt-5 space-y-3 text-sm text-zinc-400">
                                    <div className="flex justify-between">
                                        <span>Subtotal</span>
                                        <span className="text-white">
                                            ₹{total.toLocaleString()}
                                        </span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span>Tax</span>
                                        <span className="text-white">₹0</span>
                                    </div>

                                    <div className="border-t border-white/10 pt-3 mt-3 flex justify-between text-base">
                                        <span className="text-white">Total</span>
                                        <span className="text-white">
                                            ₹{total.toLocaleString()}
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={() =>
                                        toast.success("Redirecting to checkout")
                                    }
                                    className="mt-6 w-full rounded-full px-6 py-4 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-violet-600 glow-btn hover:scale-[1.01] transition"
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}