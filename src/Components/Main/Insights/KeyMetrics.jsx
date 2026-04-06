import React from 'react';
import { Box, Typography, Divider, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const KeyMetrics = () => {
    const metrics = [
        { l: 'Savings Rate', v: '87.0%', s: 'Excellent', c: '#22c55e' },
        { l: 'Avg Monthly Income', v: '₹1.1L', s: 'per month', c: '#22c55e' },
        { l: 'Total Transactions', v: '28', s: '9 income, 19 expense', c: '#6366f1' }
    ];

    return (
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
            <Paper elevation={10} sx={{ borderRadius: '28px', border: '1px solid #f1f5f9', cursor: 'pointer', '&:hover': { boxShadow: '0 6px 24px rgba(0,0,0,0.1)' } }}>
                <Box sx={{ p: 4, bgcolor: '#fff', borderRadius: '28px', border: '1px solid #f1f5f9' }}>
                    <Typography variant="h5" fontWeight="700" sx={{ mb: 3 }}>Key Metrics</Typography>
                    {metrics.map((m, i) => (
                        <Box key={m.l}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 2 }}>
                                <Box>
                                    <Typography variant="body2" fontWeight="700" color="#475569">{m.l}</Typography>
                                    <Typography variant="caption" display="block" color="#94a3b8">{m.s}</Typography>
                                </Box>
                                <Typography variant="h5" fontWeight="600" color={m.c}>{m.v}</Typography>
                            </Box>
                            {i < metrics.length - 1 && <Divider sx={{ borderColor: '#f1f5f9' }} />}
                        </Box>
                    ))}
                </Box>
            </Paper>
        </motion.div>
    );
};

export default KeyMetrics;