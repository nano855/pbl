import { MovieContext } from './context/MovieContext';
import {useContext} from 'react'
import { Link } from 'react-router-dom';

const MovieLiked = () => {
    const { movies } = useContext(MovieContext)
    console.log(movies);
    return (
        <>
            <Link to={'../'}>Retour</Link>
            <h1>Movie Liked</h1>
        </>
    );
};

export default MovieLiked;