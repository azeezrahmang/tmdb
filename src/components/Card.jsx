import React from 'react';
import star from '../assets/star.png';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import defaultBanner from '../assets/movie-banner.jpg'

const Card = ({ movies }) => {


    const { title, overview, vote_average, popularity, backdrop_path, id} = movies;


    // const moviePath = useFetch(apiPath)

    // const voteWidth = vote_average*10+`%`;

    // const voteWidth = "10%";

    console.log(movies);


    return (
        <Link to={`/movies/${id}`}>
        {/* <Link to="movies/anime"> */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-custom">
                <img className="rounded-t-lg max-h-[214px] w-full object-cover" 
                    src= {
                        backdrop_path ? (
                            `https://image.tmdb.org/t/p/w500${backdrop_path}`
                        ) : (
                            defaultBanner
                        )
                    }
                    // {`https://image.tmdb.org/t/p/w500${backdrop_path}`} 
                    alt="moviebanner" 
                />
            
            <div className="p-5">
                
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">{overview}</p>
                <div className='flex items-center gap-2 pb-2'>
                    <img src={star} />
                    <span>Rating: {vote_average}</span>
                </div>
                <p>Reach: {popularity}</p>
                {/* <div>
                    <dl>
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Rating</dt>
                        <dd className="flex items-center mb-3">
                            <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                                <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{ width: "10%" }}></div>
                            </div>
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{vote_average}</span>
                        </dd>
                    </dl>
                </div> */}
            </div>
        </div>
        </Link>
    )
}

export default Card