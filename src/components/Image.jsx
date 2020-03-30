import React from 'react';
import PropTypes from 'prop-types';


export default function Image({img, category}) {
  const background = {
    backgroundImage: `url(${img})`,
  }
  return (
    <div style={background} className="image" data-category={category}></div>
  );
};

Image.propTypes = {
  img: PropTypes.string,
  category: PropTypes.string,
};