import React from 'react';

function InputField({ value, onChange, placeholder }) {
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputField;
