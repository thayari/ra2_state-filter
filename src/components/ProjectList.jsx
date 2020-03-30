import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import shortid from 'shortid';


function ProjectList({images}) {
  const imageElements = images.map((image) => <Image key={shortid.generate()} {...image}/>);
  return (
    <div className="project-list">
      { imageElements }
    </div>
  )
}

ProjectList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string,
    category: PropTypes.string,
  }))
}

export default ProjectList


