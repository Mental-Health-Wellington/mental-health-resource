import React from 'react'

import InformationSection from './InformationSection'

export default function ResultsScreen({ age, ethnicity, sex, chanceOfDistress }) {
  return (
    <section>
      <InformationSection>
        <p>Did you know that {chanceOfDistress}% of people like you experience <a href="https://en.wikipedia.org/wiki/Mental_distress">Mental Distress</a>.</p>
        <p>It's a scary statistic, but there are resources available to help you.</p>
        <a href="#information-for-myself">Information for myself</a>
      </InformationSection>

      <InformationSection
        header="Information for myself"
        headerId="information-for-myself"
        >
        <p>here are some resources</p>
      </InformationSection>
    </section>
  )
}