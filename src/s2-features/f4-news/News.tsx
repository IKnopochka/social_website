import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const News = () => {
    return (
        <Box
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
                Here are some news
            </Paper>
        </Box>
    )
}

export default News