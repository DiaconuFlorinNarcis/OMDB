import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BackButton } from '../components/BackButton';
import OMDBKey from './../api/apikey';

export class Detail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  }

  state = { movie: {} }

  _fetchMovie ({ id }) {
    fetch(`http://www.omdbapi.com/?apikey=${OMDBKey.apiKey}&i=${id}`)
      .then(res => res.json())
      .then(movie => {
        this.setState({ movie })
      })
  }

  componentDidMount () {
    const { movieId } = this.props.match.params
    this._fetchMovie({ id: movieId })
  }

  render () {
    const { Title, Poster, Actors, Metascore } = this.state.movie

    return (
      <div className="detalle">
        <h1>{Title}</h1>
        <img src={Poster} alt={Title} className="shadow p-3 mb-5 bg-white rounded" />
        <div>
          <p className="badge badge-pill blue-gradient">Rate: {Metascore / 10}</p>
          <p><strong>Actors: </strong>{Actors}</p>
          <BackButton />
        </div>

      </div>
    )
  }
}
