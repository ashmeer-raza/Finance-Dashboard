import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, MenuItem, Box } from '@mui/material';

const AddTransactionModal = ({ open, handleClose, onAdd, editData }) => {
    const [formData, setFormData] = useState({
        title: '', amount: '', type: 'expense', category: 'Shopping', date: '2026-04-05'
    });

    // Pre-fill form if editing
    useEffect(() => {
        if (editData) {
            setFormData({
                ...editData,
                amount: Math.abs(editData.amount) // Keep amount positive for the input field
            });
        } else {
            setFormData({ title: '', amount: '', type: 'expense', category: 'Shopping', date: '2026-04-05' });
        }
    }, [editData, open]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        if (!formData.title || !formData.amount) return;

        onAdd({
            ...formData,
            id: editData ? editData.id : Date.now(),
            amount: formData.type === 'expense' ? -Math.abs(formData.amount) : Math.abs(formData.amount)
        });
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
            <DialogTitle sx={{ fontWeight: 600 }}>{editData ? 'Edit Transaction' : 'Add Transaction'}</DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
                    <TextField label="Title" name="title" value={formData.title} fullWidth onChange={handleChange} />
                    <TextField label="Amount" name="amount" type="number" value={formData.amount} fullWidth onChange={handleChange} />
                    <TextField select label="Type" name="type" value={formData.type} fullWidth onChange={handleChange}>
                        <MenuItem value="income">Income</MenuItem>
                        <MenuItem value="expense">Expense</MenuItem>
                    </TextField>
                    <TextField select label="Category" name="category" value={formData.category} fullWidth onChange={handleChange}>
                        <MenuItem value="Shopping">Shopping</MenuItem>
                        <MenuItem value="Investment">Investment</MenuItem>
                        <MenuItem value="Health">Health</MenuItem>
                        <MenuItem value="Salary">Salary</MenuItem>
                    </TextField>
                    <TextField label="Date" name="date" type="date" value={formData.date} fullWidth onChange={handleChange} InputLabelProps={{ shrink: true }} />
                </Box>
            </DialogContent>
            <DialogActions sx={{ p: 3 }}>
                <Button onClick={handleClose} color="inherit">Cancel</Button>
                <Button variant="contained" onClick={handleSubmit} sx={{ bgcolor: '#6366f1' }}>Save</Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddTransactionModal;