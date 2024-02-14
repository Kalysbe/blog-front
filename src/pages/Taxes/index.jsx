import { useState, useEffect } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Grid, Typography, Box, Container } from '@mui/material';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 120,
    height: 120,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
  }));
export const TaxMenu = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                <Stack direction="row" spacing={2}>
                <DemoPaper variant="elevation">default variant</DemoPaper>
      <DemoPaper variant="outlined">outlined variant</DemoPaper>
                </Stack>
                </Grid>
            </Grid>
        </Container>
    )
}