import React from "react";
import "./App.css";
// import Row from "./Row";
// import requests from "./request.js";
// import Banner from "./Banner.js";
// import Nav from "./Nav.js";
import Landingpage from "./pages/Landingpage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen.js";

function App() {
  const user = "true";

  return (
    <div className="app">
      {/* <Nav /> */}
      <BrowserRouter>
        <Routes>
          {!user ? (
           <Route path="/" element ={<LoginScreen />} />
          ) : (
            <Route path="/" element={<Landingpage />} />
          )}
          {/* <Route path="/" element = {<LoginScreen />} />
          <Route path="/" element={<Landingpage />} /> */}
        </Routes>
      </BrowserRouter>


{/* <Router>
  {!user ? (
    <Login />
  ) : (
    <Route path="/">
      <Homescreen />
    </Route>
  )}
</Router> */}


      {/* <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} /> */}
    </div>
  );
}

export default App;