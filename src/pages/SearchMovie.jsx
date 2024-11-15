import React from 'react'
import { useSearchParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import Card from '../components/Card';

export const SearchMovie = ({apiPath}) => {

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  
  const {data: movies} = useFetch(apiPath, query);

  console.log(movies);

  return (
    <div className='grid grid-cols-3 justify-items-center gap-5 max-w-screen-xl m-auto grid-wrapper'>
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
