const InputV = (props) => {
  return (
    <div className="InputGroup">
      <input
        type="text"
        value={props.amount}
        onChange={(e) => props.onAmountChange(e.target.value)}
      />
      <select
        value={props.currency}
        onChange={(e) => props.onCurrentlyChange(e.target.value)}
      >
        {props.currencies.map((cur) => (
          <option value={cur.rate}>
            {cur.cc} - {cur.txt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputV;
