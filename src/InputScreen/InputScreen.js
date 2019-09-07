import React from 'react'

export default function InputScreen({ question, values, onClick }) {
  return (
    <section>
      <h2>{question}</h2>
      {values.map((value) =>
        <button key={value} onClick={() => onClick(value)}>{value}</button>
      )}
    </section>
  )
}