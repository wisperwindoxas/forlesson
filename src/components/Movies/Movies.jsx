import React from 'react'
import "./movies.css"
import axios from 'axios'



export default function Movies({title, page}) {

    const [movies , setMovies] = React.useState([])


    React.useEffect(() => {
       async function getMovies(){
            const data = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=60413a5f672cfb8007082bc512040ca2&language=en-US&page=${page}`)
            setMovies(data.data.results)
        }

         getMovies()
    },[page])

   

  return (
    <div className='movies'>
        
        <div className="moviesBlock">
            <h2>{title}</h2>
            <div className="scroll_movies">
                {movies.map(item =>{
                    return <img key={item.id} src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" />
                })}
            </div>
        </div>
    </div>
  )
}
