import TopBar from './TopBar';
import Header from './Header';
import Footer from './Footer';

export default function LayoutWrapper({ children, showLayout = true }) {
    if (!showLayout) {
        return <>
            <main className="min-h-screen">{children}</main>
        </>;
    }

    return (
        <>
            <TopBar />
            <Header />
            <main className="min-h-screen">
                {children}
            </main>
            <Footer />
        </>
    );
} 