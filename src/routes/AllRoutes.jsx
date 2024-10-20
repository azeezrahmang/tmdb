import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail, SearchMovie, PageNotFound } from "../pages";

const AllRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<MovieList apiPath="movie/now_playing"/>}></Route>
            <Route path="movies/:id" element={<MovieDetail/>}></Route>
            <Route path="movies/popular" element={<MovieList apiPath="movie/popular"/>}></Route>
            <Route path="movies/toprated" element={<MovieList apiPath="movie/top_rated"/>}></Route>
            <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming"/>}></Route>
            <Route path="search" element={<SearchMovie/>}></Route>
            <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
    )
};

export default AllRoutes;