import React, { useState, useEffect } from 'react';
import './App.scss';

import { PsychologicalDistressService } from './Services/PsychologicalDistressService'
import InputScreen from './InputScreen/InputScreen'
import ResultsScreen from './ResultsScreen/ResultsScreen';
import GetStarted from './GetStarted/GetStarted';

const sexValues = [
  "Male", "Female"
]

const ageValues = [
  "15-24", "25-34", "35-44", "45-54", "55-64", "65-74", "75+"
]

const ethnicityValues = [
  "Māori", "Pacific", "Asian", "European/Other"
]

function App() {
  const [sex, setSex] = useState(null)
  const [age, setAge] = useState(null)
  const [ethnicity, setEthnicity] = useState(null)
  const [chanceOfDistress, setChanceOfDistress] = useState(null)
  const [chanceOfHazardousDrinking, setChanceOfHazardousDrinking] = useState(null)
  const [suicides, setSuicides] = useState(null)
  const [faceToFaceVisitsPercentage, setFaceToFaceVisitsPercentage] = useState(null)
  const [getStarted, setGetStarted] = useState(false)

  function reset() {
    setAge(null)
    setSex(null)
    setEthnicity(null)
    setChanceOfDistress(null)
    setChanceOfHazardousDrinking(null)
    setSuicides(null)
    setFaceToFaceVisitsPercentage(null)
  }

  useEffect(() => {
    if (!ethnicity || !sex || !age) return
    const service = new PsychologicalDistressService()
    setChanceOfDistress(service.getEstimateFor({ group: ethnicity, sex }))
    setChanceOfHazardousDrinking(service.getHazardousDrinkerEstimateFor({ group: ethnicity, sex }))
    setSuicides(service.getSuicidesPer100000({ ethnicity, sex }))
    setFaceToFaceVisitsPercentage(service.getFaceToFaceVisitPercentage({ ethnicity, sex, age }))
  }, [age, ethnicity, sex])

  function currentPage() {
    if (!getStarted) {
      return (
        <GetStarted 
          onClick={() => setGetStarted(true)}
        />
      )
    }
    else if (!sex) {
      return (
        <InputScreen
          question="I am ____"
          values={sexValues}
          onClick={setSex}
          />
      )
    } else if (!ethnicity) {
      return (
        <InputScreen
          question="I am ____"
          values={ethnicityValues}
          onClick={setEthnicity}
          />
      )
    } else if (!age) {
      return (
        <InputScreen
          question="I am ____ years old"
          values={ageValues}
          onClick={setAge}
          />
      )
    } else {
      return (
        <ResultsScreen
          age={age}
          sex={sex}
          ethnicity={ethnicity}
          chanceOfDistress={chanceOfDistress}
          chanceOfHazardousDrinking={chanceOfHazardousDrinking}
          faceToFaceVisitsPercentage={faceToFaceVisitsPercentage}
          suicides={suicides}
        />
      )
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={ { cursor: 'pointer'} }  onClick={() => reset()}>Mental Health Journey</h1>
      </header>
      <div className="body">
        {currentPage()}
      </div>
    </div>
  );
}

export default App;
