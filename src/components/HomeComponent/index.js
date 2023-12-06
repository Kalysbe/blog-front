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
import CustomizedAccordions from '../ Questions/ Questions'
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

const services = [
    {
        title: 'Профессиональная экспертиза',
        text: 'Наши высококвалифицированные специалисты обладают обширным опытом в области финансов, налогообложения и законодательства. Мы гарантируем точность и соответствие всей финансовой документации требованиям законодательства, обеспечивая вашу безопасность и спокойствие.',
        icon: 'https://base-tailwind.preview.uideck.com/images/icon-04.svg'
    },
    {
        title: 'Эффективное управление налогами',
        text: 'Мы разрабатываем индивидуальные стратегии, направленные на оптимизацию налоговых обязательств вашей компании. Наши специалисты помогают минимизировать налоговые издержки, соблюдая все законодательные нормы.',
        icon: 'https://base-tailwind.preview.uideck.com/images/icon-05.svg'
    },
    {
        title: 'Оптимизация финансов',
        text: 'Мы проводим глубокий анализ финансовых процессов вашего предприятия, предлагая конкретные рекомендации по сокращению расходов и увеличению прибыли.',
        icon: 'https://base-tailwind.preview.uideck.com/images/icon-06.svg'
    },
    {
        title: 'Соблюдение законодательства',
        text: 'Наша компания всегда в курсе последних изменений в налоговом и бухгалтерском законодательстве. Мы гарантируем, что ваш бизнес полностью соответствует всем требованиям и нормативам.',
        icon: 'https://base-tailwind.preview.uideck.com/images/icon-05.svg'
    },
    {
        title: 'Экономия времени и ресурсов',
        text: 'Доверив нам ведение учета и налоговой отчетности, вы освобождаете свое время для стратегического развития бизнеса, а также экономите ресурсы, которые можно использовать более эффективно.',
        icon: 'https://base-tailwind.preview.uideck.com/images/icon-07.svg'
    },
    {
        title: 'Инновационные технологии и инструменты',
        text: 'Мы работаем с передовыми технологиями и программным обеспечением, чтобы обеспечить более точный и эффективный учет и анализ данных вашей компании.',
        icon: 'https://base-tailwind.preview.uideck.com/images/icon-06.svg'
    }
]



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
            <Paper className={styles.background_wrap} sx={{ height: isMobile ? '320px' : '610px', marginBottom: '100px' }}>
                <Container>
                <img className={styles.circle} src="https://base-tailwind.preview.uideck.com/images/shape-04.svg" />
                <img className={styles.woman}src="https://base-tailwind.preview.uideck.com/images/hero.png" />
                <Box className={styles.content} sx={{ pl: isMobile ? '5px' : '20px', pt: isMobile ? '60px' : '280px', pb: isMobile ? '10px' : '70px', }}>
                    <Container maxWidth={false}>
                        {/* <Typography sx={{ width: isMobile ? '100%' : '45%', color: 'rgb(205,179,47)' }} variant={isMobile ? 'title1' : 'title2'} gutterBottom>
                            Исследование глобального лидерства в области кибербезопасности, проведенное EY в 2023 году
                        </Typography>
                        <Typography sx={{ width: isMobile ? '100%' : '45%', color: '#fff' }} variant={isMobile ? 'h5' : 'h3'} gutterBottom>
                            Является ли сложность вашей киберстратегии вашим самым большим риском?
                        </Typography>
                        <Typography sx={{ width: isMobile ? '100%' : '45%', color: '#fff' }} variant="body1" gutterBottom>
                            Глобальное исследование лидерства в области кибербезопасности, проведенное EY в 2023 году, показывает, как лидеры укрепляют защиту, создавая при этом ценность.
                        </Typography> */}
                    </Container>
                </Box>
                </Container>
            </Paper>

            {/* <Container maxWidth={false}>
                <Typography sx={{ width: isMobile ? '100%' : '45%', my: 3 }} variant={isMobile ? 'h5' : 'h4'} gutterBottom>
                    Блог: полезно знать
                </Typography>

                <Carousel responsive={responsive}>
                    {data.map((obj, index) => (
                        <Box sx={{ height: isMobile ? '320px' : '610px', position: 'relative', backgroundImage: `url(${obj.img})`, backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%', backgroundSize: 'cover', mr: 2 }}>
                            <Box sx={{ background: 'linear-gradient(transparent,rgba(0,0,0,0.75))', position: 'absolute', bottom: '0', left: '0', right: '0', top: '50%' }}></Box>
                            <Box sx={{ position: 'absolute', left: 0, right: 0, bottom: 0, p: 3.75 }}>
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
            </Container> */}

            <Container>
                {/* <Paper sx={{ display: 'flex', flexDirection: isMobile ? 'column' : '', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgb(243 ,106, 141)', height: '72px', width: '72px', borderRadius: '100%', marginRight: '30px' }}>
                            <img src="https://base-tailwind.preview.uideck.com/images/icon-01.svg" />
                        </span>
                        <div style={{ width: '220px' }}>
                            <Typography variant={isMobile ? 'h6' : 'h6'} gutterBottom>24/7 поддержка</Typography>
                            <Typography variant='title1' sx={{ color: 'rgb(121, 128, 138)' }} gutterBottom>Lorem ipsum dolor sit amet conse adipiscing elit.</Typography>
                        </div>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgb(32, 202, 102)', height: '72px', width: '72px', borderRadius: '100%', marginRight: '30px' }}>
                            <img src="https://base-tailwind.preview.uideck.com/images/icon-02.svg" />
                        </span>
                        <div style={{ width: '220px' }}>
                            <Typography variant={isMobile ? 'h6' : 'h6'} gutterBottom>Берем на себя ответственность</Typography>
                            <Typography variant='title1' gutterBottom>Lorem ipsum dolor sit amet conse adipiscing elit.</Typography>
                        </div>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgb(250 ,145 ,97 )', height: '72px', width: '72px', borderRadius: '100%', marginRight: '30px' }}>
                            <img src="https://base-tailwind.preview.uideck.com/images/icon-03.svg" />
                        </span>
                        <div style={{ width: '220px' }}>
                            <Typography variant={isMobile ? 'h6' : 'h6'} gutterBottom>Профессиональная команда</Typography>
                            <Typography variant='title1' gutterBottom>Lorem ipsum dolor sit amet conse adipiscing elit.</Typography>
                        </div>
                    </Box>
                </Paper> */}
                <Paper sx={{ display: 'flex', mt: 15 }}>
                    <Box sx={{ display: isMobile ? 'none' : 'flex', alignItems: 'center', mr: 8 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <img style={{ marginBottom: '30px', marginRight: '30px' }} src="https://base-tailwind.preview.uideck.com/images/about-01.png" />
                            <img style={{ marginRight: '30px' }} src="https://base-tailwind.preview.uideck.com/images/about-02.png" />
                        </Box>
                        <Box>
                            <img src="https://base-tailwind.preview.uideck.com/images/about-03.png" />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography variant='h6' sx={{ fontWeight: '600' }} color="rgb(78 ,107 ,255)">Почему выбирают нас</Typography>
                        <Typography variant='h4' sx={{ fontWeight: '700', my: 2 }}>Мы делаем наших клиентов успешными, предоставляя лучшие услуги.</Typography>
                        <Typography variant='title2'>Давно установленный факт, что читатель будет отвлекаться на читаемое содержимое страницы, когда смотрит на ее макет. Смысл использования </Typography>
                    </Box>
                </Paper>
                <Paper sx={{ mt: 10, mb: 4 }}>
                    <Typography variant='h4' sx={{ mt: 4, mb: 2, fontWeight: 600,textAlign:'center' }}>Мы предлагаем лучшее качество обслуживания
                        <br /> для вас
                    </Typography>
                    <Typography sx={{ textAlign: 'center', color: 'rgb(121, 128, 138 )' }} variant='subtitle2'>Наша цель - обеспечить выдающееся качество обслуживания. Мы нацелены на превосходство в каждой детали работы и стремимся превзойти ожидания клиентов.</Typography>
                </Paper>
                <Grid container spacing={2}>
                    {services.map((service) => (
                        <Grid item xs={12} md={4}>
                            <Paper sx={{p:4,background:'#fff'}} elevation={3}>
                                <img src={service.icon} />
                                <Typography variant='h5' sx={{ mt: 4, mb: 2, fontWeight: 600 }}>{service.title}</Typography>
                                <Typography variant='subtitle2' sx={{ color: 'rgb(121, 128, 138)' }}>{service.text}</Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
                <CustomizedAccordions/>
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




