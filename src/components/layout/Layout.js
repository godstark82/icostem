"use client"
import { usePathname } from 'next/navigation';
import { getLayoutConfig } from '../../utils/constants';
import Header from '../Header';
import Footer from '../Footer';
import TopBar from '../TopBar';

export default function Layout({ children }) {
    const pathname = usePathname();
    const showLayout = getLayoutConfig(pathname);

    if (!showLayout) {
        return <>{children}</>;
    }

    return (
        <div className="min-h-screen flex flex-col">
            <TopBar />
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
} 