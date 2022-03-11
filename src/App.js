import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CalculatorProvider } from "./context/CalculatorContext";
import MainComponent from "./components/MainComponent";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <CalculatorProvider>
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <MainComponent />
                  <Footer />
                </>
              }
            ></Route>
          </Routes>
        </Router>
      </CalculatorProvider>
    </>
  );
}

export default App;
