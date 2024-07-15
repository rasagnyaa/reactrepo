import Movie from "./movie";


function MovieViewsRealtime({title,releaseDate,views}){
console.log("child-1")
return(
    <div>
<Movie title={title} releaseDate={releaseDate} />
movie views :{views}

    </div>
)

}
export default MovieViewsRealtime