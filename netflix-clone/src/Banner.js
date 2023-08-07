import axios from './axios';
import React, { useEffect, useState } from 'react'
import "./Banner.css"
import requests from './Requests';

const Banner = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[Math.floor(Math.random()* request.data.results.length-1)]
            );
            return request;
        }

        fetchData();


        // async function fetchData() {
        //     const request =  await axios.get(requests.fetchNetflixOriginals);
        //     setMovie( 
        //         request.data.results[
        //         Math.floor(Math.random() * request.data.results.length - 1)
        //      ]
        //     );
        //     return request;
        //   }
        //   fetchData();

    },[])

    console.log(movie);

    function truncate(string, n){
       return string?.length > n ? string.substr(0, n-1) + "..." :string;

    }
  return (
    <header className='banner'
    style={{
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "top right",


        // backgroundSize: "cover",
        //     backgroundImage: `url(
        //      "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        // )`,
        // backgroundPosition: "center center",
       
    }}
    >
        <div className='banner__contents '>
            <h1 className='banner__title'> Movie Name</h1>
            <div className='banner__buttons'>
               <button className='banner__button'>Play</button>
               <button className='banner__button'>My List</button>
            </div>
            <h1 className='banner__description'> {
                truncate("This is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test description",130)
            }</h1>

        </div>

        <div className='banner__fadeBottom'/>
         


    </header>
  )
}

export default Banner;