import { Box } from '@mui/material'


interface Props {
    children: React.ReactNode
}



export const ComponentsWithNoPading = ({ children }: Props) => {
    return (
        <Box sx={{
            paddingBottom: 20,
        }}>
            {children}
        </Box>
    )
}
