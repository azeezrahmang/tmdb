import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { options } from '../utils/Options';

const MovieDetail = () => {

  const userId  = useParams();

  const [movieDetail, setMovieDetail] = useState({});

  const {backdrop_path, original_title, overview, release_date} = movieDetail;

  console.log(userId)

  useEffect(() => {
    const getMovDetail = async() => {
      const response =  await fetch(`https://api.themoviedb.org/3/movie/${userId.id}?language=en-US`, options);
      const data = await response.json();
      setMovieDetail(data);
    }
  
    getMovDetail();    
  }, [])


  console.log(movieDetail);

  return (
    <div className='flex gap-4 items-center max-w-screen-xl m-auto'>
      <div>
        <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="moviebanner" />
      </div>
      <div>
        <p>{original_title}</p>
        <p>{overview}</p>
        <p>{release_date}</p>
      </div>
    </div>
  )
}

export default MovieDetail