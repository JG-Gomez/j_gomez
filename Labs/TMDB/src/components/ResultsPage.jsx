import MovieCard from "./MovieCard.jsx";
import { Grid } from "@mui/material";

export default function ResultsPage({ movieList }) {
    return (
        <Grid container spacing={3} justifyContent="center">
            {movieList.map((movie) => (
                <Grid key={movie.id}>
                    <MovieCard movie={movie} />
                </Grid>
            ))}
        </Grid>
    );
}
