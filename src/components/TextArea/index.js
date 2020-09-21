import React from 'react';

const TextArea = (props) => {
  const {
    name,
    value,
    type,
    label,
    handleChange,
    style,
    placeholder
  } = props;
  return (
    <div style={style} className="textarea-container">
      <label  style={{color: '#A1A4B8', marginBottom: '10px'}}>{label}</label>
      <textarea
        name={name}
        value={value}
        type={type}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextArea;