import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTopOnRoute from "@/components/ScrollToTopOnRoute";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";

const Loading = () => (
    <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
);

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen w-full max-w-[100vw] overflow-x-hidden">
            <ScrollToTopOnRoute />
            <Header />
            <main className="flex-grow w-full min-w-0">
                <Suspense fallback={<Loading />}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
            <CookieConsent />
            {/* Global floating elements */}
            <ScrollToTopButton />
            <WhatsAppButton />
        </div>
    );
};

export default MainLayout;
