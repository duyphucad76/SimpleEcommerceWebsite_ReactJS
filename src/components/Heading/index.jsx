import React from 'react'
import "./Heading.scss";

export default function Heading({ children}) {
  return (
    <div className='wrapper'>
      <h2 className='section-title__heading'>{children}</h2>
      <span className='underline'></span>
    </div>
  )
}
