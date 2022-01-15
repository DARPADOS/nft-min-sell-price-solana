const InputLabel = ({ labelName, updateValue, inputType, required }) => {
  return (
    <div className="mb-2 flex flex-col">
      <label className="block text-sm font-medium text-gray-700">
        {labelName}
      </label>
      <input
        onChange={(event) => updateValue(event.target.value)}
        className="rounded-lg px-2 py-2 border border-gray-400 shadow-sm"
        inputMode={inputType}
        required={required}
      ></input>
    </div>
  );
};

export default InputLabel;
