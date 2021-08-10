import React from 'react'

const Toast = ({ title, message, error }) => {
  return (
    <div className="toast">
      <div className={error ? 'error' : 'success'}>
        <h3>{title}</h3>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Toast;