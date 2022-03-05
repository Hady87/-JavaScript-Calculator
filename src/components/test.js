import React from "react";

function MainComponent() {
  return (
    <>
      <div className="container w-25 gx-0">
        <div className="row gx-0">
          <div className="col col-12" id="display">
            <p>display</p>
          </div>

          <div className="col-12">
            <input
              type="button"
              className="btn btn-danger btn-lg "
              value="AC"
              id="clear"
            />

            <input
              type="button"
              className="btn btn-secondary btn-lg"
              value="/"
              id="divide"
            />

            <input
              type="button"
              className="btn btn-secondary btn-lg"
              value="x"
              id="multiply"
            />
          </div>
          <div className="col-12">
            <input
              type="button"
              className="btn btn-secondary btn-lg "
              value="7"
              id="seven"
            />

            <input
              type="button"
              className="btn btn-secondary btn-lg "
              value="8"
              id="eight"
            />

            <input
              type="button"
              className="btn btn-secondary btn-lg "
              value="9"
              id="nine"
            />
            <input
              type="button"
              className="btn btn-secondary btn-lg "
              value="-"
              id="subtract"
            />
          </div>

          <div className="col-12">
            <input
              type="button"
              className="btn btn-secondary btn-lg "
              value="4"
              id="four"
            />

            <input
              type="button"
              className="btn btn-secondary btn-lg "
              value="5"
              id="five"
            />

            <input
              type="button"
              className="btn btn-secondary btn-lg "
              value="6"
              id="six"
            />
            <input
              type="button"
              className="btn btn-secondary btn-lg "
              value="+"
              id="add"
            />
          </div>
          <div className="col-9 gx-0">
            <div className="row row1 gx-0 ">
              <input
                type="button"
                className="btn btn-secondary btn-lg "
                value="1"
                id="one"
              />

              <input
                type="button"
                className="btn btn-secondary btn-lg "
                value="2"
                id="two"
              />

              <input
                type="button"
                className="btn btn-secondary btn-lg "
                value="3"
                id="three"
              />
            </div>
            <div className="row row2 gx-0">
              <input
                type="button"
                className="btn btn-secondary btn-lg w-33 "
                value="0"
                id="zero"
              />

              <input
                type="button"
                className="btn btn-secondary btn-lg"
                value="."
                id="decimal"
              />
            </div>
          </div>
          <div className="col-3 gx-0 ">
            <input
              type="button"
              className="btn btn-secondary btn-lg  w-100"
              value="="
              id="equals"
            />
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default MainComponent;
