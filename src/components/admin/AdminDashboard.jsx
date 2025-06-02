"use client"
import { useState, useEffect } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../firebase';
import PaperList from './PaperList';
import UserList from './UserList';

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState('papers');
    const [papers, setPapers] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const auth = getAuth();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            // Fetch papers
            const papersQuery = query(collection(db, 'papers'), orderBy('uploadedAt', 'desc'));
            const papersSnapshot = await getDocs(papersQuery);
            const papersData = papersSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setPapers(papersData);

            // Fetch users (if you have a users collection)
            const usersQuery = query(collection(db, 'registrations'));
            const usersSnapshot = await getDocs(usersQuery);
            const usersData = usersSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setUsers(usersData);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Admin Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <div className="flex items-center">
                        {/* <img src="/images/simdte-logo-hero.png" alt="SIMDTE" className="h-8 w-auto mr-3" /> */}
                        <h1 className="text-xl font-semibold text-gray-900">SIMDTE Admin Panel</h1>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark transition-colors"
                    >
                        Logout
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Tabs */}
                <div className="border-b border-gray-200 mb-8">
                    <nav className="-mb-px flex space-x-8">
                        <button
                            onClick={() => setActiveTab('papers')}
                            className={`${activeTab === 'papers'
                                ? 'border-primary text-primary'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                        >
                            Papers ({papers.length})
                        </button>
                        <button
                            onClick={() => setActiveTab('registrations')}
                            className={`${activeTab === 'registrations'
                                ? 'border-primary text-primary'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                        >
                            Registrations ({users.length})
                        </button>
                    </nav>
                </div>

                {/* Content */}
                <div className="bg-white shadow rounded-lg">
                    {activeTab === 'papers' ? (
                        <PaperList papers={papers} onRefresh={fetchData} />
                    ) : (
                        <UserList users={users} onRefresh={fetchData} />
                    )}
                </div>
            </main>
        </div>
    );
} 