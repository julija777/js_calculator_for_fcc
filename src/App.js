import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="calculator">
        <div id="display" className="row"></div>
        <div id="clear" className="row">AC</div>
        <div id="seven" className="button">7</div>
        <div id="eight" className="button">8</div>
        <div id="nine" className="button">9</div>
        <div id="multiply" className="button">*</div>
        <div id="four" className="button">4</div>
        <div id="five" className="button">5</div>
        <div id="six" className="button">6</div>
        <div id="divide" className="button">/</div>
        <div id="one" className="button">1</div>
        <div id="two" className="button">2</div>
        <div id="three" className="button">3</div>
        <div id="add" className="button">+</div>
        <div id="zero" className="button">0</div>
        <div id="decimal" className="button">.</div>
        <div id="equals" className="button">=</div>
        <div id="subtract" className="button">-</div>
      </div>
    </div>
  );
}

export default App;
