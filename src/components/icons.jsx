import React from 'react'
import PropTypes from 'prop-types'
import iconPath from '../data/icons'
import kebabToCamel from '../utils/strings'

const defaultClass = 'inline-flex items-center'

const Icon = function ({ size, name, className }) {
  const iconClass = `${className} ${defaultClass}`
  const iconName = kebabToCamel(name)
  return (
    <svg
      className={iconClass}
      viewBox="0 0 24 24"
      width={`${size}px`}
      height={`${size}px`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path fill="currentColor" d={iconPath[iconName]} />
    </svg>
  )
}

Icon.defaultProps = {
  size: 24,
  className: '',
}

Icon.propTypes = {
  size: PropTypes.number,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Icon
