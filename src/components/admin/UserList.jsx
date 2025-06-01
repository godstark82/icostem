"use client"
import { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';

export default function RegistrationList({ users, onRefresh }) {
    const [loading, setLoading] = useState(false);

    const handleStatusChange = async (userId, newStatus) => {
        setLoading(true);
        try {
            await updateDoc(doc(db, 'registrations', userId), {
                status: newStatus,
                updatedAt: new Date()
            });
            onRefresh();
        } catch (error) {
            console.error('Error updating user status:', error);
        } finally {
            setLoading(false);
        }
    };

    const handlePaymentConfirmation = async (userId, confirmed) => {
        setLoading(true);
        try {
            await updateDoc(doc(db, 'registrations', userId), {
                payment_confirmed: confirmed,
                payment_confirmed_at: new Date(),
                status: confirmed ? 'active' : 'pending'
            });
            onRefresh();
        } catch (error) {
            console.error('Error updating payment status:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Email
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Affiliation
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Country
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Payment ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-medium text-gray-900">{user.name}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{user.email}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{user.affiliation}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{user.country}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{user.paymentIntentId || 'Not provided'}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                    ${user.status === 'active' ? 'bg-green-100 text-green-800' :
                                        user.status === 'inactive' ? 'bg-red-100 text-red-800' :
                                            'bg-yellow-100 text-yellow-800'}`}>
                                    {user.status || 'pending'}
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <div className="flex flex-col space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input 
                                                type="checkbox"
                                                className="sr-only peer"
                                                checked={user.payment_confirmed}
                                                onChange={() => handlePaymentConfirmation(user.id, !user.payment_confirmed)}
                                                disabled={loading}
                                            />
                                            <div className={`w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 
                                                peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] 
                                                after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 
                                                after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
                                                peer-checked:bg-blue-600`}>
                                            </div>
                                            <span className="ml-3 text-sm font-medium text-gray-900">
                                                {user.payment_confirmed ? 'Payment Confirmed' : 'Confirm Payment'}
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}