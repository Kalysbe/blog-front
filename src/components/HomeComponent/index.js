import React from 'react';
import styles from './HomeComponent.module.scss';
import Box from '@mui/material/Box';

import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';

import BasicTabs from '../Tab';



export const HomeComponent = (props) => {
   

    return (
        <div className={styles.wrap}>
            <div className={styles.background_wrap}>
                <div className={styles.content}>
                    <h2>Стратегии для успешного корпоративного разделения </h2>
                    <p>Совместное исследование EY и Goldman Sachs показало, что разделение корпорации служит катализатором трансформации и роста.</p>
                </div>
                <img className={styles.background_img} src='https://catherineasquithgallery.com/uploads/posts/2023-01/1674366370_catherineasquithgallery-com-p-serii-fon-abstraktnii-foto-204.jpg' />
            </div>
           {/* <BasicTabs/> */}
           <Container maxWidth={false}>
            <h2>Блог: полезно знать</h2>
            <Box>
                <div>
                    <h3>Стратегия и сделки</h3>
                    <p>
                    EY поможет справиться с кризисом и сделать ваш бизнес устойчивым в краткосрочной перспективе. Мы помогаем организациям сориентироваться в условиях спада и восстановить бизнес или рассмотреть новые пути развития, а также обеспечить трансформацию посредством корпоративной стратегии и сделок M&A и продажи активов.
                    </p>
                    <Button variant="outlined" color="primary">
                        Подробнее
                    </Button>
                </div>
            </Box>
           </Container>
         
        </div>

    )
}




