"use client";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

const theme = {
    colors: {
        primary: "#FF5733",
        secondary: "#0088CC",
        background: "#F0F0F0",
        text: "#333",
    },
    typography: {
        fontFamily: "Arial, sans-serif",
        fontSize: "16px",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head />
            <body className="dark:bg-stone-900">
                <ThemeProvider
                    enableSystem={true}
                    attribute="class"
                    theme={theme}
                >
                    <Navbar />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
