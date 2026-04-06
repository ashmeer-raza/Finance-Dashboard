import React, { useMemo } from 'react';
import { Box, Typography, LinearProgress, Avatar, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const ShoppingCard = () => {
    const stats = useMemo(() => {
        const saved = localStorage.getItem('fintrack_transactions');
        const txns = saved ? JSON.parse(saved) : [];
        const expenses = txns.filter(t => t.type === 'expense');
        const total = Math.abs(expenses.reduce((s, t) => s + t.amount, 0));

        if (total === 0) return [];

        const groups = expenses.reduce((acc, t) => {
            acc[t.category] = (acc[t.category] || 0) + Math.abs(t.amount);
            return acc;
        }, {});

        return Object.keys(groups).map(name => ({
            name,
            amount: groups[name],
            percent: parseFloat(((groups[name] / total) * 100).toFixed(1)),
            color: name === 'Shopping' ? '#f43f5e' : name === 'Food' ? '#f59e0b' : '#10b981'
        })).sort((a, b) => b.amount - a.amount);
    }, []);

    const top = stats[0] || { name: 'N/A', amount: 0, color: '#94a3b8' };

    return (
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            <Paper elevation={10} sx={{ borderRadius: '28px', border: '1px solid #f1f5f9', cursor: 'pointer', '&:hover': { boxShadow: '0 6px 24px rgba(0,0,0,0.1)' } }}>
                <Box sx={{ p: 4, bgcolor: '#fff', borderRadius: '28px', border: '1px solid #f1f5f9', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                    <Typography variant="h6" fontWeight="600" color='#4a5568'>Top Spending Category</Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 3, p: 2.5, bgcolor: '#fafafa', borderRadius: '20px' }}>
                        <Avatar sx={{ bgcolor: `${top.color}20`, color: top.color, fontWeight: 900 }}>{top.name[0]}</Avatar>
                        <Box>
                            <Typography variant="subtitle1" fontWeight="700">{top.name}</Typography>
                            <Typography variant="caption" color="text.secondary" fontWeight="700">₹{top.amount.toLocaleString()} total spent</Typography>
                        </Box>
                    </Box>

                    {stats.map((cat, i) => (
                        <Box key={cat.name} sx={{ mb: 3 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.2 }}>
                                <Typography variant="caption" fontWeight="700" color="#475569">{cat.name}</Typography>
                                <Typography variant="caption" fontWeight="700" color={cat.color}>{cat.percent}%</Typography>
                            </Box>
                            <Box sx={{ height: 10, bgcolor: '#f1f5f9', borderRadius: 5, overflow: 'hidden' }}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${cat.percent}%` }}
                                    transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                                    style={{ height: '100%', backgroundColor: cat.color, borderRadius: 5 }}
                                />
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Paper>
        </motion.div>
    );
};

export default ShoppingCard;