import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import {
    LogOut,
    LayoutDashboard,
    ArrowLeftRight,
    PieChart,
    Phone,
    Moon
} from 'lucide-react';
import { useAuth } from '../Auth/AuthContext';

const NavMenu = ({ setIsOpen }) => {
    const { logout } = useAuth();

    const navItems = [
        { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={18} /> },
        { name: 'Transactions', path: '/transactions', icon: <ArrowLeftRight size={18} /> },
        { name: 'Insights', path: '/insights', icon: <PieChart size={18} /> }
    ];

    return (
        <>
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[50]"
            />

            {/* Menu Panel */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                className='absolute top-20 right-4 w-72 bg-white border border-gray-100 rounded-[2rem] shadow-2xl p-4 z-[60]'
            >
                <div className='flex flex-col gap-2'>
                    <p className='text-[10px] uppercase tracking-widest text-gray-400 font-bold px-4 mb-1'>
                        Navigation
                    </p>

                    {/* Dashboard, Transactions, Insights Links */}
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `flex items-center gap-3 p-3.5 rounded-2xl text-sm font-semibold transition-all ${isActive
                                    ? 'bg-indigo-50 text-indigo-600'
                                    : 'text-gray-600 hover:bg-gray-50'
                                }`
                            }
                        >
                            {item.icon}
                            {item.name}
                        </NavLink>
                    ))}

                    <div className='h-[1px] bg-gray-100 my-2 mx-2' />

                    <p className='text-[10px] uppercase tracking-widest text-gray-400 font-bold px-4 mb-1'>
                        Support & Settings
                    </p>

                    {/* RESTORED: Contact Support Button */}
                    <button className='flex items-center gap-3 p-3.5 hover:bg-gray-50 rounded-2xl text-sm font-medium text-gray-700 transition-all'>
                        <Phone size={18} className='text-green-500' />
                        Contact Support
                    </button>

                    {/* RESTORED: Theme Toggle (Visual Only) */}
                    <div className='flex items-center justify-between p-3.5 hover:bg-gray-50 rounded-2xl text-sm font-medium text-gray-700 transition-all cursor-pointer'>
                        <div className='flex items-center gap-3'>
                            <Moon size={18} className='text-indigo-500' />
                            <span>Dark Mode</span>
                        </div>
                        {/* Static Switch UI */}
                        <div className='w-10 h-5 rounded-full relative bg-gray-300'>
                            <div className='absolute top-1 left-1 w-3 h-3 bg-white rounded-full' />
                        </div>
                    </div>

                    <div className='h-[1px] bg-gray-100 my-2 mx-2' />

                    {/* Logout Button */}
                    <button
                        onClick={logout}
                        className='flex items-center gap-3 p-3.5 hover:bg-red-50 text-red-600 rounded-2xl text-sm font-bold transition-colors'
                    >
                        <LogOut size={18} />
                        Log out
                    </button>
                </div>
            </motion.div>
        </>
    );
};

export default NavMenu;