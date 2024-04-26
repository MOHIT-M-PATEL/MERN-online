import React, { useState } from 'react';
import {
    TextField,
    Button,
    CardContent,
    CardActions,
    Typography,
    IconButton, // Import IconButton from MUI for the visibility toggle button
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material'; // Import icons for password visibility toggle

const LoginForm = ({ username, password, setUsername, setPassword, handleLogin }) => {
    const [showPassword, setShowPassword] = useState(false); // State variable for password visibility

    const togglePasswordVisibility = () => {
        setShowPassword(prevShow => !prevShow); // Toggle password visibility
    };

    return (
        <div style={{
            border: '1px solid',
            borderRadius: 5,
            padding: 20,
            boxShadow: '1 2px 8px rgba(0, 0, 0, 0.15)',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            maxWidth: 350,
        }}>
            <form onSubmit={handleLogin}>
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        Login for Delicious Pizzas!!
                    </Typography>
                    <TextField
                        required
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        required
                        label="Password"
                        type={showPassword ? 'text' : 'password'} // Conditionally set input type based on visibility
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        margin="normal"
                        InputProps={{ // Add InputProps to include the visibility toggle button
                            endAdornment: (
                                <IconButton onClick={togglePasswordVisibility} edge="end">
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            ),
                        }}
                    />
                </CardContent>
                <CardActions sx={{
                    paddingTop: 1,
                }}>
                    <Button fullWidth type='submit' variant="contained">
                        Login
                    </Button>
                </CardActions>
            </form>
            <CardActions sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: 5,
            }}>
                <Typography variant="body1">Don't have an Account?</Typography>
                <Button component={Link} to="/signup">
                    Signup
                </Button>
            </CardActions>
        </div>
    );
};

export default LoginForm;
