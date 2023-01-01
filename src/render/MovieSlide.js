import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./MovieSlide.module.css";

function MovieSlide({ id, coverImg, rating, runtime, title }) {
    return (
      <div className={styles.movie}>
        <Link to={`/movie/${id}`}>
          <img src={coverImg} alt={title} />
        </Link>
      </div>
    )
  }
  
  MovieSlide.prototypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    // title: PropTypes.string.isRequired,
    // summary: PropTypes.string,
    // genres: PropTypes.arrayOf(PropTypes.string).isRequired
  }
  
  export default MovieSlide;