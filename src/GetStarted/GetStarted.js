import React from 'react'
import './GetStarted.scss'

export default function GetStarted({ onClick }) {
  return (
    <section className="get-started">
      <h2>I want to take the next step</h2>
      <button style={{ width: 'auto'}} onClick={onClick}>Starting now</button>
    </section>
  )
}