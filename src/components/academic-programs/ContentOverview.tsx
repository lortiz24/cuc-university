import React from 'react'
import { Grid, List, ListItem, ListItemIcon, Typography, ListItemText, Box } from '@mui/material'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { ProgramItem } from '@/interfaces';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';



interface Props {
    program: ProgramItem
}
export const ContentOverview = ({ program }: Props) => {
    return (
        <Grid
            container
            width={'70%'}
            paddingLeft={2}
            paddingY={{ xs: 5, sm: 5 }}
            display={'flex'}
            justifyContent={'center'}
            flexDirection={'column'}
            alignItems={'center'}
        // sx={{ backgroundColor: 'red' }}
        >
            <Grid
                item
                xs={12}
            >
                <Typography
                    variant='h1'
                    color={'#FFFFFF'}
                    fontWeight={500}
                    fontSize={{ xs: 25, sm: 42, xl: 40 }}
                    textAlign={'start'}
                >
                    Overview
                </Typography>
                <List>
                    <ListItem sx={{ py: 0.3 }}>
                        <ListItemIcon>
                            <AccessTimeOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                    <Typography
                                        variant="body1"
                                        fontWeight={400}
                                        color={'#FFFFFF'}
                                        fontSize={{ xs: 23 }}
                                    >
                                        {'Duration:' + ' '}
                                    </Typography>
                                    <Typography variant="body1" component="span" sx={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}>
                                        {' '}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        component="span"
                                        fontWeight={200}
                                        color={'#FFFFFF'}
                                        fontSize={{ xs: 23 }}
                                    >
                                        {' ' + `${program.overView.duration.value} ${program.overView.duration.unidad} (${program.overView.durationSemesters.value} ${program.overView.durationSemesters.unidad})`}
                                    </Typography>
                                </Box>
                            }
                        />
                    </ListItem>
                    <ListItem sx={{ py: 0.3 }}>
                        <ListItemIcon>
                            <StorageOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                    <Typography
                                        variant="body1"
                                        fontWeight={400}
                                        color={'#FFFFFF'}
                                        fontSize={{ xs: 23 }}
                                    >
                                        {'Credits:' + ' '}
                                    </Typography>
                                    <Typography variant="body1" component="span" sx={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}>
                                        {' '}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        component="span"
                                        fontWeight={200}
                                        color={'#FFFFFF'}
                                        fontSize={{ xs: 23 }}
                                    >
                                        {' ' + program.overView.credits}
                                    </Typography>
                                </Box>
                            }
                        />
                    </ListItem>
                    <ListItem sx={{ py: 0.3 }}>
                        <ListItemIcon>
                            <SchoolOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                    <Typography
                                        variant="body1"
                                        fontWeight={400}
                                        color={'#FFFFFF'}
                                        fontSize={{ xs: 23 }}
                                    >
                                        {'Modality:' + ' '}
                                    </Typography>
                                    <Typography variant="body1" component="span" sx={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}>
                                        {' '}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        component="span"
                                        fontWeight={200}
                                        color={'#FFFFFF'}
                                        fontSize={{ xs: 23 }}
                                    >
                                        {' ' + program.overView.modality}
                                    </Typography>
                                </Box>
                            }
                        />
                    </ListItem>
                    <ListItem sx={{ py: 0.3 }}>
                        <ListItemIcon>
                            <TranslateOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                    <Typography
                                        variant="body1"
                                        fontWeight={400}
                                        color={'#FFFFFF'}
                                        fontSize={{ xs: 23 }}
                                    >
                                        {'Lenguage:' + ' '}
                                    </Typography>
                                    <Typography variant="body1" component="span" sx={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}>
                                        {' '}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        component="span"
                                        fontWeight={200}
                                        color={'#FFFFFF'}
                                        fontSize={{ xs: 23 }}
                                    >
                                        {' ' + program.overView.language}
                                    </Typography>
                                </Box>
                            }
                        />
                    </ListItem>
                </List>

            </Grid>
        </Grid>
    )
}
