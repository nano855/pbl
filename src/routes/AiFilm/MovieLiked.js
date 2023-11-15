import {Link} from 'react-router-dom';
import {useContext} from "react";
import {LikeContext} from "./context/LikeContext";
import {MovieContext} from "./context/MovieContext";
import {MovieCard} from "./component/MovieCard";
import { Container } from './MovieHome.style.jsx';

const MovieLiked = () => {
  const {movieIds} = useContext(LikeContext)
  const {movies} = useContext(MovieContext)

  const likeMovies = movies.filter(movie => movieIds.includes(movie.id))
  return (
    <>
      <Link to={'../'}>Retour</Link>
      <h1>Movie Liked</h1>
      <Container>
        {
          likeMovies.map(movie => (
              <MovieCard movie={movie}/>
            )
          )
        }
      </Container>
    </>
  );
};

export default MovieLiked;