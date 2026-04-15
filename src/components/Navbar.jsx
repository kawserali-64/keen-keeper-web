"use client";

import { ChartLine, Clock2, House, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const isActive = (path) => pathname === path;

    const toggleMenu = () => setOpen(!open);

    return (
        <div className="navbar bg-base-100 shadow-sm fixed top-0 left-0 w-full z-50">

            {/* Left logo */}
            <div className="flex-1">
                <p className="text-2xl font-bold">
                    Keen<span className="text-[#244D3F]">Keeper</span>
                </p>
            </div>

            {/* Mobile menu button */}
            <div className="flex-none md:hidden">
                <button onClick={toggleMenu} className="btn btn-ghost">
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Desktop menu (hidden on small, show on md+) */}
            <div className="hidden md:flex flex-none">
                <ul className="menu menu-horizontal px-1 gap-2">

                    <li className={isActive("/") ? "bg-[#244D3F] text-white rounded-lg" : ""}>
                        <Link href="/">
                            <House size={18} /> Home
                        </Link>
                    </li>

                    <li className={isActive("/timeline") ? "bg-[#244D3F] text-white rounded-lg" : ""}>
                        <Link href="/timeline">
                            <Clock2 size={18} /> Timeline
                        </Link>
                    </li>

                    <li className={isActive("/stats") ? "bg-[#244D3F] text-white rounded-lg" : ""}>
                        <Link href="/stats">
                            <ChartLine size={18} /> Stats
                        </Link>
                    </li>

                </ul>
            </div>

            {/* Mobile dropdown menu */}
           {open && (
    <div className="absolute top-16 right-0  bg-base-100 shadow-md md:hidden">
        <ul className="menu p-2">

            <li className={isActive("/") ? "bg-[#244D3F] text-white rounded-lg" : ""} onClick={() => setOpen(false)}>
                <Link href="/">
                    <House size={18} /> Home
                </Link>
            </li>

            <li className={isActive("/timeline") ? "bg-[#244D3F] text-white rounded-lg" : ""} onClick={() => setOpen(false)}>
                <Link href="/timeline">
                    <Clock2 size={18} /> Timeline
                </Link>
            </li>

            <li className={isActive("/stats") ? "bg-[#244D3F] text-white rounded-lg" : ""} onClick={() => setOpen(false)}>
                <Link href="/stats">
                    <ChartLine size={18} /> Stats
                </Link>
            </li>

        </ul>
    </div>
)}

        </div>
    );
};

export default Navbar;