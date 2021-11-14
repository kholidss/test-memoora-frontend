import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const classes = {
  label: 'w-full text-sm font-bold text-gray-700 tracking-wide',
  input: 'w-full text-lg py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500',
  errorClass: 'text-red-500 text-xs',
}

/* eslint-disable react/prop-types */
const Input = forwardRef(
  ({ idx, type, name, label, placeholder, register, required, errors, ...props }, ref) => {
    return (
      <label htmlFor={idx} className={classes.label}>
        <span>{label}</span>
        <input
          className={classes.input}
          type={type}
          placeholder={placeholder}
          id={idx}
          ref={ref}
          {...register(name, { required })}
          {...props}
        />
        {errors ? <span className={classes.errorClass}> {errors.message} </span> : ''}
      </label>
    )
  }
)

Input.defaultProps = {
  label: '',
  placeholder: '',
  required: false,
}

Input.propTypes = {
  idx: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'button',
    'checkbox',
    'color',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
  ]).isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
}

export default Input
