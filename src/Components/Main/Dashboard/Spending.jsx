import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { Paper, Box, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion'; // Added for entrance animations

const SpendingChart = () => {
    const spendingData = [
        { id: 0, value: 19700, label: 'Shopping', color: '#f43f5e' },
        { id: 1, value: 12200, label: 'Food', color: '#fbbf24' },
        { id: 2, value: 5300, label: 'Entertainment', color: '#a855f7' },
        { id: 3, value: 3900, label: 'Utilities', color: '#3b82f6' },
        { id: 4, value: 3600, label: 'Transport', color: '#6366f1' },
    ];

    const totalSpend = spendingData.reduce((acc, item) => acc + item.value, 0);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <Paper
                elevation={4}
                className="p-6 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow"
                sx={{ borderRadius: '28px', '&:hover': { boxShadow: '0 6px 24px rgba(0,0,0,0.1)' } }} // Syncing with your Insights page style
            >
                <Box className="mb-4">
                    <Typography className="text-gray-900 font-bold text-lg">Spending</Typography>
                    <Typography className="text-gray-400 text-xs">By category this month</Typography>
                </Box>

                <Box className="relative flex items-center justify-center" sx={{ height: 200 }}>
                    {/* Animated Central Label */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="absolute flex flex-col items-center justify-center"
                    >
                        <Typography className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">Total</Typography>
                        <Typography className="text-gray-900 font-black text-xl">
                            ₹{(totalSpend / 1000).toFixed(1)}K
                        </Typography>
                    </motion.div>

                    <PieChart
                        series={[
                            {
                                data: spendingData,
                                innerRadius: 75,
                                outerRadius: 100,
                                paddingAngle: 4,
                                cornerRadius: 8,
                                startAngle: -90,
                                endAngle: 270,
                                highlightScope: { faded: 'global', highlighted: 'item' },
                                faded: { innerRadius: 70, additionalRadius: -5, color: 'gray' },
                            },
                        ]}
                        height={200}
                        slotProps={{ legend: { hidden: true } }}
                        // Animation for the pie slices
                        sx={{
                            '& .MuiPieArc-root': {
                                transformOrigin: 'center',
                                transition: 'all 0.3s ease-in-out',
                            }
                        }}
                    />
                </Box>

                {/* Custom Legend with Staggered Fade-in */}
                <Stack spacing={1.5} className="mt-4">
                    {spendingData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + (index * 0.1) }}
                            className="flex items-center justify-between"
                        >
                            <Box className="flex items-center gap-3">
                                <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: item.color }} />
                                <Typography className="text-gray-600 text-sm font-medium">{item.label}</Typography>
                            </Box>
                            <Typography className="text-gray-900 text-sm font-bold">
                                ₹{(item.value / 1000).toFixed(1)}K
                            </Typography>
                        </motion.div>
                    ))}
                </Stack>
            </Paper>
        </motion.div>
    );
};

export default SpendingChart;