import React from 'react';
import { Box, Typography, Chip, Avatar, Button, Paper } from '@mui/material';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion'; // Added for staggered list animation

const RecentTransaction = ({ data }) => {
    // Show only 5 recent items
    const recentItems = data.slice(0, 5);

    return (
        <Box sx={{ p: 5 }}>


            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Paper
                    elevation={4}
                    sx={{
                        borderRadius: '28px', // Updated to match other cards
                        border: '1px solid #f1f5f9',
                        overflow: 'hidden',
                        cursor: 'default',
                        transition: 'all 0.3s ease',
                        '&:hover': { boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }
                    }}
                >
                    <Box sx={{
                        p: 4,
                        bgcolor: '#fff',
                        borderRadius: '28px',
                        border: '1px solid #f1f5f9',
                    }}>
                        {/* Header Section */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                            <Typography variant="h6" sx={{ fontWeight: "700", tracking: "-0.5px", opacity: 0.9 }}>
                                Recent Transactions
                            </Typography>
                            <a href="/transactions" style={{ textDecoration: 'none' }}>
                                <Button
                                    size="small"
                                    sx={{
                                        color: '#6366f1',
                                        fontWeight: 'bold',
                                        textTransform: 'none',
                                        '&:hover': { bgcolor: 'transparent', gap: '8px' },
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    View All <ArrowRight size={18} style={{ marginLeft: '4px' }} />
                                </Button>
                            </a>
                        </Box>

                        {/* Transactions List with Staggered Animation */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {recentItems.map((item, index) => {
                                const isIncome = item.type === "income";

                                return (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                p: 2,
                                                borderRadius: '20px',
                                                border: '1px solid #f8fafc',
                                                transition: 'all 0.2s',
                                                '&:hover': {
                                                    bgcolor: '#f8fafc',
                                                    transform: 'translateX(4px)',
                                                    borderColor: '#e2e8f0'
                                                }
                                            }}
                                        >
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                                <Avatar sx={{
                                                    width: 44,
                                                    height: 44,
                                                    bgcolor: isIncome ? '#f0fdf4' : '#fef2f2',
                                                    color: isIncome ? '#22c55e' : '#f43f5e',
                                                    fontSize: '1rem',
                                                    fontWeight: '700',
                                                    borderRadius: '14px' // Squircle shape
                                                }}>
                                                    {item.title.charAt(0)}
                                                </Avatar>

                                                <Box>
                                                    <Typography sx={{ fontSize: '0.95rem', fontWeight: '600', color: '#1e293b' }}>
                                                        {item.title}
                                                    </Typography>
                                                    <Typography sx={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: '500' }}>
                                                        {item.date}
                                                    </Typography>
                                                </Box>
                                            </Box>

                                            <Box sx={{ textAlign: 'right' }}>
                                                <Typography sx={{
                                                    fontSize: '1rem',
                                                    fontWeight: '700',
                                                    color: isIncome ? '#22c55e' : '#f43f5e',
                                                    mb: 0.5
                                                }}>
                                                    {isIncome ? `+₹${item.amount.toLocaleString()}` : `-₹${Math.abs(item.amount).toLocaleString()}`}
                                                </Typography>
                                                <Chip
                                                    label={item.category}
                                                    size="small"
                                                    sx={{
                                                        height: '22px',
                                                        fontSize: '11px',
                                                        fontWeight: '600',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.5px',
                                                        bgcolor: isIncome ? '#f0fdf4' : '#fef2f2',
                                                        color: isIncome ? '#16a34a' : '#ef4444',
                                                        borderRadius: '8px',
                                                        border: 'none'
                                                    }}
                                                />
                                            </Box>
                                        </Box>
                                    </motion.div>
                                );
                            })}
                        </Box>
                    </Box>
                </Paper>
            </motion.div>
        </Box>
    );
};

export default RecentTransaction;