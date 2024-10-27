import PropTypes from "prop-types";

function MovieDetail({ img, title, year, rate, genres }) {
  return (
    <div>
      <img src={img}></img>
      <h2>{title}</h2>
      <p>Year: {year}</p>
      <p>Rate: {rate}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

MovieDetail.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MovieDetail;
