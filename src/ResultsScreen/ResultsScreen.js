import React from 'react'

import InformationSection from './InformationSection'

import HeadacheImage from '../imgs/headache.jpg'

export default function ResultsScreen({ age, ethnicity, sex, chanceOfDistress, chanceOfHazardousDrinking, suicides, faceToFaceVisitsPercentage }) {
  let suicidesImages = []
  for(var i = 0; i < Math.ceil(suicides); i++) {
    suicidesImages.push(i)
  }

  return (
    <section>
      <InformationSection>
        <h2>As a {age} {ethnicity} {sex}, you are in a demographic where..</h2>
      </InformationSection>
      
      <InformationSection>
        <p><strong>{chanceOfDistress}%</strong> experience <a href="https://en.wikipedia.org/wiki/Mental_distress">mental distress</a> every year. Any one of us can be affected: over 50–80% of New Zealanders will experience mental distress or addiction challenges or both in their lifetime</p>
      </InformationSection>

      <InformationSection>
        <p><strong>{chanceOfHazardousDrinking}%</strong> are battling with hazardous drinking, which many people have identified as a serious public health issue.</p>
      </InformationSection>

      <InformationSection>
        <div style={ { width: '150px', float: 'right' } }>
          {suicidesImages.map(() => 
            <img key={i} height="28px" src={HeadacheImage} alt="person" />)}
        </div>
        <p>
          For every 100,000 people like you, <strong>{suicides}</strong> will take their own life each year.
        </p>
        <div style={{clear: 'both'}} />
      </InformationSection>

      <InformationSection>
        <p>And only <strong>{faceToFaceVisitsPercentage}%</strong> have been seen face-to-face with a mental health, or addiction professional (in 2016).</p>
      </InformationSection>

      <InformationSection>
        <h2>What can I do?</h2>
        <p>If you feel like you are at risk, or suffering from any of these, you are not alone.</p>
        <p>We've put together some information if you'd like to look after yourself, your loved ones, or learning about the state of mental health in New Zealand.</p>
        <a className="button" href="#information-for-myself">Information for myself</a>
        <a className="button" href="#information-to-help-a-loved-one">Information to support a loved one</a>
        <a className="button" href="#information-to-improve-the-system">Information on supporting mental health in New Zealand</a>
      </InformationSection>

      <InformationSection
        header="To help yourself"
        headerId="information-for-myself"
        >
        <p>If you are feel that you are in immediate danger to yourself or others, then <a href="https://www.mentalhealth.org.nz/get-help/in-crisis">find help right away by calling 111, going to your nearest hospital, or calling your local crisis line</a>.</p>
        <p>Support groups are great for finding people who are going through similar issues as yourself. Some examples are <a href="https://www.balance.org.nz/support/online-support-groups">Balance NZ's Online Support Groups</a>, <a href="https://www.mentalhealth.org.nz/get-help/in-crisis/support-groups/">a comprehensive list can also be found on the Mental Health Foundation's website</a>.</p>
        <p><a href="https://1737.org.nz/">1737</a> is a free counseling service which you can call or text. It's available 24/7, so is a fantastic resource if you were looking to talk through a difficult situation shortly after it's happened.</p>
      </InformationSection>

      <InformationSection
        header="To support a loved one"
        headerId="information-to-help-a-loved-one"
        >
        <p>Helping those you love can be difficult, especially when you don't feel like you have the right tools to support them.</p>
        <p>The good news is that you are able to direct them to the wealth of resources out there. Mental Health First Aid Australia has resources to prepare you for conversations about topics such as <a href="https://mhfa.com.au/mental-health-first-aid-guidelines"><strong>depression</strong>, <strong>drug abuse</strong>, and <strong>suicides</strong></a></p>
        <p>There are also options to go to Mental Health First Aid training courses through organisations such as <a href="https://coliberate.co.nz/mhfa/">Coliberate</a>, and <a href="http://koawatea.co.nz/MHFA/">Ko Awatea</a>. These courses will teach you the skills you need to support your loved ones by having supportive conversations, and guide them to profession help if they need it.</p>
      </InformationSection>

      <InformationSection
        header="Supporting mental health in New Zealand"
        headerId="information-to-improve-the-system"
        >
          <p>Becoming a member, and getting involved with organisations such as <a href="https://www.balance.org.nz/">Balance NZ</a> is a great place to start. They support the community by using the views of people with mental health and addiction issues, so that they can advocate for their civil rights in national forums.</p>

          <p>You can get an understanding of the system by reading the <a href="https://mentalhealth.inquiry.govt.nz/assets/Summary-reports/He-Ara-Oranga.pdf">He Ara Oranga - Mental Health &amp; Addictions Inquiry Report</a>.</p>
          <p>As an example of how <a href="https://www.balance.org.nz/">Balance</a> supports their community, you can read <a href="https://www.balance.org.nz/images/Home-WBC/Report_-_Lived_experience_and_whanau_response_to_MHA_inquiry_17_Feb_2019.pdf">their report on areas they believe need more attention</a>. Some examples being "developing advocacy and better processes to ensure system accountability", and "ending forced treatment rather than just ‘minimising’ it".</p>
      </InformationSection>

      <InformationSection
        header="Where did these stats come from?"
        headerId="information-sources"
        >
        <p>Our sources for this tool have been primarily from the <a href="">New Zealand Mental Health Foundation</a> </p>
        <ul>
          <li><a href="https://minhealthnz.shinyapps.io/nz-health-survey-2016-17-tier-1/">New Zealand Health Survey</a> is where we sourced our information on mental distress, and hazardous drinking. If you are looking to dive deeper into this stats then I recommend checking it out.</li>
          <li><a href="https://mentalhealth.inquiry.govt.nz/assets/Summary-reports/He-Ara-Oranga.pdf">Mental Health &amp; Addictions Inquiry Report</a> was our source on mental distress over a lifetime.</li>
          <li><a href="https://www.health.govt.nz/publication/suicide-facts-2015-data">Ministry of Health, Suicide Facts 2015</a> is where we sourced information on suicides.</li>
          <li><a href="https://www.health.govt.nz/publication/mental-health-and-addiction-service-use-2015-16">Ministry of Health, Mental Health and Addiction Service Use 2015/16</a> is where we sourced our information on face-to-face interactions with mental health or addiction specialists.</li>
        </ul>
      </InformationSection>
    </section>
  )
}