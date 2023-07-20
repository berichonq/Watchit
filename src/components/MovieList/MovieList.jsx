import s from "./style.module.css";
import { MovieListItem } from "../MovieListItem/MovieListItem";

export function MovieList({ movieList, onClickItem }) {
  return (
    <div>
      <div className={s.title}>You'll probably like: </div>
      <div className={s.list}>
        {movieList.map((movie) => {
          return (
            <span className={s.movie_item} key={movie.id}>
              <MovieListItem movie={movie} onClick={onClickItem} />
            </span>
          );
        })}
      </div>
    </div>
  );
}
