import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../CSS/movies.css";
/* import Movie from "./movie"; */
import { FaHeart } from 'react-icons/fa';
import axios from "axios";
import { addToFav, allMovies } from "../Redux/Fav Movie/MoviesActions.js";


const Movies_API =
  "https://api.themoviedb.org/3/movie/popular?api_key=d3c9a114cf901c5b09616a68970ac918";



const Search_API =
  "https://api.themoviedb.org/3/search/movie?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c&query=";
 
  

const MoviesPage = () =>{
  const Img_API = "https://image.tmdb.org/t/p/w500";
  const Allmovies = useSelector((state)=>state.movies)
  const [searchTerm , setSearchTerm] = useState('');
  
  const dispatch = useDispatch() ;
  useEffect(() => {
    dispatch(allMovies())
  }, []);

  /* const getMovies = (API) => {
    axios.get(API)
    .then((res) => {
      setMovies(res.data.results);
    });
  } */

  /* const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchTerm){
    getMovies(Search_API + searchTerm )
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value)
  }; */

  const add =(id) => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=d3c9a114cf901c5b09616a68970ac918`)
    .then((res) => {
      dispatch(addToFav(res.data));
    }).catch((error)=>{
      console.log(error);
    });
  }

  const a = useSelector((state)=>state.FavPage)
  console.log(a)
  return (
    <>
    {/* <header>
        <form onSubmit={handleOnSubmit}>
          <input className="search" 
                 type="search" 
                 placeholder="Search"
                 value={searchTerm}
                 onChange={handleOnChange} />
        </form>
      </header> */}


    <div className="movie-container">

      {Allmovies.map((movie) =>{
    
    return(
      <div className="movie">
      <img src={Img_API + movie.poster_path} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <span>{movie.vote_average}</span>
      </div>
  
      <div className="movie-overview">
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        {/* <span onClick={() => addToFav(id)}><FaHeart/></span> */}
        <button onClick={() => add(movie.id) }>
          Add To Fav
        </button>
      </div>
    </div>
    );
    })}
     </div>    
    </>
  );
}


export default MoviesPage;
