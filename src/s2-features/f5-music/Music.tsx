import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Music = () => {
    return <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            flexGrow: '1',
            '& > :not(style)': {
                margin: '10px',
                padding: '10px'
            },
        }}
    >
        <Paper>
            Here is some music
        </Paper>
    </Box>
}

export default Music