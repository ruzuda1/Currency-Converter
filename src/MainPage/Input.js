const InputV = (props) => {
  return (
    <div className="InputGroup">
      <input
        type="number"
        value={props.amount}
        onChange={(e) => props.amountChange(e.target.value)}
      />
      <select
        value={props.currency}
        onChange={(e) => props.currentlyChange(e.target.value)}
      >
        {props.valCurrencies.map((cur) => (
          <option value={cur.rate}>
            {cur.cc} - {cur.txt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputV;
