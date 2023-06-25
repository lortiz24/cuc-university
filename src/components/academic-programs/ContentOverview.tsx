import React from 'react'
import { Grid, List, ListItem, ListItemIcon, Typography, ListItemText, Box } from '@mui/material'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { ProgramItem } from '@/interfaces';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import { makeStyles } from '@mui/styles';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
    customIcon: {
        color: '#FFFFFF', // Cambia el color aquí
    },
});


interface Props {
    program: ProgramItem
}
export const ContentOverview = ({ program }: Props) => {

    const classes = useStyles();
    const { t } = useTranslation()

    return (
        <Grid
            container
            width={'80%'}
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
                    color={'#FFFFFF'}
                    fontWeight={'bold'}
                    fontSize={{ xs: 25, sm: 42, xl: 50 }}
                    textAlign={'start'}
                >
                    {t('programs.overview-title')}
                </Typography>
                <List>
                    <ListItem sx={{ py: 0.3 }}>
                        <ListItemIcon>
                            <AccessTimeOutlinedIcon className={classes.customIcon} />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                    <Typography
                                        variant="h1"
                                        fontWeight={'bold'}
                                        color={'#FFFFFF'}
                                        fontSize={{ xs: 23 }}
                                    >
                                        {t('programs.overview.duration-title') + ' '}
                                    </Typography>
                                    <Typography variant="body1" component="span" sx={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}>
                                        {' '}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        component="span"
                                        fontWeight={'200'}
                                        color={'#FFFFFF'}
                                        fontSize={{ xs: 23 }}
                                    >
                                        {t(program.overView.duration)}
                                    </Typography>
                                </Box>
                            }
                        />
                    </ListItem>
                    <ListItem sx={{ py: 0.3 }}>
                        <ListItemIcon>
                            <StorageOutlinedIcon className={classes.customIcon} />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                    <Typography
                                        variant="h1"
                                        fontWeight={'bold'}
                                        color={'#FFFFFF'}
                                        fontSize={{ xs: 23 }}
                                    >
                                        {t('programs.overview.credits-title') + ' '}
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
                                        {t(program.overView.credits)}
                                    </Typography>
                                </Box>
                            }
                        />
                    </ListItem>
                    <ListItem sx={{ py: 0.3 }}>
                        <ListItemIcon>
                            <SchoolOutlinedIcon className={classes.customIcon} />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                    <Typography
                                        variant="h1"
                                        fontWeight={'bold'}
                                        color={'#FFFFFF'}
                                        fontSize={{ xs: 23 }}
                                    >
                                        {t('programs.overview.modality-title') + ' '}
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
                                        {t(program.overView.modality)}
                                    </Typography>
                                </Box>
                            }
                        />
                    </ListItem>
                    <ListItem sx={{ py: 0.3 }}>
                        <ListItemIcon>
                            <TranslateOutlinedIcon className={classes.customIcon} />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                    <Typography
                                        variant="h1"
                                        fontWeight={'bold'}
                                        color={'#FFFFFF'}
                                        fontSize={{ xs: 23 }}
                                    >
                                        {t('programs.overview.language-title') + ' '}
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
                                        {t(program.overView.language)}
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
