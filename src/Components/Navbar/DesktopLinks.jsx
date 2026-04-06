import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const DesktopLinks = () => {
    const navItems = [
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Transactions', path: '/transactions' },
        { name: 'Insights', path: '/insights' }
    ];

    return (
        <div className='hidden lg:block py-3 px-12 rounded-full shadow shadow-blue-900'>
            <ul className='flex justify-center cursor-pointer text-sm font-medium gap-10'>
                {navItems.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) =>
                            isActive ? "text-indigo-600" : "text-black hover:text-indigo-600 transition-colors"
                        }
                    >
                        <motion.li
                            whileHover={{ opacity: 0.7, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {item.name}
                        </motion.li>
                    </NavLink>
                ))}
            </ul>
        </div>
    );
};

export default DesktopLinks;