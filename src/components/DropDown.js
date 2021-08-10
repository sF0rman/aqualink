import React, { useState } from 'react'

const DropDown = ({ title, options }) => {

  const [visible, setVisible] = useState(false);

  const handleShow = e => {
    if (e.target.matches('.dropdown-button')) {
      const content = document.getElementsByClassName('dropdown-content')[0];
      if (!content.classList.contains('show')) {
        content.classList.add('show');
      }
    }
  }

  const handleHide = e => {

  }
  
  return (
    <div className="dropdown" onMouseOver={handleShow}>
      <div className="dropdown-button" to="/">{title}</div>
      <span className="dropdown-content">
        {options.map((opt, i) => (
          <div className="dropdown-item" key={i}>{opt}</div>
        ))}
      </span>
    </div>
  )
}

export default DropDown;