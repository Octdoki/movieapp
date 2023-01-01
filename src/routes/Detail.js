import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react';
import MovieDetail from "../components/MovieDetail";
import Loading from "../components/Loading";
import styles from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setMovie(json.data.movie);
    setLoading(false);
  }


  useEffect(() => {
    getMovie();
  },[]);

  return (
    <div className={styles.container}>
      {
        loading
          ? <Loading />
          :
          <MovieDetail
            key={movie.id}
            id={movie.id}
            coverImg={movie.medium_cover_image}
            rating={movie.rating}
            runtime={movie.runtime}
            description_full={movie.description_full}
            background_image_original={movie.background_image_original}
            title={movie.title}
            genres={movie.genres}
            style_tag="Detail" />
      }
    </div>
  )
}
export default Detail;