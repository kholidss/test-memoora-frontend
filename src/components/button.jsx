import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { joinClass } from '../utils/strings'
import Icon from './icons'

const classes = {
  base: 'inline-flex items-center justify-center relative overflow-hidden mx-auto focus:outline-none transition ease-in-out duration-300',
  fluid: '-mx-0 w-full',
  disabled: 'opacity-75 cursor-not-allowed',
  rounded: {
    default: {
      small: 'rounded-sm',
      normal: 'rounded-md',
      large: 'rounded-lg',
    },
    pill: 'rounded-full',
  },
  size: {
    small: 'px-3 py-1.5 text-sm',
    normal: 'px-6 py-2.5 font-semibold',
    large: 'px-8 py-4 text-lg font-semibold',
  },
  icon: {
    wrap: '',
    size: {
      small: 16,
      normal: 20,
      large: 28,
    },
    left: {
      small: 'ml-1',
      normal: 'ml-2',
      large: 'ml-3',
    },
    right: {
      small: 'mr-1',
      normal: 'mr-2',
      large: 'mr-3',
    },
  },
  loading: {
    wrap: 'absolute flex items-center justify-center w-full h-full bg-white bg-opacity-80 left-0',
    element: 'animate-spin h-5 w-5 text-black bg-opacity-20',
    circle: 'opacity-25',
    path: '',
  },
  variant: {
    primary:
      'bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 text-white',
    secondary:
      'bg-gray-200 hover:bg-gray-600 focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 text-gray-900 hover:text-white',
    danger:
      'bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 text-white',
  },
}

const Button = forwardRef(
  (
    {
      submit,
      to,
      children,
      className,
      fluid,
      variant,
      size,
      pill,
      disabled,
      icon,
      right,
      isLoading,
      ...props
    },
    ref
  ) => {
    let isDisabled = disabled
    let elementLoading = ''
    if (isLoading) {
      isDisabled = isLoading
      elementLoading = (
        <div className={classes.loading.wrap}>
          <svg
            className={classes.loading.element}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className={classes.loading.circle}
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className={classes.loading.path}
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
      )
    }

    const generateClass = joinClass(
      `${classes.base} ${fluid ? classes.fluid : ''} ${classes.size[size]} ${
        classes.variant[variant]
      } ${pill ? classes.rounded.pill : classes.rounded.default[size]} ${
        isDisabled ? classes.disabled : ''
      } ${className}`
    )

    let element = children
    if (icon !== '') {
      const iconElem = (
        <Icon
          name={icon}
          size={classes.icon.size[size]}
          className={
            children !== '' ? (!right ? classes.icon.right[size] : classes.icon.left[size]) : ''
          }
        />
      )
      element = (
        <>
          {!right && iconElem}
          <span>{children}</span>
          {right && iconElem}
        </>
      )
    }

    if (to !== '') {
      return (
        <Link to={to} ref={ref} className={generateClass} {...props}>
          {element}
        </Link>
      )
    }
    return (
      <button
        ref={ref}
        disabled={isDisabled}
        type={submit ? 'submit' : 'button'}
        className={generateClass}
        {...props}
      >
        {elementLoading}
        {element}
      </button>
    )
  }
)

Button.defaultProps = {
  className: '',
  fluid: false,
  pill: false,
  disabled: false,
  submit: false,
  children: '',
  to: '',
  variant: 'primary',
  size: 'normal',
  icon: '',
  right: false,
  isLoading: false,
}

Button.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  fluid: PropTypes.bool,
  pill: PropTypes.bool,
  disabled: PropTypes.bool,
  submit: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  icon: PropTypes.string,
  right: PropTypes.bool,
  isLoading: PropTypes.bool,
}

export default Button
