import React from "react";
import Banner from "../Banner";
import Nav from "../Nav";
import requests from "../request";
import Row from "../Row";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      {/* Nav  */}
      <Nav />
      {/* Banner  */}
      <Banner />
      {/* Rows  */}
      <Row
        title="NETLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
};

export default HomeScreen;
