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

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};



const data = [
    {
        title: 'Неотложная задача руководителей: как руководители компаний будут реагировать на новые реалии рецессии?',
        img: '79250266-a2ff-439b-bd2b-fa559d95dcb3.jpeg'
    },
    {
        title: 'Рост зарплат отстает от инфляции впервые за шесть лет',
        img: 'a40d8e95-0301-4206-96fc-25cd8e36ad91.jpeg'
    },
    {
        title: 'Путь углеродной нейтральности',
        img: 'd792f529-c33a-40b0-99be-f550324a6a08.jpeg'
    },
    {
        title: 'Неотложная задача руководителей: как руководители компаний будут реагировать на новые реалии рецессии?',
        img: '79250266-a2ff-439b-bd2b-fa559d95dcb3.jpeg'
    },
    {
        title: 'Рост зарплат отстает от инфляции впервые за шесть лет',
        img: 'a40d8e95-0301-4206-96fc-25cd8e36ad91.jpeg'
    },
    {
        title: 'Путь углеродной нейтральности',
        img: 'd792f529-c33a-40b0-99be-f550324a6a08.jpeg'
    }
]

export const HomeComponent = (props) => {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <div className={styles.wrap}>
            <Paper className={styles.background_wrap} sx={{ height: isMobile ? '320px' : '610px' }}>
                <Box className={styles.content} sx={{ pl: isMobile ? '5px' : '20px', pt: isMobile ? '60px' : '280px', pb: isMobile ? '10px' : '70px', }}>
                    <Container maxWidth={false}>
                        <Typography sx={{ width: isMobile ? '100%' : '45%', color: 'rgb(205,179,47)' }} variant={isMobile ? 'title1' : 'title2'} gutterBottom>
                        Исследование глобального лидерства в области кибербезопасности, проведенное EY в 2023 году
                        </Typography>
                        <Typography sx={{ width: isMobile ? '100%' : '45%', color: '#fff' }} variant={isMobile ? 'h5' : 'h3'} gutterBottom>
                        Является ли сложность вашей киберстратегии вашим самым большим риском?
                        </Typography>
                        <Typography sx={{ width: isMobile ? '100%' : '45%', color: '#fff' }} variant="body1" gutterBottom>
                        Глобальное исследование лидерства в области кибербезопасности, проведенное EY в 2023 году, показывает, как лидеры укрепляют защиту, создавая при этом ценность.
                        </Typography>
                    </Container>
                </Box>
            </Paper>
            {/* <BasicTabs/> */}
            <Container maxWidth={false}>
                <Typography sx={{ width: isMobile ? '100%' : '45%', my: 3 }} variant={isMobile ? 'h5' : 'h4'} gutterBottom>
                Блог: полезно знать
                </Typography>
                {/* <Grid container spacing={8}> */}

                <Carousel responsive={responsive}>
                {data.map((obj, index) => (
                             <Box sx={{height: isMobile ? '320px' : '610px' , position: 'relative', backgroundImage: `url(${obj.img})`, backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%', backgroundSize: 'cover',mr:2}}>
                                 <Box sx={{background:'linear-gradient(transparent,rgba(0,0,0,0.75))',position:'absolute',bottom:'0',left:'0',right:'0',top:'50%'}}></Box>
                                 <Box sx={{ position: 'absolute', left: 0, right: 0, bottom: 0,p:3.75 }}>
                                     <Typography sx={{ color: '#fff' }} variant={isMobile ? 'h6' : 'h6'} gutterBottom>
                                         {obj.title}
                                     </Typography>
                                     <Typography sx={{ color: '#fff' }}>
                                         Читать далее
                                     </Typography>
                                 </Box>
                             </Box>
                ))} 
                </Carousel>
             

                {/* </Grid> */}

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





                {/* <Grid container>
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
                </Grid> */}

            </Container>

        </div>

    )

}

function Item(props) {
    const isMobile = useMediaQuery('(max-width:600px)');
    return (
        <Box sx={{ height: isMobile ? '320px' : '610px', position: 'relative', backgroundImage: `url(${props.item.img})`, backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%', backgroundSize: 'cover' }}>
            <Box sx={{ background: 'linear-gradient(transparent,rgba(0,0,0,0.75))', position: 'absolute', bottom: '0', left: '0', right: '0', top: '50%' }}></Box>
            <Box sx={{ position: 'absolute', left: 0, right: 0, bottom: 0, p: 3.75 }}>
                <Typography sx={{ color: '#fff' }} variant={isMobile ? 'h6' : 'h6'} gutterBottom>
                    {props.item.title}
                </Typography>
                <Typography sx={{ color: '#fff' }}>
                    Читать далее
                </Typography>
            </Box>
        </Box>
    )
}




