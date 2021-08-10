import React from 'react'

const TextArea = ({ label, name, placeholder, value, onChange, onBlur, onFocus, error }) => {
  return (
    <div className="text-input-wrapper">
      <div className="text-input">
        <label className="input-label" htmlFor={name}>{label}</label>
        <textarea
          className="input"
          type="text"
          name={name}
          placeholder={placeholder ? placeholder : label}
          onBlur={onBlur}
          onFocus={onFocus}
          onChange={onChange}
          value={value}></textarea>
      </div>
      {error && <div className="error">Error: {error}</div>}
    </div>
  )
}

export default TextArea;