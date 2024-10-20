import React from 'react'
import useFetch from '../hooks/useFetch'
import Card from '../components/Card';

const MovieList = ({apiPath}) => {
    const { data:movies }  = useFetch(apiPath);
  return (
    <div className='grid grid-cols-3 justify-items-center gap-5 max-w-screen-xl m-auto'>
      {
        movies && (
          movies.map((movie) => (
            <div key={movie.id}> 
              <Card 
                movies = {movie}
              />
            </div>
          ))
        ) 
      }
    </div>
  )
}

export default MovieList