import {createContext, useState} from 'react';

export const LikeContext = createContext([]);

const LikeContextProvider = ({children}) => {
  const [movieIds, setMovieIds] = useState([]);

  const updateMovieList = movieId => {
    const updatedMovieIds = [...movieIds];
    const index = updatedMovieIds.indexOf(movieId);

    if (index === -1)
      updatedMovieIds.push(movieId);
    else
      updatedMovieIds.splice(index, 1);

    setMovieIds(updatedMovieIds);

  };

  const value = {movieIds, updateMovieList};
  return <LikeContext.Provider value={value}>{children}</LikeContext.Provider>;
};


export default LikeContextProvider;