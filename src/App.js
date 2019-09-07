import React, { useState, useEffect } from 'react';
import './App.scss';

import { PsychologicalDistressService } from './Services/PsychologicalDistressService'
import InputScreen from './InputScreen/InputScreen'

const sexValues = [
  "male", "female"
]

const ageValues = [
  "15–24", "25-34", "35-44", "45-54", "55-64", "65-74", "74+"
]

const ethnicityValues = [
  "Maori", "Pacific", "Asian", "European/Other"
]

function App() {
  const [sex, setSex] = useState(null)
  const [age, setAge] = useState(null)
  const [ethnicity, setEthnicity] = useState(null)
  const [chanceOfDistress, setChanceOfDistress] = useState(null)

  useEffect(() => {
    if (!ethnicity || !sex) return
    const service = new PsychologicalDistressService()
    setChanceOfDistress(service.getEstimateFor({ group: ethnicity, sex }))
  }, [ethnicity, sex])

  function currentPage() {
    if (!sex) {
      return (
        <InputScreen
          question="What is your sex?"
          values={sexValues}
          onClick={setSex}
          />
      )
    } else if (!ethnicity) {
      return (
        <InputScreen
          question="What is your ethnicity?"
          values={ethnicityValues}
          onClick={setEthnicity}
          />
      )
    } else if (!age) {
      return (
        <InputScreen
          question="How old are you?"
          values={ageValues}
          onClick={setAge}
          />
      )
    } else {
      return (<p>{sex} {age} {chanceOfDistress}</p>)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mental Health Awareness Tool</h1>
        {currentPage()}
      </header>
    </div>
  );
}

export default App;
