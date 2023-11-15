import { useContext } from 'react';
import { MovieCard } from './component/MovieCard';
import { Container } from './MovieHome.style.jsx';
import { MovieContext } from './context/MovieContext';

const MovieHome = () => {

    const { movies } = useContext(MovieContext);

    return (
        <Container>
            {movies.map((movie, index) => (
                <MovieCard movie={movie} key={index}/>
            ))}
        </Container>
    );
};

export default MovieHome;