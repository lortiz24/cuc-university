import React, { useState } from 'react';
import { Button, Checkbox, FormControlLabel, Grid, TextField, Typography,Link } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import { BpCheckbox } from './ui/Checkbox';
import { CustomButton } from './ui/ButtonEdit';


interface FormComponentProps {
    title?: string;
    onSubmit: (formData: FormData) => void;
}

export interface FormData {
    name: string;
    lastName: string;
    phone: string;
    email: string;
    message: string;
}
const useStyles = makeStyles({
    button: {
        backgroundColor: '#405262',
        color: 'white',
        borderRadius: 30,
        padding: '2px',
        fontSize: '1rem',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: '#667481',
        }
    }
});
const FormComponent: React.FC<FormComponentProps> = ({ title = "Leave us your details and we will contact you", onSubmit }) => {
    const classes = useStyles()

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [acceptData, setAcceptData] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validar el formulario antes de enviarlo
        if (name && lastName && phone && email && acceptData) {
            // Crear un objeto con los datos del formulario
            const formData: FormData = {
                name,
                lastName,
                phone,
                email,
                message,
            };

            // Llamar a la función de submit pasada por props y pasarle los datos del formulario
            onSubmit(formData);
        } else {
            // Mostrar un mensaje de error o realizar otra acción en caso de que el formulario no sea válido
            console.log('Formulario no válido');
        }
    };

    return (
        <Grid container marginTop={5} justifyContent="center">
            <Grid item xs={12} md={8} lg={8}>
                <form onSubmit={handleSubmit}>
                    <Typography
                        variant="h4"
                        color="primary"
                        fontWeight="bold"
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
                                InputLabelProps={{shrink:false}}
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
                        <Grid item xs={12}>
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
                                fullWidth
                                color='secondary'
                                className={classes.button}
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
