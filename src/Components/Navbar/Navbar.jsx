import React, { useState } from 'react';
import { HandCoins, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DesktopLinks from './DesktopLinks';
import NavMenu from './NavMenu';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className='bg-white sticky top-0 z-50 border-b border-gray-50'
        >
            <nav className='relative text-lg text-black px-4 md:px-10 flex justify-between items-center p-4'>
                {/* Logo */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className='flex items-center gap-2 cursor-pointer z[60]'
                >
                    <HandCoins className="" />
                    <h1 className='text-xl md:text-2xl text-neutral-950 font-mono font-semibold'>
                        Finance
                    </h1>
                </motion.div>

                {/* Desktop Nav */}
                <DesktopLinks />

                {/* Menu Toggle Button */}
                <motion.div
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className="cursor-pointer p-2 rounded-xl hover:bg-gray-100 z[60] transition-colors"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} className='text-neutral-700' />}
                </motion.div>

                {/* Overlays & Menus */}
                <AnimatePresence>
                    {isOpen && <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
                </AnimatePresence>
            </nav>
        </motion.div>
    );
};

export default Navbar;