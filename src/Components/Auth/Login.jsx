import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { TextField, Button, InputAdornment, IconButton, Paper } from '@mui/material';
import { motion } from 'framer-motion';
// Fixed: Changed Visibility/VisibilityOff to Eye/EyeOff
import { HandCoins, Eye, EyeOff, Lock, Mail } from 'lucide-react';

const Login = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
    };

    return (
        <Paper elevation={3} className="min-h-screen w-full flex items-center justify-center bg-[#f8fafc] relative overflow-hidden">
            <div className="min-h-screen w-full flex items-center justify-center bg-[#f8fafc] relative overflow-hidden">
                {/* Background Decorative Circles */}
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100 rounded-full blur-3xl opacity-60" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-3xl opacity-60" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-[450px] p-8 mx-4 bg-white/80 backdrop-blur-xl border border-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[2.5rem] z-10"
                >
                    {/* Logo Section */}
                    <div className="flex flex-col items-center mb-8">
                        <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200 mb-4">
                            <HandCoins className="text-white" size={32} />
                        </div>
                        <h1 className="text-3xl font-bold text-slate-900 font-mono">Finance</h1>
                        <p className="text-slate-500 mt-2 text-sm text-center">Please enter your details to sign in</p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        {/* Email Field */}
                        <TextField
                            fullWidth
                            onChange={(e) => setEmail(e.target.value)}
                            label="Email Address"
                            variant="outlined"
                            required
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Mail size={20} className="text-slate-400" />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '1.2rem',
                                    backgroundColor: '#fdfdfd',
                                }
                            }}
                        />

                        {/* Password Field */}
                        <TextField
                            fullWidth
                            type={showPassword ? "text" : "password"}
                            onChange={(e) => setPassword(e.target.value)}
                            label="Password"
                            variant="outlined"
                            required
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Lock size={20} className="text-slate-400" />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                            {/* Fixed: Using Eye/EyeOff icons here */}
                                            {showPassword ? <EyeOff size={20} className="text-slate-500" /> : <Eye size={20} className="text-slate-500" />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '1.2rem',
                                    backgroundColor: '#fdfdfd',
                                }
                            }}
                        />

                        {/* Submit Button */}
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    py: 2,
                                    borderRadius: '1.2rem',
                                    textTransform: 'none',
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    backgroundColor: '#000',
                                    '&:hover': { backgroundColor: '#4338ca' },
                                    boxShadow: '0 10px 15px -3px rgba(79, 70, 229, 0.3)'
                                }}
                            >
                                Sign In to Dashboard
                            </Button>
                        </motion.div>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-slate-500">
                            Don't have an account? <span className="text-black font-semibold cursor-pointer hover:underline">Request Access</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </Paper>
    );
};

export default Login;