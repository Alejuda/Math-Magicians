import CalcNumber from './CalcNumber';

function Calculator() {
  return (
    <div className="grid-container">
      <div className="calc-number calc-screen">0</div>
      <div className="calc-number calc-res">AC</div>
      <div className="calc-number calc-toggle-positive">+/-</div>
      <div className="calc-number calc-percent">%</div>
      <div className="calc-number calc-op calc-div">÷</div>
      <CalcNumber number={7} />
      <CalcNumber number={8} />
      <CalcNumber number={9} />
      <div className="calc-number calc-op calc-multi">x</div>
      <CalcNumber number={4} />
      <CalcNumber number={5} />
      <CalcNumber number={6} />
      <div className="calc-number calc-op calc-rest">-</div>
      <CalcNumber number={1} />
      <CalcNumber number={2} />
      <CalcNumber number={3} />
      <div className="calc-number calc-op calc-sum">+</div>
      <div className="calc-number calc-0">0</div>
      <div className="calc-number calc-coma">.</div>
      <div className="calc-number calc-op calc-iqual">=</div>
    </div>
  );
}

export default Calculator;
