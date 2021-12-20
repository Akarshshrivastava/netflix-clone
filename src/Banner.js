import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "./request";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Banner = () => {
  const [trailerUrl, setTrailerUrl] = useState("");
  const [movie, setMovie] = useState([]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button onClick={() => handleClick(movie)} className="banner_button">
            Play
          </button>
          <button className="banner_button">My List</button>
        </div>
        <h2 className="banner_description">
          {truncate(`${movie.overview}`, 200)}
        </h2>
      </div>
      <div className="banner_fadeBottom"></div>
      {trailerUrl && <YouTube className="video_player" videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Banner;
