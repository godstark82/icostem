"use client"
import { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const PAPER_STATUSES = {
    pending: {
        label: 'Pending Review',
        color: 'bg-yellow-100 text-yellow-800'
    },
    under_review: {
        label: 'Under Review',
        color: 'bg-blue-100 text-blue-800'
    },
    accepted: {
        label: 'Accepted',
        color: 'bg-green-100 text-green-800'
    },
    rejected: {
        label: 'Rejected',
        color: 'bg-red-100 text-red-800'
    },
    revision_required: {
        label: 'Revision Required',
        color: 'bg-purple-100 text-purple-800'
    }
};

export default function PaperList({ papers, onRefresh, onDelete }) {
    const [loading, setLoading] = useState(false);
    const [updatingPaperId, setUpdatingPaperId] = useState(null);

    const handleStatusChange = async (paperId, newStatus) => {
        setUpdatingPaperId(paperId);
        setLoading(true);
        try {
            await updateDoc(doc(db, 'papers', paperId), {
                status: newStatus,
                reviewedAt: new Date()
            });
            onRefresh();
        } catch (error) {
            console.error('Error updating paper status:', error);
        } finally {
            setLoading(false);
            setUpdatingPaperId(null);
        }
    };

    const handleDelete = async (paperId) => {
        if (window.confirm('Are you sure you want to delete this paper? This action cannot be undone.')) {
            await onDelete(paperId);
        }
    };

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Title
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Authors
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Uploader
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
                    {papers.map((paper) => (
                        <tr key={paper.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-medium text-gray-900">{paper.paperTitle}</div>
                                <div className="text-sm text-gray-500">{paper.paperTopic}</div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm text-gray-900">
                                    {paper.authorName || 'N/A'}
                                </div>
                                <div className="text-sm text-gray-500">
                                    {paper.authorAffiliation || 'N/A'}
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{paper.authorName || 'N/A'}</div>
                                <div className="text-sm text-gray-500">{paper.authorEmail || 'N/A'}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="relative">
                                    <select
                                        value={paper.status || 'pending'}
                                        onChange={(e) => handleStatusChange(paper.id, e.target.value)}
                                        disabled={loading && updatingPaperId === paper.id}
                                        className={`block w-full pl-3 pr-10 py-2 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-primary ${PAPER_STATUSES[paper.status || 'pending'].color
                                            } border-0 cursor-pointer`}
                                    >
                                        {Object.entries(PAPER_STATUSES).map(([value, { label }]) => (
                                            <option key={value} value={value} className="bg-white text-gray-900">
                                                {label}
                                            </option>
                                        ))}
                                    </select>
                                    {loading && updatingPaperId === paper.id && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
                                            <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-primary"></div>
                                        </div>
                                    )}
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <div className="flex space-x-3">
                                    <a
                                        href={paper.fileUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:text-primary-dark flex items-center"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                        </svg>
                                        View
                                    </a>
                                    <button
                                        onClick={() => handleDelete(paper.id)}
                                        className="text-red-600 hover:text-red-800 flex items-center"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}