"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import NavLink from "./nav-link";
import { LogoutButton } from "../logout-button";
import { useAuth } from "@/app/contexts/AuthContext";


// NavLinks based on authentication state
const authenticatedLinks = [
  { href: "/", label: "Home" },
  { href: "/chat", label: "Chat & Community" },
];

const adminLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/about", label: "About Us" },
  { href: "/feedbacks", label: "Resolutions" },
  { href: "/post/create", label: "Add Update" }
]

const unauthenticatedLinks = [
  { href: "/", label: "Home" },
  { href: "/auth/login", label: "Sign In" },
  { href: "/chat", label: "Community" },
];


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, loading } = useAuth();
  const navRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null)

  // if outside of the navbar is clicked in mobile view, close the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current && 
        !navRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  const pathname = usePathname();
  const router = useRouter();

  // console.log(user);
  const handleLogout = async () => {
    try {
      // await logout();
      router.push("/");
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  const closeMenu = () => setIsOpen(false);

  const Navlinks = user?.email ? authenticatedLinks : unauthenticatedLinks;

  return (
    <nav className="bg-white text-[#333333] shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Desktop Navigation */}
          <h1 className="text-2xl font-bold text-gray-900">10XLearn</h1>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex sm:space-x-6">
              {Navlinks.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  isActive={pathname === link.href}
                />
              ))}
              <LogoutButton />
            </div>
            {/* Right side - Avatar for desktop */}



          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              ref={buttonRef}
              onClick={() => setIsOpen(prev => !prev)}
            >
              <span className="sr-only">
                {isOpen ? "Close main menu" : "Open main menu"}
              </span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        </div>
      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            ref={navRef}
            className="absolute top-20 bg-white right-2 px-8 py-6 rounded-lg shadow-lg sm:hidden overflow-hidden"
          >
            <div className="grid place-content-center px-2 pt-2 pb-3 space-y-1">
              {Navlinks.map((link) => (
                <NavLink
                  key={`mobile-${link.href}`}
                  href={link.href}
                  label={link.label}
                  isActive={pathname === link.href}
                  isMobile={true}
                  onClick={closeMenu}
                />
              ))}
              
        
                  
                  {/* <Link
                    href="/profile"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                    onClick={closeMenu}
                  >
                    Profile
                  </Link> */}
                  {
                    user?.email && (<LogoutButton />)
                  }
                  </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}