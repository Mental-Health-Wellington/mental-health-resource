import React from 'react'
import './InputScreen.scss'

export default function InputScreen({ question, values, onClick }) {
  return (
    <section className="input-screen">
      <h2>{question}</h2>
      {values.map((value) =>
        <button key={value} onClick={() => onClick(value)}>{value}</button>
      )}
    </section>
  )
}