import React from "react"

function Movie({title,releaseDate}){
  console.log("movie rerenderd")
  return(
    <div>
<div>Movie title:{title}</div>
<div>Release date:{releaseDate}</div>

    </div>
  )
}
export default React.memo(Movie)