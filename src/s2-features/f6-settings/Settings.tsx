import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Settings = () => {
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
            Here are the account settings
        </Paper>
    </Box>
}

export default Settings