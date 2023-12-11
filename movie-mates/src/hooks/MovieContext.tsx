import { createContext, useContext, useState, ReactNode } from 'react';

type MovieDataType = {
  title: string;
  posterPath?: string;
  genres?: string[];
  director?: string;
  cast?: string[];
  overview?: string;
  imdbID: string,
  date?: string;
  time?: string;
  room?: string;
  cinema?: string;
  ticketCount?: number;
};

type MovieContextType = {
  movieData: MovieDataType;
  updateMovieData: (newData: Partial<MovieDataType>) => void;
};

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovieContext must be used within a MovieProvider');
  }
  return context;
};

export const MovieProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [movieData, setMovieData] = useState<MovieDataType>({ title: '', imdbID:''});

  const updateMovieData = (newData: Partial<MovieDataType>) => {
    setMovieData((prevData) => ({ ...prevData, ...newData }));
  };

  return (
    <MovieContext.Provider value={{ movieData, updateMovieData }}>
      {children}
    </MovieContext.Provider>
  );
};
