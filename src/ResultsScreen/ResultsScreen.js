import React from 'react'

import InformationSection from './InformationSection'

const autoHeight = { minHeight: 'auto' }

export default function ResultsScreen({ age, ethnicity, sex, chanceOfDistress, chanceOfHazardousDrinking, suicides, faceToFaceVisitsPercentage }) {
  return (
    <section>
      <InformationSection style={autoHeight}>
        <h2>As a {ethnicity} {sex} in the {age} age bracket..</h2>
      </InformationSection>
      
      <InformationSection style={autoHeight}>
        <p>You are in a demographic where {chanceOfDistress}% experience <a href="https://en.wikipedia.org/wiki/Mental_distress">Mental Distress</a> per year.</p>
      </InformationSection>

      <InformationSection style={autoHeight}>
        <p>{chanceOfHazardousDrinking}% are battling with hazardous drinking.</p>
      </InformationSection>

      <InformationSection style={autoHeight}>
        <p>For every 100,000 people like you, {suicides} will take their own life.</p>
      </InformationSection>

      <InformationSection style={autoHeight}>
        <p>These are scary statistics, but you are taking the first important step to reducing their impact.</p>
        <a className="button" href="#information-for-myself">Information to help myself</a>
        <a className="button" href="#information-to-help-a-loved-one">Information to help a loved one</a>
        <a className="button" href="#information-to-improve-the-system">Information on improving the mental health system</a>
      </InformationSection>

      <InformationSection
        header="Information for myself"
        headerId="information-for-myself"
        >
        <p>Congratulations, you are one of {faceToFaceVisitsPercentage}% people in your demographic who are seeking help.</p>
        <p>If you are feel that you are in immediate danger to yourself or others, then <a href="https://www.mentalhealth.org.nz/get-help/in-crisis">find help right away by calling 111, going to your nearest hospital, or calling your local crisis line</a>.</p>
        <p>Support groups are great for finding people who are going through similar issues as yourself. Some examples are <a href="https://www.balance.org.nz/support/online-support-groups">Balance NZ's Online Support Groups</a>, </p>
        <p><a href="https://1737.org.nz/">1737</a> is a free councelling service which you can call or text. It's available 24/7, so is a fantastic resource if you were looking to talk through a difficult situation sortly after it's happened.</p>
      </InformationSection>

      <InformationSection
        header="Information to help a loved one"
        headerId="information-to-help-a-loved-one"
        >
        <p>Helping those you love can be difficult, especially when you don't feel like you have the right tools to support them.</p>
        <p>The good news is that you are able to direct them to the wealth of resources out there. Mental Health First Aid Australia has resources to prepare you for conversations about topics such as <a href="https://mhfa.com.au/mental-health-first-aid-guidelines"><strong>depression</strong>, <strong>drug abuse</strong>, and <strong>suicides</strong></a></p>
        <p>There are also options to go to Mental Health First Aid training courses through organisations such as <a href="https://coliberate.co.nz/mhfa/">Coliberate</a>, and <a href="http://koawatea.co.nz/MHFA/">Ko Awatea</a></p>
      </InformationSection>

      <InformationSection
        header="Information on how the system can be improved"
        headerId="information-to-improve-the-system"
        >
          <p>Becoming a member, and getting involved with organisations such as <a href="https://www.balance.org.nz/">Balance NZ</a> is a great place to start. Through them, you can express the views of people with mental health and addiction issues and advocate for their civil rights in national forums.</p>

          <p>The <a href="https://mentalhealth.inquiry.govt.nz/assets/Summary-reports/He-Ara-Oranga.pdf">He Ara Oranga - Mental Health &amp; Addictions Inquiry Report</a> is a great way to get a better understanding on the current state of our mental health system.</p>
          <p><a href="https://www.balance.org.nz/">Balance NZ</a> have put together <a href="https://www.balance.org.nz/images/Home-WBC/Report_-_Lived_experience_and_whanau_response_to_MHA_inquiry_17_Feb_2019.pdf">a great report on additional areas they believe need more attention</a>.</p>
      </InformationSection>
    </section>
  )
}