import React from 'react';
import './Pokemon.css';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const {
      name,
      type,
      averageWeight: { value, measurementUnit },
      image
    } = this.props.pokemon;
    return (
      <div className="card-pokemon">
        <div>
          <p>
            <b>Name:</b> {name}
          </p>
          <p>
            <b>Type:</b> {type}
          </p>
          <p>
            <b>Average weight:</b> {value + measurementUnit}
          </p>
        </div>
        <div>
          <img src={image} alt={name} />
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string
    }),
    image: PropTypes.string
  })
};

export default Pokemon;
