import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import duck from "../assets/duck.jpg";

export default function MovieCard({ movie }) {
    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : duck;

    return (
        <Card sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia component="img" height="500" image={posterUrl} alt={movie.title} />
            <CardContent>
                <Typography variant="h6">{movie.title}</Typography>
                <Typography variant="body2">{movie.overview}</Typography>
                <Typography variant="caption">Rating: {movie.vote_average}</Typography>
            </CardContent>
        </Card>
    );
}
