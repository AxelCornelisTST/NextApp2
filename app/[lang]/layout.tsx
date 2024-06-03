export const dynamic = "force-dynamic";

import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import {dir} from 'i18next'
import NextAuthProvider from "@/components/NextAuthProvider";

interface RootLayoutProps {
    children: React.ReactNode;
    params: {
        lang: string;
    };
}

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "LDB",
    description: "Laptop Database Talentenschool Turnhout",
};

export default function RootLayout({children, params: {lang}}: RootLayoutProps): JSX.Element {
    return (
        <html lang={lang} dir={dir(lang)}>
        <NextAuthProvider>
            <body className={`${inter.className} bgImg dark:bgImg`}>
            <NavBar lang={lang}/>
            {children}
            </body>
        </NextAuthProvider>
        </html>
    );
}
