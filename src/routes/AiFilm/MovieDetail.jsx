import { MovieContext } from './context/MovieContext';
import {useContext} from 'react'
import { Link, useParams } from 'react-router-dom';

const MovieDetail = () => {
    const { id } = useParams();
    const { movies } = useContext(MovieContext)

    const MyMovie = movies.filter(movie=> {
        return parseInt(movie.id) === parseInt(id)
    })[0]
    return (
        <>
            <Link to={'../'}>Retour</Link>
            <h1>Movie detail</h1>
            <p>{MyMovie.title}</p>
        </>
    );
};

export default MovieDetail;