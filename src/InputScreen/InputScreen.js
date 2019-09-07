import React from 'react'
import './InputScreen.scss'

export default function InputScreen({ question, values, onClick }) {
  return (
    <section className="input-screen">
      <h2>{question}</h2>
      <div className="button-container">
        {values.map((value) =>
          <button key={value} onClick={() => onClick(value)}>{value}</button>
        )}
      </div>
    </section>
  )
}