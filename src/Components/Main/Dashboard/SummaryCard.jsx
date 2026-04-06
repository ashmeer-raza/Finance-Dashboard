import React from 'react';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { ChartsTooltip } from '@mui/x-charts/ChartsTooltip';
import Paper from '@mui/material/Paper';
import { LinePlot } from '@mui/x-charts/LineChart';
import { motion } from 'framer-motion'; // Importing Framer Motion for animations

const cardsData = [
    {
        title: "Total Balance",
        value: "₹6.0L",
        data: [2.0, 2.2, 3.5, 3.8, 3.4, 5.5, 5.0, 3.0, 5.8, 4.6, 5.4, 5.9],
        color: "#22c55e",
    },
    {
        title: "Total Income",
        value: "₹3.4L",
        data: [70, 75, 85, 90, 85, 75, 90, 75, 85, 95, 85, 80],
        color: "#3b82f6",
    },
    {
        title: "Total Expenses",
        value: "₹44.7K",
        data: [0.9, 0.6, 0.8, 0.5, 0.3, 0.5, 0.7, 0.9, 0.6, 0.4, 0.2, 0.5],
        color: "#ef4444",
    },
    {
        title: "Savings Rate",
        value: "87.0%",
        data: [4.0, 3.8, 3.5, 3.2, 3.0, 2.8, 3.1, 3.3, 3.5, 3.7, 3.9, 4.2],
        color: "#a855f7",
    },
];

const xLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const SummaryCard = () => {
    return (
        <div className="flex flex-wrap pt-10 gap-4 justify-center">
            <h3 className="w-full text-2xl font-bold text-gray-600 px-10 mb-4">Summary</h3>
            {cardsData.map((card, index) => (
                <motion.div
                    key={index}
                    // Entry animation: Fade in and slide up
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    // Stagger the entrance of each card
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }} // Interactive hover scale
                >
                    <Paper
                        elevation={4}
                        className="p-4 rounded-xl w-fit"
                        sx={{
                            borderRadius: '20px',
                            border: '1px solid #f1f5f9',
                            // Custom CSS for the LinePlot path animation
                            '& .MuiLineElement-root': {
                                strokeDasharray: '300',
                                strokeDashoffset: '300',
                                animation: 'draw 2s forwards ease-in-out',
                                animationDelay: `${index * 0.2}s`
                            },
                            '@keyframes draw': {
                                to: { strokeDashoffset: '0' }
                            }
                        }}
                    >
                        <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider">{card.title}</h3>
                        <h2 className="text-xl font-black mb-2">{card.value}</h2>

                        <ChartContainer
                            width={260}
                            height={80}
                            series={[
                                {
                                    type: "line",
                                    data: card.data,
                                    color: card.color,
                                    area: true, // Optional: add area for better visibility
                                },
                            ]}
                            xAxis={[{ scaleType: "point", data: xLabels, position: "none" }]}
                            yAxis={[{ position: "none" }]}
                            margin={{ left: 10, right: 10, top: 10, bottom: 10 }}
                        >
                            <LinePlot />
                            <ChartsTooltip />
                        </ChartContainer>
                    </Paper>
                </motion.div>
            ))}
        </div>
    );
};

export default SummaryCard;