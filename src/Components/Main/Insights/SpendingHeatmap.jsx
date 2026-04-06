import React, { useMemo } from 'react';
import { Box, Typography, Tooltip, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const SpendingHeatmap = () => {
    const days = Array(31).fill(0).map(() => Math.floor(Math.random() * 3)); // Mocking density for UI

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            <Paper elevation={10} sx={{ borderRadius: '28px', border: '1px solid #f1f5f9', cursor: 'pointer', '&:hover': { boxShadow: '0 6px 24px rgba(0,0,0,0.1)' } }}>
                <Box sx={{ p: 4, bgcolor: '#fff', borderRadius: '28px', border: '1px solid #f1f5f9' }}>
                    <Typography variant="h6" fontWeight="500" sx={{ mb: 1 }}>Spending by Day</Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ mb: 3, display: 'block' }}>Activity density per month</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.2 }}>
                        {days.map((v, i) => (
                            <Tooltip key={i} title={`Day ${i + 1}`}>
                                <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                                    <Box sx={{
                                        width: 32, height: 32, borderRadius: '10px',
                                        bgcolor: v > 0 ? (v > 1 ? '#f87171' : '#fee2e2') : '#f8fafc',
                                        border: '1px solid #f1f5f9', cursor: 'pointer'
                                    }} />
                                </motion.div>
                            </Tooltip>
                        ))}
                    </Box>
                </Box>
            </Paper>
        </motion.div>
    );
};

export default SpendingHeatmap;