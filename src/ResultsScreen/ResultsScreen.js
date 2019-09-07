import React from 'react'

import InformationSection from './InformationSection'

export default function ResultsScreen({ age, ethnicity, sex, chanceOfDistress, chanceOfHazardousDrinking }) {
  return (
    <section>
      <InformationSection>
        <p>Did you know that {chanceOfDistress}% of people like you experience <a href="https://en.wikipedia.org/wiki/Mental_distress">Mental Distress</a>.</p>
        <p>{chanceOfHazardousDrinking}% are also battling with hazardous drinking.</p>
        <p>These are scary statistics, but you are taking the first important step to reducing their impact.</p>
        <a href="#information-for-myself">Information to help myself</a><br />
        <a href="#information-to-help-a-loved-one">Information to help a loved one</a><br />
        <a href="#information-to-improve-the-system">Information on improving the mental health system</a>
      </InformationSection>

      <InformationSection
        header="Information for myself"
        headerId="information-for-myself"
        >
          <p>Congratulations, you are one of X% people who are seeking help.</p>
          <p>If you are feel that you are in immediate danger to yourself or others, then <a href="https://www.mentalhealth.org.nz/get-help/in-crisis">find help right away by calling 111, going to your nearest hospital, or calling your local crisis line</a>.</p>
          <p>Support groups are great for finding people who are going through similar issues as yourself. Some examples are <a href="https://www.balance.org.nz/support/online-support-groups">Balance NZ's Online Support Groups</a>, </p>
          <p><a href="https://1737.org.nz/">1737</a> is a free councelling service which you can call or text. It's available 24/7, so is a fantastic resource if you were looking to talk through a difficult situation sortly after it's happened.</p>
      </InformationSection>

      <InformationSection
        header="Information to help a loved one"
        headerId="information-to-help-a-loved-one"
        >
        <p>Helping those you love can be difficult, especially when you don't feel like you have the right tools to support them.</p>
        <p>The good news is that you are able to direct them to the wealth of resources out there.</p>
      </InformationSection>

      <InformationSection
        header="Information on how the system can be improved"
        headerId="information-to-improve-the-system"
        >
          <p>For the current state of mental health in New Zealand, it's recommeneded to read through the <a href="https://mentalhealth.inquiry.govt.nz/assets/Summary-reports/He-Ara-Oranga.pdf">He Ara Oranga - Mental Health &amp; Addictions Inquiry Report</a></p>
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