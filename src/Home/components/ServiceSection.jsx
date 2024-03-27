import { Box, Button, Grid, Paper, Stack, Typography } from '@mui/material'
import { useState } from 'react'
const ServiceSection = () => {
    const services = [
        { id: 1, name: "Website/App Development", description: "Elevate your online presence with our custom website and mobile app development services. From concept to launch, our experienced team works closely with you to create user-centric digital solutions that captivate audiences and achieve your business objectives. Whether you need a corporate website, e-commerce platform, or mobile application, we have the expertise to bring your vision to life." },
        { id: 2, name: "SaaS Solutions", description: "Unlock the full potential of your business with our scalable Software as a Service (SaaS) solutions. Our team specializes in developing cloud-based software applications that streamline operations, enhance collaboration, and drive efficiency. Whether you're in need of a CRM system, project management tool, or HR software, we design and deploy tailored solutions to meet your specific requirements." },
        { id: 3, name: "AI Chatbot Integration", description: "Enhance customer engagement and support with our AI-powered chatbot solutions. Our intelligent chatbots leverage machine learning and natural language processing technologies to provide personalized assistance, automate routine tasks, and deliver round-the-clock support. Whether it's answering FAQs, scheduling appointments, or processing orders, our chatbots are designed to deliver seamless and efficient interactions, driving customer satisfaction and loyalty." },
        { id: 4, name: "Landing Page Design", description: "Maximize your marketing efforts and drive conversions with compelling landing pages designed to captivate and convert visitors. Our team of designers creates visually stunning and strategically optimized landing pages that effectively communicate your message, highlight key offerings, and encourage action. Whether you're launching a new product, promoting a special offer, or driving traffic to your website, our landing page designs are tailored to drive results and achieve your goals." },
        { id: 5, name: "UI/UX Design", description: "Deliver exceptional user experiences with our UI/UX design services. We believe that great design is more than just aesthetics – it's about creating intuitive, engaging, and delightful experiences for your users. Our team of designers combines creativity with usability to craft interfaces that are not only visually appealing but also functional and user-friendly. Whether you're designing a website, mobile app, or software interface, we ensure that every interaction is intuitive, seamless, and memorable." },
        { id: 6, name: "ABC", description: "These are the props that are used to directly customize the Carousel's default button These are the props that are used to directly customize the Carousel's default button These are the props that are used to directly customize the Carousel's default button" },
    ]
    return (
        <Box py={5} display={`flex`} flexDirection={`column`} alignItems={`center`}>
            <Typography variant="h4" fontWeight={`500`} color={`black`} fontFamily={'Rubik'}>
                Our Services
            </Typography>

            <Grid container spacing={3} my={2} justifyContent="center">
                {services.length > 0 && services.map((service) => (
                    <Grid key={service.id} item xs={12} sm={6} md={4}>
                        <Paper
                            sx={{
                                padding: 3,
                                width: '100%',
                                borderRadius: 4,
                                overflow: 'hidden',
                                transition: 'transform 0.3s ease',
                                position: 'relative',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    zIndex: 2,
                                    border: '1px solid #c3b3b3'
                                },
                            }}
                        >
                            <Stack spacing={3}>
                                <Typography sx={{
                                    height: '150px',
                                    width: '100%',
                                }}>
                                    <img height={'100%'} width={'100%'} src='https://jamtechtechnologies.com/assets/images/index-images/IT%20webservices.webp' />
                                </Typography>
                                <Typography variant="h5" >{service.name}</Typography>
                                <Typography sx={{ textAlign: 'justify' }} variant="body2">{service.description}</Typography>
                                <Button variant="contained" color="secondary">Get More Informetion</Button>
                            </Stack>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}
const ServiceCard = ({ service }) => {
    const [showFullContent, setShowFullContent] = useState(false);

    const truncatedDescription = service.description.split(' ').slice(0, 30).join(' ');
    const fullDescription = service.description;

    const handleShowMore = () => {
        setShowFullContent(true);
    };

    return (
        <Paper
            sx={{
                padding: 3,
                width: '100%',
                borderRadius: 4,
                overflow: 'hidden',
                transition: 'transform 0.3s ease',
                position: 'relative',
                '&:hover': {
                    transform: 'scale(1.05)',
                    zIndex: 2,
                    border: '1px solid #c3b3b3'
                },
            }}
        >
            <Stack spacing={3}>
                <Typography sx={{ textAlign: 'justify' }} variant="body2">
                    {showFullContent ? fullDescription : truncatedDescription}
                </Typography>
                {!showFullContent && (
                    <Button variant="contained" color="secondary" onClick={handleShowMore}>
                        Show More
                    </Button>
                )}
            </Stack>
        </Paper>
    );
};

export default ServiceSection