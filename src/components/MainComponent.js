import React, { useContext } from "react";
import CalculatorContext from "../context/CalculatorContext";

function MainComponent() {
  const { result, display, handleResult, handleDisplay, clear } =
    useContext(CalculatorContext);

  return (
    <>
      
        <div className="wrapper col-4  col-sm-3 col-md-3 mx-auto">
          <div className=" d-flex align-items-end flex-column" id="display">
            {result ? <p>{`${display}  ${result}`}</p> : <p> {display || 0}</p>}
            <p>
              <strong>{result || 0}</strong>
            </p>
          </div>
          <input
            type="button"
            className="btn btn-danger btn-lg"
            value="AC"
            id="clear"
            onClick={clear}
          />

          <input
            type="button"
            className="btn btn-secondary btn-lg "
            value="/"
            id="divide"
            onClick={() => handleDisplay("/")}
          />

          <input
            type="button"
            className="btn btn-secondary btn-lg"
            value="x"
            id="multiply"
            onClick={() => handleDisplay("*")}
          />
          <input
            type="button"
            className="btn btn-secondary btn-lg "
            value="7"
            id="seven"
            onClick={() => handleDisplay("7")}
          />

          <input
            type="button"
            className="btn btn-secondary btn-lg "
            value="8"
            id="eight"
            onClick={() => handleDisplay("8")}
          />

          <input
            type="button"
            className="btn btn-secondary btn-lg "
            value="9"
            id="nine"
            onClick={() => handleDisplay("9")}
          />
          <input
            type="button"
            className="btn btn-secondary btn-lg "
            value="-"
            id="subtract"
            onClick={() => handleDisplay("-")}
          />
          <input
            type="button"
            className="btn btn-secondary btn-lg "
            value="4"
            id="four"
            onClick={() => handleDisplay("4")}
          />

          <input
            type="button"
            className="btn btn-secondary btn-lg "
            value="5"
            id="five"
            onClick={() => handleDisplay("5")}
          />

          <input
            type="button"
            className="btn btn-secondary btn-lg "
            value="6"
            id="six"
            onClick={() => handleDisplay("6")}
          />
          <input
            type="button"
            className="btn btn-secondary btn-lg "
            value="+"
            id="add"
            onClick={() => handleDisplay("+")}
          />
          <input
            type="button"
            className="btn btn-secondary btn-lg "
            value="1"
            id="one"
            onClick={() => handleDisplay("1")}
          />

          <input
            type="button"
            className="btn btn-secondary btn-lg "
            value="2"
            id="two"
            onClick={() => handleDisplay("2")}
          />

          <input
            type="button"
            className="btn btn-secondary btn-lg "
            value="3"
            id="three"
            onClick={() => handleDisplay("3")}
          />
          <input
            type="button"
            className="btn btn-secondary btn-lg "
            value="="
            id="equals"
            onClick={handleResult}
          />
          <input
            type="button"
            className="btn btn-secondary btn-lg "
            value="0"
            id="zero"
            onClick={() => handleDisplay("0")}
          />

          <input
            type="button"
            className="btn btn-secondary btn-lg"
            value="."
            id="decimal"
            onClick={() => handleDisplay(".")}
          />
         
        </div>
      
    </>
  );
}

export default MainComponent;
