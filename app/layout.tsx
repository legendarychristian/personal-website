"use client";
import './globals.css'
import { AnimatePresence } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <ParallaxProvider>
                    <AnimatePresence mode="wait">
                        {children}
                    </AnimatePresence>
                </ParallaxProvider>
            </body>
        </html>
    );
}
