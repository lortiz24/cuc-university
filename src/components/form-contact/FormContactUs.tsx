import React, { useState } from 'react';
import { Button, FormControlLabel, Grid, TextField, Typography, Link, useTheme } from '@mui/material';
import { BpCheckbox } from '../ui/Checkbox';
import { FormContact } from '@/interfaces';


interface FormComponentProps {
    title?: string;
    onSubmit: (FormContact: FormContact) => void;
    TextFieldMessage?: boolean;
}



const FormComponent: React.FC<FormComponentProps> = ({ title = "Leave us your details and we will contact you", onSubmit, TextFieldMessage = true }) => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [acceptData, setAcceptData] = useState(false);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (name && lastName && phone && email && acceptData) {
            const FormContact: FormContact = {
                name,
                lastName,
                phone,
                email,
                message,
            };

            onSubmit(FormContact);
        } else {
            console.log('Formulario no válido');
        }
    };

    return (
        <Grid container marginTop={5} justifyContent="center" >
            <Grid item xs={12}>
                <form onSubmit={handleSubmit}>
                    <Typography
                        variant="h4"
                        color="primary"
                        fontWeight="bold"
                        fontSize={{ xs: 32, lg: 45 }}
                    >
                        {title}
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} marginTop={3} >
                            <TextField
                                size='small'
                                placeholder='Name'
                                value={name}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setName(e.target.value)
                                }
                                required
                                fullWidth
                                InputLabelProps={{ shrink: false }}
                                InputProps={{
                                    sx: {
                                        borderRadius: 6,
                                        WebkitBoxShadow: 'inset 0px 11px 11px -10px rgba(128,128,128,0.65)',
                                        MozBoxShadow: 'inset 0px 11px 11px -10px rgba(128,128,128,0.65)',
                                        boxShadow: 'inset 0px 11px 11px -10px rgba(128,128,128,0.65)',
                                        borderTop: 'none',
                                        borderBottom: 'none',

                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                size='small'
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setLastName(e.target.value)
                                }
                                required
                                fullWidth
                                InputProps={{
                                    sx: {
                                        borderRadius: 6,
                                        WebkitBoxShadow: 'inset 0px 11px 11px -10px rgba(128,128,128,0.65)',
                                        MozBoxShadow: 'inset 0px 11px 11px -10px rgba(128,128,128,0.65)',
                                        boxShadow: 'inset 0px 11px 11px -10px rgba(128,128,128,0.65)',
                                        borderTop: 'none',
                                        borderBottom: 'none',
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                size='small'
                                placeholder="Phone"
                                type="number"
                                value={phone}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setPhone(e.target.value)
                                }
                                required
                                fullWidth
                                InputProps={{
                                    sx: {
                                        borderRadius: 6,
                                        WebkitBoxShadow: 'inset 0px 11px 11px -10px rgba(128,128,128,0.65)',
                                        MozBoxShadow: 'inset 0px 11px 11px -10px rgba(128,128,128,0.65)',
                                        boxShadow: 'inset 0px 11px 11px -10px rgba(128,128,128,0.65)',
                                        borderTop: 'none',
                                        borderBottom: 'none',
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item marginBottom={!TextFieldMessage ? 1 : 0} xs={12}>
                            <TextField
                                size='small'
                                placeholder="Email"
                                type="email"
                                value={email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setEmail(e.target.value)
                                }
                                required
                                fullWidth
                                InputProps={{
                                    sx: {
                                        borderRadius: 6,
                                        WebkitBoxShadow: 'inset 0px 11px 11px -10px rgba(128,128,128,0.65)',
                                        MozBoxShadow: 'inset 0px 11px 11px -10px rgba(128,128,128,0.65)',
                                        boxShadow: 'inset 0px 11px 11px -10px rgba(128,128,128,0.65)',
                                        borderTop: 'none',
                                        borderBottom: 'none',
                                    }
                                }}
                            />
                        </Grid>
                        {
                            TextFieldMessage && (
                                <Grid item marginBottom={1} xs={12}>
                                    <TextField
                                        placeholder="Message"
                                        multiline
                                        rows={4}
                                        value={message}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            setMessage(e.target.value)
                                        }
                                        fullWidth
                                        InputProps={{
                                            sx: {
                                                borderRadius: 6,
                                                WebkitBoxShadow: 'inset 0px 11px 11px -10px rgba(128,128,128,0.65)',
                                                MozBoxShadow: 'inset 0px 11px 11px -10px rgba(128,128,128,0.65)',
                                                boxShadow: 'inset 0px 11px 11px -10px rgba(128,128,128,0.65)',
                                                borderTop: 'none',
                                                borderBottom: 'none',
                                            }
                                        }}
                                    />
                                </Grid>
                            )
                        }

                        <Grid item xs={8}>
                            <FormControlLabel
                                control={
                                    <BpCheckbox
                                        checked={acceptData}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            setAcceptData(e.target.checked)
                                        }
                                    />
                                }
                                label={
                                    <span>
                                        *I have read and accept the{' '}
                                        <Link href="#" color="primary">
                                            the terms and conditions
                                        </Link>
                                    </span>
                                }
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Button
                                type="submit"
                                variant="contained"
                                color='secondary'
                                fullWidth
                                sx={{
                                    borderRadius: 30,
                                    textDecoration: 'none',
                                    textTransform: 'none',
                                    fontSize: 18
                                }}
                            >
                                Send
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid >
        </Grid >
    );
};

export default FormComponent;
