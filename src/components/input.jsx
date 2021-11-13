import React, { forwardRef, useState, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import Validation from '../utils/validation'

const classes = {
  label: 'text-sm font-bold text-gray-700 tracking-wide',
  input: 'w-full text-lg py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500',
  errorClass: 'text-red-500 text-xs',
}

const Button = forwardRef(({ idx, type, name, label, placeholder, validation, ...props }, ref) => {
  const [message, setMessage] = useState([])
  const [value, setValue] = useState([])

  useImperativeHandle(ref, () => ({
    validate() {
      const validate = Validation(name, value, validation)
      setMessage(validate)
      return validate
    },
  }))

  const onKeyUpValue = (bind) => {
    setValue(bind.target.value)
  }

  let messageElement
  if (message[0] !== '') {
    messageElement = <span className={classes.errorClass}>{message[0]}</span>
  }

  return (
    <label htmlFor={idx} className={classes.label}>
      <span>{label}</span>
      <input
        className={classes.input}
        type={type}
        placeholder={placeholder}
        id={idx}
        ref={ref}
        onKeyUp={(e) => onKeyUpValue(e)}
        {...props}
      />
      {messageElement}
    </label>
  )
})

Button.defaultProps = {
  label: '',
  placeholder: '',
  validation: '',
}

Button.propTypes = {
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
  validation: PropTypes.string,
}

export default Button
