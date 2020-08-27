import React, { forwardRef } from 'react'
import "./VideoCard.css"
import TextTruncate from "react-text-truncate"
import {ThumbUpSharp} from '@material-ui/icons'
const baseUrl =  "https://image.tmdb.org/t/p/original/";
const  VideoCard = forwardRef(({movie}, ref) => {



    return (
        <div ref={ref} className="videoCard">
            <img src={`${baseUrl}${movie.backdrop_path}` } alt="amazon" />
            {/* <p>{movie.release_date || movie.first_air_date}</p> */}
            <TextTruncate 
            line={1}
            element="p"
            truncateText="..."
            text = {movie.overview}
            
            />
            
            {/* <p>{movie.overview}</p> */}
            <h3>{movie.title || movie.original_name}</h3>

            <p className="videoCard__stats">
                {movie.media_type && `${movie.media_type} ⚫`}
                {movie.release_date || movie.first_air_date}
                
                <ThumbUpSharp /> {movie.vote_count}</p>
            
        </div>
    )
})

export default VideoCard
