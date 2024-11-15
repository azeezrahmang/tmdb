import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail, SearchMovie, PageNotFound } from "../pages";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import PrivateRoute from "../auth/PrivateRoute";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="movies/nowplaying" element={
                <PrivateRoute>
                    <MovieList apiPath="movie/now_playing" />
                </PrivateRoute>
            }>
            </Route>
            <Route path="movies/:id" element={
                <PrivateRoute>
                    <MovieDetail />
                </PrivateRoute>
            }></Route>
            <Route path="movies/popular" element={
                <PrivateRoute><MovieList apiPath="movie/popular" /></PrivateRoute>}></Route>
            <Route path="movies/toprated" element={<PrivateRoute><MovieList apiPath="movie/top_rated" /></PrivateRoute>}></Route>
            <Route path="movies/upcoming" element={<PrivateRoute><MovieList apiPath="movie/upcoming" /></PrivateRoute>}></Route>
            <Route path="search/movie" element={<PrivateRoute><SearchMovie apiPath="search/movie" /></PrivateRoute>}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
    )
};

export default AllRoutes;