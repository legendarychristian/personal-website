"use client";
import './globals.css'
import { AnimatePresence } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";
import ObserverProvider from './ObserverProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <ObserverProvider>
                    <ParallaxProvider>
                        <AnimatePresence mode="wait">
                            {children}
                        </AnimatePresence>
                    </ParallaxProvider>
                </ObserverProvider>
            </body>
        </html>
    );
}
