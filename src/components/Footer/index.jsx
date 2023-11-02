import React from 'react';
import { Link } from 'react-router-dom'

import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
// import Item from '@mui/material/Item';
import styles from './Footer.module.scss';


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import WhatsApp from '@mui/icons-material/WhatsApp';
import Telegram from '@mui/icons-material/Telegram';
import Phone from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import Instagram from '@mui/icons-material/Instagram';
import Facebook from '@mui/icons-material/Facebook';
import Linkedin from '@mui/icons-material/LinkedIn';


const drawerWidth = 240;


export const Footer = (props) => {

    return (
        <Container>
            <Grid container>
                <Grid item sm={12} md={4}>
                    <img src="logo.png" alt="" />
                    <Stack
                        direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                        spacing={2}
                    >
                        <Instagram/>
                        <Facebook/>
                        <Linkedin/>
                    </Stack>
                </Grid>
                <Grid item sm={12} md={4}>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <WhatsApp sx={{fill:'rgb(56, 158, 13)'}}/>
                                </ListItemIcon>
                                WhatsApp
                                <br />
                                +996 (500) 177 009
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Telegram sx={{fill:'rgb(64, 179, 224)'}} />
                                </ListItemIcon>
                                Telegram <br />
                                rakhmanberdiev.k
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Phone />
                                </ListItemIcon>
                                Телефон <br />
                                +996 (312) 00 00 00
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item sm={12} md={4}>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <LocationOnIcon />
                                </ListItemIcon>
                                Центральный офис
                                <br />
                                ул. Московская, 172 Бишкек, Кыргызстан
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <EmailIcon />
                                </ListItemIcon>
                                Коммерческое предложение <br />
                                kse@gmail.com
                            </ListItemButton>
                        </ListItem>
                        {/* <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Phone />
                                </ListItemIcon>
                                Телефон <br/>
                                +996 (312) 00 00 00
                            </ListItemButton>
                        </ListItem> */}
                    </List>
                </Grid>
            </Grid>
        </Container>
    )
};



