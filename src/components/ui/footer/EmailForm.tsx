import React from 'react'
import { Button, Grid, TextField } from '@mui/material'
import { useTranslation } from 'react-i18next'

export const EmailForm = () => {
    const { t } = useTranslation()
    return (
        <Grid
            container
            component={'form'}
            gap={2}
        >
            <Grid item xs={12} lg={6} >
                {/* <TextField
                    required
                    size='small'
                    type="email"
                    placeholder="Enter your email"
                    fullWidth
                    InputProps={{
                        sx: {
                            borderRadius: 6,
                            color: '#FFFFFF'
                        }
                    }}
                /> */}
                <TextField
                    required
                    size='small'
                    type="email"
                    placeholder={t('footer.input.placeholder')}
                    fullWidth
                    InputProps={{
                        sx: {
                            borderRadius: 6,
                            color: '#FFFFFF',
                            '& fieldset': {
                                borderColor: '#FFFFFF',
                            },
                        },
                    }}
                />

            </Grid>
            <Grid item xs={4} sm={6} lg={4}>
                <Button
                    type="submit"
                    variant="contained"
                    color='primary'
                    fullWidth
                    sx={{
                        borderRadius: 6,
                        textTransform: 'none',
                        color: 'white',
                        fontSize: 18
                    }}
                >
                    {t('footer.button')}
                </Button>
            </Grid>
        </Grid>
    )
}
