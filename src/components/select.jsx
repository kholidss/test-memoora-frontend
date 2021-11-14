import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import Icon from './icons'
import { joinClass } from '../utils/strings'

const classes = {
  label: 'w-full text-sm font-bold text-gray-700 tracking-wide',
  wrapper: 'relative inline-block w-full text-gray-900 mt-3',
  input:
    'w-full h-10 pl-3 pr-6 text-base placeholder-gray-100 border rounded-lg appearance-none border-2 focus:outline-none focus:border-blue-500',
  errorClass: 'text-red-500 text-xs',
  icon: 'absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none',
  loading: {
    wrap: 'absolute flex items-center justify-center w-full h-full bg-white bg-opacity-30 left-0 top-0',
    element: 'animate-spin h-5 w-5 text-black bg-opacity-20',
    circle: 'opacity-25',
    path: '',
  },
}

/* eslint-disable react/prop-types */
const Select = forwardRef(
  (
    {
      idx,
      type,
      name,
      lisData,
      label,
      placeholder,
      register,
      required,
      disabled,
      errors,
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
    return (
      <label htmlFor={idx} className={classes.label}>
        <span>{label}</span>
        <div className={classes.wrapper}>
          <select
            id={idx}
            ref={ref}
            placeholder={placeholder}
            disabled={isDisabled}
            {...register(name, { required })}
            {...props}
            className={joinClass(`${classes.input} ${isDisabled ? classes.disabled : ''}`)}
          >
            <option value="">Select {label}</option>
            {lisData.map((item) => {
              return (
                <option key={item.id} value={item.value}>
                  {item.name}
                </option>
              )
            })}
          </select>
          <div className={classes.icon}>
            <Icon name="down" size={20} />
          </div>
          {elementLoading}
        </div>
        {errors ? <span className={classes.errorClass}> {errors.message} </span> : ''}
      </label>
    )
  }
)

Select.defaultProps = {
  label: '',
  placeholder: '',
  required: false,
  disabled: false,
  isLoading: false,
}

Select.propTypes = {
  idx: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
  lisData: PropTypes.array.isRequired,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
}

export default Select
