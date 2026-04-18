"use client";

import Image from "next/image";
import Link from "next/link";
import { useNav } from "@/hooks/useNav";
import Logo from "@/assets/icons/logo.svg";
import Close from "@/assets/icons/hamclose.svg";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";
import { getInitialTheme, setDocumentTheme, type ThemeMode } from "@/lib/utils";

interface ThemeContextValue {
  theme: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface NavProviderProps {
  children: ReactNode;
}

const NavProvider = ({ children }: NavProviderProps) => {
  const nav = useNav();
  const [theme, setTheme] = useState<ThemeMode>("light");

  useEffect(() => {
    const preferred = getInitialTheme();
    setTheme(preferred);
    setDocumentTheme(preferred);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      setDocumentTheme(next);
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
      {nav.isOpen && (
        <div className="bg-nav-bg px-4 py-2 text-nav-text fixed top-0 left-0 w-full h-screen z-50 transition-colors duration-300 border-b border-muted-border">
          <div className="flex justify-between items-center">
            <Link href="/" onClick={nav.onClose}>
              <Image src={Logo} alt="logo" className="w-14 h-14" />
            </Link>

            <Image
              src={Close}
              alt="close"
              className="w-[17px] h-[23px] cursor-pointer"
              onClick={nav.onClose}
            />
          </div>
          <div className="mt-10 flex flex-col space-y-2">
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-nav-text-muted">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>

              <input
                className="h-[36px] relative pl-10 border border-nav-text-muted focus:border-nav-text text-sm rounded-[8px] w-full py-2 px-3 text-nav-text leading-tight focus:outline-none focus:shadow-outline bg-transparent placeholder:text-[color:var(--nav-text-muted)]"
                id="links"
                type="text"
                placeholder="Search"
              />
            </div>
            <Link href="/men" onClick={nav.onClose}>
              <p className="font-light text-nav-text-muted hover:font-normal hover:text-nav-text transition-colors duration-500 ease-in-out">
                Men
              </p>
            </Link>

            <Link href="/women" onClick={nav.onClose}>
              <p className="font-light text-nav-text-muted hover:font-normal hover:text-nav-text transition-colors duration-500 ease-in-out">
                Women
              </p>
            </Link>
            <Link href="/kids" onClick={nav.onClose}>
              <p className="font-light text-nav-text-muted hover:font-normal hover:text-nav-text transition-colors duration-500 ease-in-out">
                Kids
              </p>
            </Link>
          </div>
        </div>
      )}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within NavProvider");
  }
  return context;
};

export default NavProvider;