import axios from "axios";
import React, { useEffect, useState } from "react";
import InputV from "./Input";

const MainPage = () => {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("EUR");

  const [rates, setRates] = useState([]);
  useEffect(() => {
    axios
      .get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
      .then((response) => {
        setRates(response.data);
      });
  }, []);

  const handleAmount1Change = (amount1) => {
    setAmount2((amount1 * rates[currency2]) / rates[currency1]);
    setAmount1(amount1);
  };

  const handleCurrency1Change = (currency1) => {
    setAmount2((amount1 * rates[currency2]) / rates[currency1]);
    setCurrency1(currency1);
  };

  const handleAmount2Change = (amount2) => {
    setAmount1((amount2 * rates[currency1]) / rates[currency2]);
    setAmount2(amount2);
  };

  const handleCurrency2Change = (currency2) => {
    setAmount1((amount2 * rates[currency1]) / rates[currency2]);
    setCurrency2(currency2);
  };

  return (
    <div>
      <h3>Value</h3>
      <div>
        <InputV
          currencies={rates}
          amount={amount1}
          currency={currency1}
          onAmountChange={handleAmount1Change}
          onCurrentlyChange={handleCurrency1Change}
        />
      </div>
      <div>
        <InputV
          currencies={rates}
          amount={amount2}
          currency={currency2}
          onAmountChange={handleAmount2Change}
          onCurrentlyChange={handleCurrency2Change}
        />
      </div>
    </div>
  );
};

export default MainPage;
