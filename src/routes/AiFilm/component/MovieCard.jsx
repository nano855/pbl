import './MovieCard.css';
import { Link } from 'react-router-dom';
import { MovieCardStyle } from './MovieCard.style.jsx';
import { useContext } from 'react';
import { LikeContext } from '../context/LikeContext';

export function MovieCard({ movie }) {
    const imageRootPath = 'https://image.tmdb.org/t/p/w500/';
    const imagePath = imageRootPath + movie.poster_path;
    const { movieIds, updateMovieList } = useContext(LikeContext);
    const id = movie.id
    const handleClickLike = () => {
        updateMovieList(id)
    };

    return (
        <MovieCardStyle>
            <div className="movie-img">
                <img src={imagePath} alt={movie.original_title}/>
            </div>
            <h3>{movie.title}</h3>
            <div>{movie.overview} | 2h 45min</div>
            {movie.release_date}
            <footer>
                <button className={`${movieIds ? 'active' : ''}`} onClick={handleClickLike}>
                  Like
                </button>
                <Link to={'/ai-film/detail-film/' + movie.id}>Détails</Link>
            </footer>
        </MovieCardStyle>
    );
}