import { createContext, useEffect, useState } from 'react';

export const MovieContext = createContext([])

const MovieContextProvider = ({children}) => {
    const [movies, setMovies] = useState([])
    const options = {
        method: 'GET',
        headers: { accept: 'application/json' }
    };
    const __APIKEY__ = 'c7366482f67d11c65d13e9edc08ba987';
    //const __TOKEN__ =
    // 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzM2NjQ4MmY2N2QxMWM2NWQxM2U5ZWRjMDhiYTk4NyIsInN1YiI6IjY1MjNkY2EzYWI1ZTM0MDBlMWQ0OGQ3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KaSFEkg-YIMxh95PyXcWPd2opp7AITsdUj_r8daUMN4';
    const id = 'popular';
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${__APIKEY__}&language=fr-FR`;

    useEffect(() => {
        fetch(url, options)
            .then(response => response.json())
            .then(response => {
                setMovies(response.results); 
            })
            .catch(err => {
                console.error(err)
            });
    },[])
    const value = {movies, setMovies}
    return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
}



export default MovieContextProvider