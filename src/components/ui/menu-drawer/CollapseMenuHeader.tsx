import React from 'react'
import { Collapse, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import { useState, useEffect } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

interface Props {
    children: React.ReactNode,
    primary: string
}

export const CollapseMenuHeader = ({ children, primary }: Props) => {
    const [open, setOpen] = useState(false);

    const handleCollapseToggle = () => {
        setOpen(!open);
    };

    return (
        <>
            <ListItemButton onClick={handleCollapseToggle}>

                <ListItemText primary={primary} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
                {children}
            </Collapse>
        </>
    );
}
