import React from 'react'

import InformationSection from './InformationSection'

export default function ResultsScreen({ age, ethnicity, sex, chanceOfDistress }) {
  return (
    <section>
      <InformationSection>
        <p>Did you know that {chanceOfDistress}% of people like you experience <a href="https://en.wikipedia.org/wiki/Mental_distress">Mental Distress</a>.</p>
        <p>It's a scary statistic, but there are resources available to help you.</p>
        <a href="#information-for-myself">Information to help myself</a><br />
        <a href="#information-to-help-a-loved-one">Information to help a loved one</a><br />
      </InformationSection>

      <InformationSection
        header="Information for myself"
        headerId="information-for-myself"
        >
          <p>Congratulations, you are one of X% people who are seeking help.</p>
      </InformationSection>

      <InformationSection
        header="Information to help a loved one"
        headerId="information-to-help-a-loved-one"
        >
        <p>here are some resources</p>
      </InformationSection>
    </section>
  )
}