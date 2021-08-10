import React from 'react'

const TextInput = ({ label, name, placeholder, type, value, onChange, onBlur, onFocus, error }) => {
  return (
    <div className="text-input-wrapper">
      <div className="text-input">
        <label className="input-label" htmlFor={name}>{label}</label>
        <input className="input"
        type={type ? type : 'text'}
        name={name}
        placeholder={placeholder ? placeholder : label}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        value={value}
        />
      </div>
      {error && <div className="error">Error: {error}</div>}
    </div>
  )
}

export default TextInput;