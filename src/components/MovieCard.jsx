import PropTypes from 'prop-types';
import { Container } from './MovieCard.styled';

const MovieCard = ({ movie }) => {
    const { title,
        genres,
        release_date,
        overview,
        vote_average,
        poster_path } = movie;
    const releaseDate = new Date(release_date).getFullYear();
    const userRate = ((vote_average / 10) * 100).toFixed(0);
    const imgURL = `https://image.tmdb.org/t/p/w300${poster_path}`;

    return (
        <Container>
            <img src={imgURL} alt={title} />
            <div>
                <h1>
                    {title} ({releaseDate})
                </h1>
                <p>User rate: {userRate}%</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>{genres && genres[0].name}</p>
            </div>
        </Container>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        poster_path: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(
            PropTypes.shape({ name: PropTypes.string.isRequired })
        ),
    }).isRequired,
};

export default MovieCard;