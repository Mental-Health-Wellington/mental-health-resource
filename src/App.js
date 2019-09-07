import React, { useState } from 'react';
import './App.scss';

const sexValues = [
  "Male", "Female"
]

const ageValues = [
  "15–24", "25-34", "35-44"
]

function App() {
  const [sex, setSex] = useState(null)
  const [age, setAge] = useState(null)

  function currentPage() {
    if (!sex) {
      return (
        <section>
          <h2>Are you a</h2>
          {sexValues.map((sex) => 
            <button onClick={() => setSex(sex)}>{sex}</button>
          )}
        </section>
      )
    } else if (!age) {
      return (
        <section>
          <h2>How old are you?</h2>
          {ageValues.map((age) => 
            <button onClick={() => setAge(age)}>{age}</button>
          )}
        </section>
      )
    } else {
      return (<p>{sex} {age}</p>)
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
