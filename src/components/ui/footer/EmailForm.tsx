import React from 'react'
import { Button, Grid, TextField } from '@mui/material'

export const EmailForm = () => {
    return (
        <Grid
            container
            component={'form'}
            gap={2}
        >
            <Grid item xs={12} sm={6} >
                <TextField
                    required
                    size='small'
                    type="email"
                    placeholder="Message"
                    fullWidth
                    InputProps={{
                        sx: {
                            borderRadius: 6,
                            color: '#FFFFFF'
                        }
                    }}
                />

            </Grid>
            <Grid item xs={7} sm={4}>
                <Button
                    type="submit"
                    variant="contained"
                    color='primary'
                    fullWidth
                    sx={{
                        borderRadius: 6,
                        paddingX: 2
                    }}
                >
                    Subscribe
                </Button>
            </Grid>
        </Grid>
    )
}
