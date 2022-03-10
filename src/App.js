
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {CalculatorProvider} from "./context/CalculatorContext"
import MainComponent from "./components/MainComponent";


function App() {
  return (
    <>
    <CalculatorProvider>
      <MainComponent/>
      </CalculatorProvider>
    </>
  );
}

export default App;
