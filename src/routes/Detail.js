import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const { id } = useParams();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
    console.log(movie);
    console.log("hello");
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <h1>Detail</h1>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <MovieDetail
          img={movie.medium_cover_image}
          title={movie.title}
          year={movie.year}
          rate={movie.rating}
          genres={movie.genres}
        />
      )}
    </div>
  );
}

export default Detail;
