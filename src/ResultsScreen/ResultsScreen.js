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
        <a href="#information-to-improve-the-system">Information on improving the mental health system</a>
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

      <InformationSection
        header="Information on how the system can be improved"
        headerId="information-to-improve-the-system"
        >
        <p>According to <a href="https://www.balance.org.nz/">Balance NZ</a>, there are 16 big issues that need more attention. These are:</p>
        <ol>
          <li>Ending forced treatment rather than just ‘minimising’ it.</li>
          <li>Developing advocacy and better processes to ensure system accountability.</li>
          <li>Ending the health-led system and moving towards cross-sector a community led funding and delivery.</li>
          <li>Developing community-based replacements to acute inpatient services.</li>
          <li>Defining and providing easy access to broad range of responses.</li>
          <li>Giving priority to developing peer support.</li>
          <li>Funding and equipping whanau and communities, not just services.</li>
          <li>Honouring Te Tiriti o Waitangi with tangible actions to develop Maori for Maori solutions and equitable outcomes.</li>
          <li>Developing and funding lived experience and whanau roles and a national lead agency.</li>
          <li>Ensuring people who use services have decision-making power with the involvement of trusted whanau.</li>
          <li>Focusing efforts on children and young people.</li>
          <li>Preventing and responding to adverse childhood events (ACEs).</li>
          <li>Stopping inequities and discrimination.</li>
          <li>Creating a zero-suicide target.</li>
          <li>Ensuring people with lived experience lead the Mental Health and Wellbeing Commission.</li>
          <li>Developing a full co-production process for the transformation, not just co-design.</li>
        </ol>
      </InformationSection>
    </section>
  )
}