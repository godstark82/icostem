"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import AdminDashboard from '../../components/admin/AdminDashboard';
import AdminLogin from '../../components/admin/AdminLogin';
import LayoutWrapper from '../../components/LayoutWrapper';

export default function AdminPanel() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsAuthenticated(!!user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [auth]);

    if (loading) {
        return (
            <LayoutWrapper showLayout={false}>
                <div className="min-h-screen flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                </div>
            </LayoutWrapper>
        );
    }

    return (
        <LayoutWrapper showLayout={false}>
            <div className="min-h-screen bg-gray-100">
                {isAuthenticated ? (
                    <AdminDashboard />
                ) : (
                    <AdminLogin onLogin={() => setIsAuthenticated(true)} />
                )}
            </div>
        </LayoutWrapper>
    );
} 