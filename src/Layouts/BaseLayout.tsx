import { Nav } from "@/components/Nav/Nav";
import Head from "next/head"
import React from "react"

interface BaseLayoutProps {
    children: any;
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
    return (
        <>
            <Head>

            </Head>
            <Nav />
            <main>
                {children}
            </main>
        </>
    )
}