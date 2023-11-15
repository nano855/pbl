import './MovieCard.css';
import { Link } from 'react-router-dom';
import { MovieCardStyle } from './MovieCard.style.jsx';

export function MovieCard({ movie }) {
    const imageRootPath = 'https://image.tmdb.org/t/p/w500/';
    const imagePath = imageRootPath + movie.poster_path;
    return (
        <MovieCardStyle>
            <div className="movie-img">
                <img src={imagePath} alt={movie.original_title}/>
            </div>
            {/* Titre */}
            <h3>{movie.title}</h3>

            {/* DATE + durée du film */}
            <div>
                {movie.overview}
            </div>
            {/* Castings */}

            {movie.release_date}

            {/* Footer avec button like et detail du film */}
            <footer>
                <button>Like</button>
                <Link to={'/ai-film/detail-film/' + movie.id}>Détails</Link>
            </footer>
        </MovieCardStyle>
    );
}