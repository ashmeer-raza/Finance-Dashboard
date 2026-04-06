import React from "react";
import { Paper, Box, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import { motion } from "framer-motion"; // Added Framer Motion for entrance animations

// --- HIGH-DENSITY DATA SCALED TO YOUR CARD VALUES ---
const dataset = [
  // --- OCT 2024 ---
  { x: 1, income: 0.2, balance: 0.5, expenses: 0.05 }, { x: 3, income: 0.8, balance: 1.2, expenses: 0.08 }, { x: 6, income: 1.5, balance: 1.8, expenses: 0.12 },
  // --- 2024 (JAN) ---
  { x: 7, income: 1.8, balance: 2.2, expenses: 0.15 }, { x: 10, income: 2.1, balance: 2.8, expenses: 0.20 }, { x: 12, income: 2.4, balance: 3.2, expenses: 0.18 },
  // --- APR 2024 ---
  { x: 13, income: 2.8, balance: 3.8, expenses: 0.22 }, { x: 16, income: 3.1, balance: 4.2, expenses: 0.25 }, { x: 18, income: 3.4, balance: 4.8, expenses: 0.28 },
  // --- JUL 2024 ---
  { x: 19, income: 3.2, balance: 5.2, expenses: 0.30 }, { x: 22, income: 2.8, balance: 5.5, expenses: 0.35 }, { x: 24, income: 2.5, balance: 5.8, expenses: 0.40 },
  // --- OCT 2024 ---
  { x: 25, income: 2.2, balance: 6.0, expenses: 0.42 }, { x: 28, income: 1.8, balance: 5.8, expenses: 0.44 }, { x: 30, income: 1.5, balance: 5.5, expenses: 0.447 },
  // --- 2025 (JAN) ---
  { x: 31, income: 1.2, balance: 5.2, expenses: 0.38 }, { x: 33, income: 1.0, balance: 4.8, expenses: 0.35 }, { x: 36, income: 0.8, balance: 4.2, expenses: 0.30 },
  // --- APR 2025 ---
  { x: 37, income: 1.1, balance: 3.8, expenses: 0.25 }, { x: 40, income: 1.4, balance: 3.2, expenses: 0.20 }, { x: 42, income: 1.8, balance: 2.5, expenses: 0.15 },
];

const xLabels = ["Oct", "2024", "Apr", "Jul", "Oct", "2025", "Apr"];

const Overview = () => {
  return (
    <div className="p-10">


      {/* Wrapped the Paper in a motion.div for entry animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Paper
          elevation={24}
          // Changed to rounded-3xl (28px) and border for consistency with Insights page
          className="p-8 border border-gray-100 shadow-[0_12px_40px_rgba(0,0,0,0.04)] transition-shadow  duration-300 hover:shadow-2xl"
          sx={{ width: '100%', overflow: 'hidden', borderRadius: '28px', bgcolor: 'white', '&:hover': { boxShadow: '0 6px 24px rgba(0,0,0,0.1)' } }}
        >
          <Box className="mb-8">
            <Typography className="text-slate-900 font-black text-3xl tracking-tighter">
              Overview
            </Typography>
            <Typography className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">
              Quarterly Running Balance Over The Year
            </Typography>
          </Box>

          <Box sx={{ width: '100%', height: 400 }}>
            <LineChart
              dataset={dataset}
              xAxis={[{
                dataKey: 'x',
                scaleType: 'point',
                valueFormatter: (x) => {
                  const labelMap = { 1: xLabels[0], 7: xLabels[1], 13: xLabels[2], 19: xLabels[3], 25: xLabels[4], 31: xLabels[5], 37: xLabels[6] };
                  return labelMap[x] || '';
                },
              }]}
              series={[
                {
                  dataKey: 'income',
                  label: 'Income (₹3.4L)',
                  color: '#3b82f6',
                  curve: 'catmullRom', // Smooth "wavy" curve
                  area: true,
                  showMark: false,
                },
                {
                  dataKey: 'balance',
                  label: 'Total Balance (₹6.0L)',
                  color: '#22c55e', // Green to match your Total Balance card
                  curve: 'catmullRom',
                  area: true,
                  showMark: false,
                },
                {
                  dataKey: 'expenses',
                  label: 'Expenses (₹44.7K)',
                  color: '#f43f5e',
                  curve: 'catmullRom',
                  showMark: false,
                },
              ]}
              // Configured the internal chart drawing animation
              skipAnimation={false}
              animation={{ duration: 1500 }}
              slotProps={{
                legend: {
                  direction: 'row',
                  position: { vertical: 'top', horizontal: 'right' },
                  labelStyle: { fill: '#94a3b8', fontSize: 12, fontWeight: '800' }
                }
              }}
              sx={{
                '.MuiLineElement-root': { strokeWidth: 2.5 }, // Slightly bolder lines
                '.MuiAreaElement-root': { fillOpacity: 0.08 },
                '.MuiChartsAxis-line': { display: 'none' },
                '.MuiChartsAxis-tick': { display: 'none' },
                '.MuiChartsAxis-tickLabel': { fill: '#94a3b8', fontSize: 11, fontWeight: 700 },
                // Interactive micro-interaction for legend items
                '.MuiChartsLegend-root': {
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': { opacity: 0.8 }
                }
              }}
              height={400}
              margin={{ left: 20, right: 20, top: 40, bottom: 40 }}
            />
          </Box>
        </Paper>
      </motion.div>
    </div>
  );
};

export default Overview;