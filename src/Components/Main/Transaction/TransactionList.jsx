import React, { useState, useEffect } from 'react';
import { Box, Typography, Chip, TextField, MenuItem, Button } from '@mui/material';
// Ensure this path matches your folder structure
import TransactionItem from './TransactionItem';
import AddTransactionModal from './AddTransaction';
import { transactions as initialData } from '../../../Data/TransactionData';

const TransactionList = () => {
    const [txnList, setTxnList] = useState(() => {
        const savedData = localStorage.getItem('fintrack_transactions');
        return savedData ? JSON.parse(savedData) : initialData;
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editItem, setEditItem] = useState(null);

    // Filter States
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedType, setSelectedType] = useState("All Types");
    const [selectedCategory, setSelectedCategory] = useState("All Categories");

    useEffect(() => {
        localStorage.setItem('fintrack_transactions', JSON.stringify(txnList));
    }, [txnList]);

    // Auto-generate categories for the dropdown menu
    const categories = ["All Categories", ...new Set(txnList.map(item => item.category))];

    // Filter Logic
    const filteredTransactions = txnList.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesType = selectedType === "All Types" || item.type === selectedType.toLowerCase();
        const matchesCategory = selectedCategory === "All Categories" || item.category === selectedCategory;
        return matchesSearch && matchesType && matchesCategory;
    });

    const handleDelete = (id) => {
        setTxnList(txnList.filter(item => item.id !== id));
    };

    const handleEditClick = (item) => {
        setEditItem(item);
        setIsModalOpen(true);
    };

    const handleSaveTransaction = (newTxn) => {
        if (editItem) {
            setTxnList(txnList.map(item => item.id === editItem.id ? newTxn : item));
            setEditItem(null);
        } else {
            setTxnList([newTxn, ...txnList]);
        }
    };

    return (
        <Box sx={{ p: 4, bgcolor: '#fafafa', minHeight: '100vh' }}>
            {/* Header Area */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4, alignItems: 'center' }}>
                <Typography variant="h5" sx={{ fontWeight: 600, color: '#1e293b' }}>Transactions</Typography>
                <Button
                    variant="contained"
                    onClick={() => setIsModalOpen(true)}
                    sx={{
                        bgcolor: '#6366f1',
                        borderRadius: '12px',
                        textTransform: 'none',
                        fontWeight: 'bold',
                        '&:hover': { bgcolor: '#4f46e5' }
                    }}
                >
                    Add Transaction
                </Button>
            </Box>

            {/* Filter Bar */}
            <Box sx={{ display: 'flex', gap: 2, mb: 4, bgcolor: '#fff', p: 2, borderRadius: '16px', border: '1px solid #f1f5f9' }}>
                <TextField
                    size="small"
                    placeholder="Search transactions..."
                    sx={{ flexGrow: 1 }}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <TextField
                    size="small"
                    select
                    value={selectedType}
                    sx={{ width: 150 }}
                    onChange={(e) => setSelectedType(e.target.value)}
                >
                    <MenuItem value="All Types">All Types</MenuItem>
                    <MenuItem value="Income">Income</MenuItem>
                    <MenuItem value="Expense">Expense</MenuItem>
                </TextField>

                <TextField
                    size="small"
                    select
                    value={selectedCategory}
                    sx={{ width: 150 }}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    {categories.map(cat => (
                        <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                    ))}
                </TextField>
            </Box>

            {/* The List - Passing props correctly to match TransactionItem.jsx */}
            <Box>
                {filteredTransactions.map(item => (
                    <TransactionItem
                        key={item.id}
                        item={item}
                        onEdit={() => handleEditClick(item)}
                        onDelete={() => handleDelete(item.id)}
                    />
                ))}

                {/* Empty State */}
                {filteredTransactions.length === 0 && (
                    <Box sx={{ textAlign: 'center', py: 10 }}>
                        <Typography sx={{ color: '#94a3b8', fontStyle: 'italic' }}>
                            No transactions found matching your filters.
                        </Typography>
                    </Box>
                )}
            </Box>

            <AddTransactionModal
                open={isModalOpen}
                handleClose={() => { setIsModalOpen(false); setEditItem(null); }}
                onAdd={handleSaveTransaction}
                editData={editItem}
            />
        </Box>
    );
};

export default TransactionList;