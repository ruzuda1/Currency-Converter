import React from "react";

import { connect } from "react-redux";
import { setValuesAC } from "../Reducer/HeaderReducer";
import axios from "axios";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
      .then((response) => {
        this.props.setValues(response.data);
      });
  }

  render() {
    return <Header rates={this.props.rates} />;
  }
}

let mapStateToProps = (state) => {
  return {
    rates: state.headerPage.rates,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setValues: (value) => {
      dispatch(setValuesAC(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
