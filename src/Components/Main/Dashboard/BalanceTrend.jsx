import React from 'react';
import { Paper, Box, Typography } from '@mui/material';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { LinePlot, AreaPlot, MarkPlot } from '@mui/x-charts/LineChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { ChartsTooltip } from '@mui/x-charts/ChartsTooltip';
import { motion } from 'framer-motion';

const data = [2.2, 3.8, 2.5, 3.1, 2.8];
const xLabels = ['Jan', 'Mar', 'Jun', 'Sep', 'Dec'];

const BalanceTrend = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <Paper
                elevation={4}
                className="p-6 rounded-3xl w-200 border border-gray-100 bg-[#0f172a] text-white transition-all hover:shadow-2xl"
                sx={{
                    // CSS Animation for the line drawing effect
                    '& .MuiLineElement-root': {
                        strokeDasharray: '1000',
                        strokeDashoffset: '1000',
                        animation: 'draw 3s forwards ease-in-out',
                    },
                    '@keyframes draw': {
                        to: { strokeDashoffset: '0' }
                    },
                    // Smooth fade-in for the area fill
                    '& .MuiAreaElement-root': {
                        opacity: 0,
                        animation: 'fadeIn 2s 1s forwards'
                    },
                    '@keyframes fadeIn': {
                        to: { opacity: 1 }
                    },
                    '&:hover': { boxShadow: '0 6px 24px rgba(0,0,0,0.1)' }
                }}
            >
                <Box>
                    <Typography sx={{ color: 'white' }} className="font-bold text-lg tracking-tight">
                        Balance Trend
                    </Typography>
                    <Typography className="text-gray-400 text-xs font-medium uppercase tracking-wider">
                        Quarterly running balance over the year
                    </Typography>
                </Box>

                <Box>
                    <ChartContainer
                        height={300}
                        series={[{
                            type: 'line',
                            data: data,
                            color: '#6366f1',
                            label: 'Balance',
                            valueFormatter: (v) => `₹${v}L`,
                        }]}
                        xAxis={[{
                            scaleType: 'point',
                            data: xLabels,
                        }]}
                        margin={{ left: 40, right: 20, top: 20, bottom: 40 }}
                    >
                        <defs>
                            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.5} />
                                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                            </linearGradient>
                        </defs>

                        <AreaPlot
                            slotProps={{
                                area: { fill: "url(#areaGradient)" },
                            }}
                        />

                        <LinePlot
                            slotProps={{
                                line: {
                                    strokeWidth: 3,
                                    curve: 'monotoneX',
                                }
                            }}
                        />

                        {/* MarkPlot wrapped in motion logic via sx for pop-in effect */}
                        <MarkPlot
                            sx={{
                                '& .MuiMarkElement-root': {
                                    scale: '0',
                                    animation: 'popIn 0.5s 2.5s forwards cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                                },
                                '@keyframes popIn': {
                                    to: { scale: '1' }
                                }
                            }}
                        />

                        <ChartsXAxis
                            disableLine
                            disableTicks
                            tickLabelStyle={{ fill: '#94a3b8', fontSize: 12 }}
                        />
                        <ChartsYAxis
                            disableLine
                            disableTicks
                            tickLabelStyle={{ fill: '#94a3b8', fontSize: 12 }}
                        />

                        <ChartsTooltip />
                    </ChartContainer>
                </Box>
            </Paper>
        </motion.div>
    );
};

export default BalanceTrend;