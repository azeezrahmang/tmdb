import React, {useState, useEffect} from 'react'
import useFetch from '../hooks/useFetch'
import Card from '../components/Card';
import loader from '../assets/loader.gif';

const MovieList = ({apiPath}) => {
    const [isLoading, setIsLoading] = useState(true);
    const { data:movies }  = useFetch(apiPath);
    

    useEffect(() => {
      if(movies && movies.length > 0){
        console.log(movies);
        setIsLoading(false);
      }  
    }, [movies])
    
  return (
    <>
      {
        !isLoading ? (
          <div className='grid grid-cols-3 justify-items-center gap-5 max-w-screen-xl m-auto grid-wrapper'>
          {
            movies && (
              movies.map((movie) => (
                <div key={movie.id}
                > 
                  <Card 
                    movies = {movie}
                  />
                </div>
              ))
            ) 
          }
        </div>
        ) : (
          <div className='bg-[#000]/[.6] absolute bottom-0 left-0 top-0 right-0 flex justify-center items-center'>
            <img src={loader} alt="loader"/>
          </div>
        )
      }      
     </>
  )
}

export default MovieList