import { useState, useEffect } from "react";
import s from "./style.module.css";
import { MovieAPI } from "./api/movie.js";
import { BACKDROP_BASE_URL } from "./config";
import { MovieDetail } from "./components/MovieDetail/MovieDetail";
import { Logo } from "./components/Logo/Logo";
import logoImg from "./assets/images/logo.png";
import { MovieListItem } from "./components/MovieListItem/MovieListItem";
import { MovieList } from "./components/MovieList/MovieList";
import { SearchBar } from "./components/SearchBar/SearchBar";

export function App() {
  const [currentMovie, setCurrentMovie] = useState();
  const [recommendationList, setRecommendationList] = useState();


  async function fetchPopular() {
    try {
      const popularMovieList = await MovieAPI.fetchPopular();

      if (popularMovieList) {
        setCurrentMovie(popularMovieList[0]);
      }
    } catch(error) {
      alert("Something went wrong when fetching the popular movies")
    }
  }

  async function fetchRecommendations(movieId) {
    try {
      const recommendationListResp = await MovieAPI.fetchRecommendations(movieId);

      if (recommendationListResp) {
        setRecommendationList(recommendationListResp.slice(0,10));
      }
    } catch(error) {
      alert("Something went wrong when fetching recommendations")
    }
  }

  async function fetchByTitle(title) {
    try {
      const searchResponse = await MovieAPI.fetchByTitle(title);

      if (searchResponse) {
        setCurrentMovie(searchResponse[0]);
      }
    } catch(error) {
      alert("Something went wrong")
    }
  }

  useEffect(() => {
    fetchPopular();
  }, []);

  useEffect(() => {
    if (currentMovie) {
      fetchRecommendations(currentMovie.id);
    }
  }, [currentMovie]);

  function updateCurrentMovie(movie) {
    setCurrentMovie(movie);
  }
  return (
    <div
      className={s.main_container}
      style={{
        background: currentMovie
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("${BACKDROP_BASE_URL}${currentMovie.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              img={logoImg}
              title="Watowatch"
              subtitle="Find a movie you may like"
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar onSubmit={fetchByTitle}/>
          </div>
        </div>
      </div>
      <div className={s.movie_detail}>
        {currentMovie && <MovieDetail movie={currentMovie} />}
      </div>
      <div className={s.recommended_movies}>
        {recommendationList && <MovieList movieList={recommendationList} onClickItem={updateCurrentMovie} />}
      </div>
    </div>
  );
}
