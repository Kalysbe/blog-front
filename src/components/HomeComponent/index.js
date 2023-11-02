import React from 'react';
import styles from './HomeComponent.module.scss';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from '@mui/material';
import Paper from '@mui/material/Paper';
import BasicTabs from '../Tab';


import Marquee from "react-fast-marquee";



export const HomeComponent = (props) => {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <div className={styles.wrap}>
            <Paper className={styles.background_wrap} >
                <Box className={styles.content} sx={{ pl: isMobile ? '5px' : '20px', pt: isMobile ? '60px' : '280px', pb: isMobile ? '10px' : '70px', }}>
                    <Container maxWidth={false}>
                        <Typography sx={{ width: isMobile ? '100%' : '45%', color: 'rgb(205,179,47)' }} variant={isMobile ? 'h5' : 'h3'} gutterBottom>
                            Стратегии для успешного корпоративного разделения
                        </Typography>
                        <Typography sx={{ width: isMobile ? '100%' : '45%', color: '#000' }} variant="body1" gutterBottom>
                            Совместное исследование EY и Goldman Sachs показало, что разделение корпорации служит катализатором трансформации и роста.
                        </Typography>
                    </Container>
                </Box>
            </Paper>
            {/* <BasicTabs/> */}
            <Container >
                {/* <Grid container spacing={2}>
                    <Grid item sm={12} md={6}>
                        <Box sx={{ pl: isMobile ? 0 : 15, pt: isMobile ? 2 : 10, pr: isMobile ? 0 : 22.5 }}>
                            <Typography sx={{color:'rgb(205,179,47)'}} variant={isMobile ? 'h5' : 'h4'} color="primary" gutterBottom>
                                Стратегия и сделки
                            </Typography>
                            <p>
                                EY поможет справиться с кризисом и сделать ваш бизнес устойчивым в краткосрочной перспективе. Мы помогаем организациям сориентироваться в условиях спада и восстановить бизнес или рассмотреть новые пути развития, а также обеспечить трансформацию посредством корпоративной стратегии и сделок M&A и продажи активов.
                            </p>
                            <Button variant="outlined" sx={{minWidth: isMobile ? '100%' : '64px'}} color="primary">
                                Подробнее
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Box sx={{ pl: isMobile ? 0 : 15, pt: isMobile ? 2 : 10, pr: isMobile ? 0 : 22.5 }} sm={{ pl: 0 }}>
                            <Typography sx={{color:'rgb(205,179,47)'}} variant={isMobile ? 'h5' : 'h4'}  gutterBottom>
                                Стратегическое консультирование, EY-Parthenon
                            </Typography>

                            <p>Консультанты EY-Parthenon помогают при создании долгосрочной стоимости бизнеса. Если вас интересует стратегия роста или дифференциации, M&A и другие направления стратегии, EY поможет вам.</p>
                            <Button variant="outlined" sx={{minWidth: isMobile ? '100%' : '64px'}} >
                                Подробнее
                            </Button>
                        </Box>
                    </Grid>
                </Grid> */}
            
                <Typography sx={{ width: isMobile ? '100%' : '45%', }} variant={isMobile ? 'h5' : 'h4'} gutterBottom>
                          Наши клиенты
                        </Typography>
                <Marquee>
                    <Stack
                        sx={{ mt:2, mb: 4 }}
                        direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                        spacing={8}
                    >
                        <img src="./companies/1.png" />
                        <img src="./companies/2.png" />
                        <img src="./companies/3.png" />
                        <img src="./companies/4.png" />
                        <img src="./companies/5.png" />
                        <img src="./companies/6.png" />
                    </Stack>
                </Marquee>
                

                <Grid container>
                    <Grid item sm={12} md={6}>
                        <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                            <Typography sx={{ color: '#2e2e38' }} variant={isMobile ? 'h5' : 'h4'} color="primary" gutterBottom>
                                Академия бизнеса ADB Solution
                            </Typography>
                            <p>Открытые и корпоративные тренинги для развития личной эффективности. </p>
                            <Button variant="outlined" sx={{ minWidth: isMobile ? '100%' : '64px', maxWidth: isMobile ? '100%' : '30%', color: '#000', borderColor: '#000' }} >
                                Узнать больше
                            </Button>
                        </Box>

                    </Grid>
                    <Grid item sm={12} md={6}>
                        <img style={{ maxHeight: '560px' }} src='https://assets.ey.com/content/dam/ey-sites/ey-com/ru_ru/topics/advisory/ey-business-academy-promo-banner-image.jpg.rendition.3840.2560.jpg' />
                    </Grid>
                </Grid>
             
            </Container>

        </div>

    )
}




