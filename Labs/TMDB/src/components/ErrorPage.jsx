import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


export default function ErrorPage() {
    return (
        <Box textAlign="center" p={5}>
            <Typography variant="h3" color="error">
                Failed to find any matching movies oops...
            </Typography>
        </Box>
    )
}