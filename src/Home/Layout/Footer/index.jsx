import { Container, Divider, Grid, Paper, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { FaYoutube, FaInstagramSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';

const socialIconStyle = {
    marginRight: '0.5rem',
    transition: 'color 0.3s ease', // Smooth transition for color change
};

const socialIconHoverStyle = {
    color: 'blue', // Change to desired hover color
};

const Footer = () => {
    return (
        <Paper
            sx={{
                width: '100%'
            }}
        >
            <Container sx={{ mt: 5 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={4} md={4}>
                        <Typography variant="h6" fontWeight={'600'}>Location</Typography>
                        <Stack spacing={2} my={3}>
                            <Typography variant="h6" style={{ display: 'flex', alignItems: 'center' }}>
                                {`6611 Al Huda St - Ash Sharafiyah District, Jeddah 23216 - 2779, Saudi Arabia`}
                            </Typography>
                            <Stack direction="row" spacing={2}>
                                <Link to="https://www.youtube.com/" style={{ ...socialIconStyle }}>
                                    <FaYoutube />
                                </Link>
                                <Link to="https://www.instagram.com/" style={{ ...socialIconStyle }}>
                                    <FaInstagramSquare />
                                </Link>
                                <Link to="https://twitter.com/" style={{ ...socialIconStyle }}>
                                    <FaTwitterSquare />
                                </Link>
                                <Link to="https://twitter.com/" style={{ ...socialIconStyle }}>
                                    <FaLinkedin />
                                </Link>
                                {/* Add more social media icons as needed */}
                            </Stack>
                        </Stack>
                    </Grid>

                    <Grid item xs={6} sm={4} md={4}>
                        <Typography variant="h6" fontWeight={'600'}>Quick links</Typography>

                        <Stack spacing={2} my={3}>
                            <Link to={"#"}>List One</Link>
                            <Link to={"#"}>List Two</Link>
                            <Link to={"#"}>List Three</Link>
                        </Stack>
                    </Grid>

                    <Grid item xs={6} sm={4} md={4}>
                        <Typography variant="h6" fontWeight={'600'}>For business queries</Typography>

                        <Stack spacing={2} my={3}>
                            <Typography variant="h6" style={{ display: 'flex', alignItems: 'center' }}>
                                <IoMdMail style={{ marginRight: '0.5rem' }} /> musamajutt3232@gmail.com
                            </Typography>
                            <Typography variant="h6" style={{ display: 'flex', alignItems: 'center' }}>
                                <IoMdMail style={{ marginRight: '0.5rem' }} /> er.surajkumar1999@gmail.com
                            </Typography>
                            <Typography variant="h6" style={{ display: 'flex', alignItems: 'center' }}>
                                <FaPhone style={{ marginRight: '0.5rem' }} /> +96 650 304 1795
                            </Typography>
                            <Typography variant="h6" style={{ display: 'flex', alignItems: 'center' }}>
                                <FaPhone style={{ marginRight: '0.5rem' }} /> +96 650 304 1795
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
                <Divider />
                <Copyright sx={{ p: 4 }} />
            </Container>
        </Paper>
    )
}

export default Footer
function Copyright(props) {
    return (
        <Typography variant="body1" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" to="https://www.linkedin.com/in/er-suraj-kumar-69882a292/">
                Er Suraj Kumar
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}