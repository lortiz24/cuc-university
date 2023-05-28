import React, { useEffect, useState } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export const useGetBreakpoints = () => {
    const theme = useTheme();
    const matchXs = useMediaQuery(theme.breakpoints.up('xs'));
    const matchSm = useMediaQuery(theme.breakpoints.up('sm'));
    const matchMd = useMediaQuery(theme.breakpoints.up('md'));
    const matchLg = useMediaQuery(theme.breakpoints.up('lg'));
    const matchXl = useMediaQuery(theme.breakpoints.up('xl'));

    const [xs, setXs] = useState(false)
    const [sm, setSm] = useState(false)
    const [md, setMd] = useState(false)
    const [lg, setLg] = useState(false)
    const [xl, setXl] = useState(false)


    useEffect(() => {
        setXs(matchXs)
    }, [matchXs])


    useEffect(() => {
        setSm(matchSm)
    }, [matchSm])

    useEffect(() => {
        setMd(matchMd)
    }, [matchMd])

    useEffect(() => {
        setLg(matchLg)
    }, [matchLg])

    useEffect(() => {
        setXl(matchXl)
    }, [matchXl])


    return {
        xs,
        sm,
        md,
        lg,
        xl
    }
}
