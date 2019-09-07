import React from 'react'
import './InformationSection.scss'

export default function InformationSection({ header, headerId, children, ...others }) {
  return (
    <section className="information-section" {...others}>
      {header && <h2 id={headerId}>{header}</h2>}
      <>
        {children}
      </>
    </section>
  )
}