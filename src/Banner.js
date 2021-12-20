import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "./request";

const Banner = () => {
  const print = () => {
    console.log("hi");
  }
  const [movie, setMovie] = useState([]);
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
        <h1 className="banner_title">{movie?.name || movie?.title || movie?.original_name}</h1>
        <div className="banner_buttons">
          <button onClick={print}className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h2 className="banner_description">
          {truncate(`${movie.overview}`,200)}
        </h2>
      </div>
      <div className="banner_fadeBottom"></div>
    </div>
  );
};

export default Banner;
