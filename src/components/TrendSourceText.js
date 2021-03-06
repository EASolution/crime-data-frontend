import startCase from 'lodash.startcase'
import PropTypes from 'prop-types'
import React from 'react'

import Term from './Term'

const TrendSourceText = ({ dispatch, place, since, until }) => {
  const estimated = (
    <span>
      <Term id="estimated data" dispatch={dispatch}>
        estimated
      </Term>
    </span>
  )

  return (
    <div className="center italic fs-12 mb8">
      <p>
        Source: FBI, {estimated} data for {startCase(place)}, {since}–{until}.
      </p>
    </div>
  )
}

TrendSourceText.propTypes = {
  dispatch: PropTypes.func,
  place: PropTypes.string,
  since: PropTypes.number.isRequired,
  until: PropTypes.number.isRequired,
}

export default TrendSourceText
