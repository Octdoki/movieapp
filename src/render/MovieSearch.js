import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./MovieSlide.module.css"

function MovieSearch({ id, coverImg, title, rating, runtime, year, summary}) {

    return (
      <div className={styles.movie}>
        
  
        {/* ShortView (Img, Title, rating, runtime...) */}
        <div className={styles.show}>
          <div className={styles.shortView}>
            
            <div className={styles.letters}>
              <div className={styles.title}>
                <div>
                  <h3 >
                    <Link to={`/movie/${id}`}
                    style={ {"color":"red",
                    "textShadow": "2px 2px rgb(10,110,0)",
                    "WebkitTextStroke":"red"} }>
                      {(title.length > 35)
                        ? `${title.slice(0, 35)}...`
                        : title}
                    </Link>
                  </h3>
                </div>
              </div>
              <p>{year ? `year: ${year}` : null}</p>
              <p>{rating ? `rating: ${rating} / 10` : null}</p>
              <p>{runtime ? `runtime: ${runtime} (min)` : null}</p>
              <p>{summary ? (summary.length > 180 ? `${summary.slice(0, 180)}...` : summary) : null}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  MovieSearch.prototypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    runtime: PropTypes.number,
    download_count: PropTypes.number,
    summary: PropTypes.string
  }
  
  export default MovieSearch;