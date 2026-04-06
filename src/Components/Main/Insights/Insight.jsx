import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import ShoppingCard from './ShoppingCard';
import MonthlyComparison from './MonthlyComparison';
import KeyMetrics from './KeyMetrics';
import SpendingHeatmap from './SpendingHeatmap';

const Insight = () => {
    return (
        <Box sx={{ p: 4, bgcolor: '', minHeight: '100vh' }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                <Typography variant="h4" fontWeight="bold" sx={{ mb: 2, color: '#1e293b' }}>
                    Financial Insights
                </Typography>
            </motion.div>

            <Grid container spacing={4}>
                <Grid xs={{ xs: 12, md: 8 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        <ShoppingCard />
                        <SpendingHeatmap />
                    </Box>
                </Grid>

                <Grid item xs={12} md={5}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        <MonthlyComparison />
                        <KeyMetrics />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Insight;