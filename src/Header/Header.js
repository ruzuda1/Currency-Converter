import React from "react";
import "./Header.css";

let Header = (props) => {
  return (
    <div>
      <h1>Конвертер валют</h1>
      <div className="d-flex">
        {props.rates.map((u) => (
          <div key={u.id}>
            <div className="card">
              <div>
                <div>{u.ccy}</div> to <div>{u.base_ccy}</div>
              </div>

              <div className="cardInfo">
                <span>
                  Buy: <b>{u.buy}</b>
                </span>
                <span>
                  Sales: <b>{u.sale}</b>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
