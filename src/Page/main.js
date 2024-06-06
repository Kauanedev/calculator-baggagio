import './main.css';
import {useState} from 'react';

function Main() {

  const [value, setValue] = useState(0)
  const [previousNum, setPreiousNum] = useState(0)
  const [operator, setOperator] = useState('')

  function inputNum(e) {
    const input = e.target.value;
    if (value === 0) {
      setValue(input)
    }
    else {
      setValue(value + input)
    }
  }

  function operatorHandler(e) {
    const operatorInput = e.target.value;
    setOperator(operatorInput);
    setPreiousNum(value);
    setValue(0);
  }

  function calculate() {
    if (operator === "/") {
      setValue(parseFloat(previousNum) / parseFloat(value));
    } else if (operator === "x") {
      setValue(parseFloat(previousNum) * parseFloat(value));
    } else if (operator === "-") {
      setValue(parseFloat(previousNum) - parseFloat(value));
    } else if (operator === "+") {
      setValue(parseFloat(previousNum) + parseFloat(value));
    }
  }

  return (
    <div className="main">

      <div className="calculator">
        <div className="form">
          <div className="display">
            <input type="text" value={value} />
          </div>
          <div>
            <input type="button" value="C" onClick={e => setValue('')} />
            <input type="button" value="Pi" onClick={e => setValue(3.14159265358979)} />
            <input type="button" value="Del" onClick={e => setValue(value.slice(0, -1))} />
            <input type="button" value="/" onClick={operatorHandler} />
          </div>
          <div>
            <input type="button" value={7} onClick={inputNum} />
            <input type="button" value={8} onClick={inputNum} />
            <input type="button" value={9} onClick={inputNum} />
            <input type="button" value="x" onClick={operatorHandler} />
          </div>
          <div>
            <input type="button" value={4} onClick={inputNum} />
            <input type="button" value={5} onClick={inputNum} />
            <input type="button" value={6} onClick={inputNum} />
            <input type="button" value="-" onClick={operatorHandler} />
          </div>
          <div>
            <input type="button" value={1} onClick={inputNum} />
            <input type="button" value={2} onClick={inputNum} />
            <input type="button" value={3} onClick={inputNum} />
            <input type="button" value="+" onClick={operatorHandler} />
          </div>
          <div className='bottom-div'>
            <input type="button" value="?" />
            <input type="button" value={0} onClick={inputNum} />
            <input type="button" value={'.'} onClick={inputNum} />
            <input type="button" value="=" onClick={calculate} />
          </div>
        </div>
      </div >

    </div>
  );
}

export default Main;
