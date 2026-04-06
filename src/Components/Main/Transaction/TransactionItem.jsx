import React from 'react';
import { Box, Typography, Avatar, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// Changed { transaction } to { item } to match the parent prop name
const TransactionItem = ({ item, onEdit, onDelete }) => {

    // 1. THE BODYGUARD - Ensures the component doesn't crash if item is missing
    if (!item || !item.title) {
        return null;
    }

    // 2. LOGIC - Use 'item' instead of 'transaction'
    const isIncome = item.type === "income";

    return (
        <Box sx={{
            display: 'flex', alignItems: 'center', p: 2.5, mb: 2,
            borderRadius: '16px', border: '1px solid #f1f5f9',
            boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
            transition: 'transform 0.2s',
            '&:hover': { transform: 'scale(1.01)', borderColor: '#e2e8f0' }
        }}>
            {/* Avatar showing first letter */}
            <Avatar sx={{
                bgcolor: isIncome ? '#f0fdf4' : '#fef2f2',
                color: isIncome ? '#22c55e' : '#f43f5e',
                mr: 2,
                fontWeight: 'bold',
                fontSize: '1rem'
            }}>
                {item.title.charAt(0)}
            </Avatar>

            <Box sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle2" fontWeight="600" sx={{ color: '#1e293b' }}>
                    {item.title}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    {item.date}
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 3 } }}>
                <Typography variant="caption" sx={{
                    px: 1.5, py: 0.5, borderRadius: '6px',
                    bgcolor: '#f1f5f9', fontWeight: 600, color: `${isIncome ? '#22c55e' : '#f43f5e'}`,
                    display: { xs: 'none', sm: 'block' }
                }}>
                    {item.category}
                </Typography>

                <Typography variant="subtitle1" fontWeight="700" color={isIncome ? '#22c55e' : '#f43f5e'} sx={{ minWidth: '80px', textAlign: 'right' }}>
                    {isIncome ? '+' : '-'}₹{Math.abs(item.amount).toLocaleString()}
                </Typography>

                <Box>
                    <IconButton size="small" onClick={onEdit} sx={{ color: '#6366f1' }}>
                        <EditIcon sx={{ fontSize: 18 }} />
                    </IconButton>
                    <IconButton size="small" onClick={onDelete} sx={{ color: '#f43f5e' }}>
                        <DeleteIcon sx={{ fontSize: 18 }} />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default TransactionItem;