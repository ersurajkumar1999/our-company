import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import { loginSchema } from '../../schemas/FormSchemas';
import {
    Avatar, Typography, Grid, Button, IconButton, TextField, Checkbox,
    Container, FormControlLabel, CircularProgress, Box
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { userLogin } from '../../services/ApiService';
import { SuccessMessage, ErrorMessage } from '../../components/common/alertMessages';
import { login } from '../../store/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setErrorMessage, setSuccessMessage } from '../../store/slices/alertMessageSlice';
import LoginWithGoogle from './LoginWithGoogle';
const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { success, error } = useSelector((state) => state.alert);

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const initialValues = {
        email: "devsuraj@gmail.com",
        password: "devsuraj@",
        rememberMe: false,
    };
    const {
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        touched, isSubmitting,
        values, resetForm
    } = useFormik({
        initialValues,
        validationSchema: loginSchema,
        onSubmit: async (values, { setSubmitting }) => {
            const data = {
                email: values.email,
                password: values.password,
                rememberMe: values.rememberMe
            };
            try {
                setSubmitting(true);
                const response = await userLogin(data);
                // This is check Only Api Response 
                if (!response.status) {
                    dispatch(setErrorMessage(response.data.message));
                    return;
                }
                if (!response.data.status) {
                    dispatch(setErrorMessage(response.data.message));
                    return;
                }
                dispatch(setSuccessMessage(response?.data?.message));
                resetForm();
                dispatch(login(response.data.data ?? null));
                navigate('/dashboard');
            } catch (error) {
                dispatch(setErrorMessage("Something is Wrong: error"+ error));
            } finally {
                setSubmitting(false);
            }
        },
    });

    return (
        <Container component="main" maxWidth="sm" >
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    boxShadow: 3,
                    borderRadius: 2,
                    px: 4,
                    py: 6,
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <LoginWithGoogle />
                {success && <SuccessMessage />}
                {error && <ErrorMessage />}
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        id="email"
                        type="email"
                        value={values.email}
                        name="email"
                        color='secondary'
                        onChange={handleChange}
                        label="Email Address / Username"
                        fullWidth
                        required
                        error={touched.password && !!errors.email}
                        helperText={touched.password && errors.email}
                        disabled={isSubmitting}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        id="password"
                        color='secondary'
                        type={showPassword ? 'text' : 'password'}
                        value={values.password}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={touched.email && !!errors.password}
                        helperText={touched.email && errors.password}
                        disabled={isSubmitting}
                        InputProps={{
                            endAdornment: (
                                <IconButton color='secondary' onClick={togglePasswordVisibility} disableRipple>
                                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                </IconButton>
                            ),
                        }}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                value={values.rememberMe}
                                onChange={handleChange}
                                name="rememberMe"
                                color="secondary"
                                disabled={isSubmitting}
                            />
                        }
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? <CircularProgress size={24} /> : 'Sign In'}
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link to="/auth/forgot-password" style={{ textDecoration: 'none' }}>
                                <Typography variant='body2'>
                                    Forgot password?
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/auth/signup" style={{ textDecoration: 'none' }}>
                                <Typography variant='body2'>
                                    {"Don't have an account? Sign Up"}
                                </Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}

export default LoginPage;
