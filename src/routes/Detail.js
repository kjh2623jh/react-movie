import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();

      setMovie(json.data.movie);
    };
    getMovies();
  }, []);

  return (
    <div>
      <h1>{movie.title}</h1>
    </div>
  );
}

export default Detail;
