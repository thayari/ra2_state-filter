import React from 'react'
import PropTypes from 'prop-types'

function Toolbar(props) {
  const buttons = props.filters.map((item) => <button onClick={() => {
    props.onSelectFilter(item);
  }} key={item}>{item}</button>);
  return (
    <div className="toolbar">
      {buttons}
    </div>
  )
}

Toolbar.propTypes = {
  filters: PropTypes.array,
  selected: PropTypes.string,
  onSelectFilter: PropTypes.func
};

export default Toolbar

