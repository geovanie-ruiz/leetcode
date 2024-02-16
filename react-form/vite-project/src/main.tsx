import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

interface NameProps {
  name: string,
  setName: (name: string) => void,
}

interface AgeProps {
  age: number,
  setAge: (age: number) => void,
}

const NameInput = ({ name, setName }: NameProps) => {
  const [lengthErr, setLengthError] = React.useState(false);
  const [inputError, setInputError] = React.useState(false);

  function handleNameInput(event: React.ChangeEvent<HTMLInputElement>) {
    const entry: string = event.target.value;

    if (entry.length > 20) {
      setLengthError(true);
    } else if (entry.length >= 1 && !/^[a-z]+$/i.test(entry)) {
      setInputError(true);
    } else {
      setName(entry);
      setLengthError(false);
      setInputError(false);
    }
  }

  return (
    <div>
      {lengthErr && <div>Max 20 characters reached</div>}
      {inputError && <div>Alphabet characters only</div>}
      <label>
        Name: <input
            value={name}
            onChange={handleNameInput}
          />
      </label>
    </div>
  )
}

const AgeInput = ({ age, setAge }: AgeProps) => {
  function decreaseAge() {
    let newAge = age - 1;
    if (newAge >= 1) setAge(newAge);
  }

  return (
    <div>
      <label>Age:
        <button onClick={() => setAge(age + 1)}>+</button>{" "}
        <button onClick={decreaseAge}>-</button>
      </label>
    </div>
  );
};

const App = () => {
  const [age, setAge] = React.useState(1);
  const [name, setName] = React.useState('');

  return (
   <div className="App">
    <NameInput name={name} setName={setName} />
    <AgeInput age={age} setAge={setAge} />

    <div>
      { name }, { age }
    </div>
   </div>
  );
 };

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
