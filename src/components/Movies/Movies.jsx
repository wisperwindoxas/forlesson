import React from 'react'
import "./movies.css"
import axios from 'axios'



export default function Movies(props) {

    const [movies , setMovies] = React.useState([])


    React.useEffect(() => {
       async function getMovies(){
            const data = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=60413a5f672cfb8007082bc512040ca2&language=en-US&page=${props.page}`)
            setMovies(data.data.results)
        }

         getMovies()
    },[])

   

  return (
    <div className='movies'>
        
        <div className="moviesBlock">
            <h2>{props.title}</h2>
            <div className="scroll_movies">
                {movies.map(item =>{
                    return <img key={item.id} src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" />
                })}
            </div>
        </div>
    </div>
  )
}
