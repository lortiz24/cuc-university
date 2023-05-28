import { Box } from '@mui/material'



interface Props {
    children: React.ReactNode
}


export const ComponentWithPadding = ({ children }: Props) => {
    return (
        <Box sx={{
            paddingX: { xs: 2, sm: 5, md: 15 },
        }}>
            {children}
        </Box>
    )
}
