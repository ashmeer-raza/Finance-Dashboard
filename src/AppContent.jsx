import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './Components/Auth/AuthContext';
import Login from './Components/Auth/Login';
import Navbar from './Components/Navbar/Navbar';

// Correct Imports based on your folders
import Dashboard from './Components/Main/Dashboard/Dashboard';
import Transaction from './Components/Main/Transaction/Transaction';
import Insight from './Components/Main/Insights/Insight';

const AppContent = () => {
    const { user } = useAuth();

    if (!user) return <Login />;

    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />
            <main className="p-4 md:p-8">
                <Routes>
                    {/* Default path redirects to Dashboard */}
                    <Route path="/" element={<Navigate to="/dashboard" />} />

                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/transactions" element={<Transaction />} />
                    <Route path="/insights" element={<Insight />} />
                </Routes>
            </main>
        </div>
    );
};

export default AppContent;