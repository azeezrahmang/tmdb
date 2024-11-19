import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import Card from '../components/Card';
import Loader from '../components/Loader';

export const SearchMovie = ({apiPath}) => {

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [isLoading, setIsLoading] = useState(true);
  
  const {data: movies} = useFetch(apiPath, query);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [movies])
  

  console.log(movies);
  console.log(isLoading);

  return (
    <>
    {
      isLoading ? (
        <Loader/>
      ) : (
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
    </>        
  )
}
