import React, { useMemo } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import TrendingUpIcon from '@mui/icons-material/TrendingUp'; // Using stable icon

const MonthlyComparison = () => {
    const data = [
        { label: 'Income', current: '₹1.3L', prev: '₹1.0L', trend: '24.3', color: '#22c55e' },
        { label: 'Expenses', current: '₹21.7K', prev: '₹10.4K', trend: '108.5', color: '#f43f5e' }
    ];

    return (
        <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
            <Paper elevation={10} sx={{ borderRadius: '28px', border: '1px solid #f1f5f9', cursor: 'pointer', '&:hover': { boxShadow: '0 6px 24px rgba(0,0,0,0.1)' } }}>
                <Box sx={{ p: 4, bgcolor: '#fff', borderRadius: '28px', border: '1px solid #f1f5f9' }}>
                    <Typography variant="h6" fontWeight="600" sx={{ mb: 3 }}>Monthly Comparison</Typography>
                    {data.map((item, i) => (
                        <Box key={item.label} sx={{ p: 2.5, mb: 2, bgcolor: '#f8fafc', borderRadius: '20px', border: '1px solid #f1f5f9' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                                <Typography variant="caption" fontWeight="700" color="text.secondary" sx={{ textTransform: 'uppercase' }}>{item.label}</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: item.color }}>
                                    <TrendingUpIcon sx={{ fontSize: 14 }} />
                                    <Typography variant="caption" fontWeight="800">{item.trend}%</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                <Box><Typography variant="caption" color="text.secondary">Prev</Typography><Typography variant="subtitle2" fontWeight="600">{item.prev}</Typography></Box>
                                <Box sx={{ textAlign: 'right' }}><Typography variant="caption" color="text.secondary">Now</Typography><Typography variant="h5" fontWeight="1000" color={item.color}>{item.current}</Typography></Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Paper>
        </motion.div>
    );
};

export default MonthlyComparison;