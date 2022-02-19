import  {useSelector}  from "react-redux";
import "../CSS/movies.css";


export const FavList = () => {
  const Img_API = "https://image.tmdb.org/t/p/w500";

  const YARAB = useSelector((state) => state.FavPage);
  console.log(YARAB)
  return (

    <div className="movie-container">

      {YARAB.map((movie) =>{
    
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
      </div>
    </div>
    );
    })}
  </div>    

  );
};

/* <span onClick={() => addToFav(id)}><FaHeart/></span> */
