import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { options } from '../utils/Options';
import star from '../assets/star.png';
import movieBanner from '../assets/movie-banner.jpg'

const MovieDetail = () => {

  const userId  = useParams();

  const [movieDetail, setMovieDetail] = useState({});

  const {backdrop_path, original_title, overview, release_date, vote_average, genres} = movieDetail;

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
    <div className='grid grid-cols-2 items-center max-w-screen-xl m-auto'>
      <div className='m-auto'>
        <img className="rounded-lg max-w-[500px] object-cover" 
          src={
            backdrop_path ? (
              `https://image.tmdb.org/t/p/w500${backdrop_path}`   
            ) : (
              movieBanner
            )
          }          
          alt="moviebanner" />
      </div>
      <div>
        <h2 className='font-bold text-slate-700 leading-snug text-xl pb-4'>{original_title}</h2>
        <p className='pb-4'>{overview}</p>
        <p className='pb-4'><span className='font-bold'>Release Date:</span> {release_date}</p>
        <div className='flex gap-4 pb-4 italic'>
          Genres ({
            genres && 
            genres.map((type) => (
              <div key={type.id}>
                <p>{type.name}</p>
              </div>
            ))
          })
        </div>
        <div></div>
        <div className='flex items-center gap-2 pb-2'>
            <span className='font-bold'>Rating:</span>
            {vote_average}<img src={star} />
        </div>
      </div>
    </div>
  )
}

export default MovieDetail